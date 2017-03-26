using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Hosting;
using A2SPA.Models;

namespace CruiseCompanyApp.Controllers {
  [Produces("application/json")]
  [Route("api")]
  public class BookingsAPI : Controller {
    private IHostingEnvironment _env;
    public JSONModel jsonData;
    public BookingsAPI ( IHostingEnvironment env) {
      _env = env;
      ReadJSON();
      }

    //Main list
    [Route("bookings/{quarter}")]
    public List<SalesView> Bookings (int quarter) {
      var quarterBookings = BookingsByQuarter(quarter);

      var subQuery1 = from qb in quarterBookings
                group qb by qb.shipId into shipBookings
                select new {
                  ShipKey = shipBookings.Key,
                  Sum = shipBookings.Sum(p => p.price)
                  };

      var shipSum = from emp in jsonData.ships
                    join s in subQuery1 on emp.id equals s.ShipKey
                    join pd in jsonData.salesUnits on emp.salesUnitId equals pd.id
                    select new SalesView {
                      Id = pd.id,
                      Name = pd.name,
                      Country = pd.country,
                      Total = s.Sum,
                      Currency = pd.currency
                      };

      var subQuery2 = from s in shipSum
                   group s by s.Country
                        into res
                   select new SalesView {
                     Id = res.FirstOrDefault().Id,
                     Name = res.FirstOrDefault().Name,
                     Country = res.FirstOrDefault().Country,
                     Total = (float)Math.Round(res.Sum(r => r.Total)),
                     Currency = res.FirstOrDefault().Currency
                     };

      var salesViewList = subQuery2.OrderByDescending(c => c.Total).ToList();
      return salesViewList;
      }
    
    //Details
    [Route("bookings/{saleUnit}/{quarter}")]
    public List<SalesDetailView> BookingsBySaleUnit (int saleUnit, int quarter) {
      string currency = jsonData.salesUnits.Where(u => u.id == saleUnit).FirstOrDefault().currency;
      var quarterBookings = BookingsByQuarter(quarter);
      var shipsBySaleUnit = from s in jsonData.ships
                            where s.salesUnitId == saleUnit
                            select s;

      var shipSum = (from b in quarterBookings
                    join s in shipsBySaleUnit on b.shipId equals s.id
                    select new SalesDetailView {
                      BookingId = b.id,
                      ShipName = s.name,
                      Price = b.price,
                      Currency = currency
                      }).ToList();

      return shipSum;
      }

    // Filter by bookingId or  shipname 
    [Route("searchbookings/{searchValue}")]
    public List<SearchView> SearchBookings(string searchValue) {
      IEnumerable<SearchView> searchResults = null;
      IEnumerable<Booking> bookings = null;
      int max=1000; //we have to limit search here becaseu of performance 
      int id;
      bool isNumeric = int.TryParse(searchValue, out id);

      
      if (isNumeric)
        bookings = jsonData.bookings.Where(b=>b.id==id);

      else {
        var getShipIds= jsonData.ships.Where(s=>s.name.ToLower().StartsWith(searchValue.ToLower()));
        bookings = from booking in jsonData.bookings where getShipIds.Select(s=>s.id).Contains(booking.shipId) select booking;
        }
        searchResults = from ship in jsonData.ships
                    join b in bookings on ship.id equals b.shipId
                    select new SearchView {
                      BookingId = b.id,
                      ShipName=ship.name,
                      BookingDate=DateTime.Parse( b.bookingDate).ToString("yyyy-MM-dd"),
                      Price=b.price
                      };
      //  var x= searchResults.Take(10).ToList();
      return searchResults.ToList();
      }

    // Filter bookisng by quarter (0 for all)
    public List<Booking> BookingsByQuarter (int quarter) {
    //  ReadJSON();
      int fromMonth = quarter * 3 - 3;
      int toMonth = quarter * 3;
      List<Booking> res = null;
      
      if(quarter==0)
          res = jsonData.bookings.ToList();
      else {
          res = (from b in jsonData.bookings
                 where
                           Convert.ToDateTime(b.bookingDate).Year == 2016 &&
                           Convert.ToDateTime(b.bookingDate).Month > fromMonth &&
                           Convert.ToDateTime(b.bookingDate).Month <= toMonth
                 select b).ToList();
        }
        return res;
      }

    private void ReadJSON () {
      if (jsonData != null) return;
      var jsonFile = _env.ContentRootPath + Path.DirectorySeparatorChar.ToString() + "Data" +
                                                               Path.DirectorySeparatorChar.ToString() + "TrialDayData.json";
      string fileContent;
      using (var stream = new FileStream(jsonFile, FileMode.Open))
      using (StreamReader sr = new StreamReader(stream)) {
        fileContent = sr.ReadToEnd();
        }
      jsonData = JsonConvert.DeserializeObject<JSONModel>(fileContent);
      }

    }
  }
