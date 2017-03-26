using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace A2SPA.Models {
  public class SalesUnit {
    [Key]
    public int id { get; set; }
    public string name { get; set; }
    public string country { get; set; }
    public string currency { get; set; }
    }

  public class Ship {
    [Key]
    public int id { get; set; }
    public int salesUnitId { get; set; }
    public string name { get; set; }
    }

  public class Booking {
    [Key]
    public int id { get; set; }
    public int shipId { get; set; }
    public string bookingDate { get; set; }
    public float price { get; set; }
    }

  public class JSONModel {
    public List<SalesUnit> salesUnits { get; set; }
    public List<Ship> ships { get; set; }
    public List<Booking> bookings { get; set; }
    }
  }
