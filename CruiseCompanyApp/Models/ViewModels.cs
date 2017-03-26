using System.ComponentModel.DataAnnotations;

namespace A2SPA.Models
{
    //List
      public class SearchView
      { [Key]
          public int BookingId { get; set; }
          public string ShipName { get; set; }
          public string BookingDate { get; set; }
          public float Price { get; set; }
      }
      
     //List
      public class SalesView
      { [Key]
          public int Id { get; set; }
          public string Name { get; set; }
          public string Country { get; set; }
          public float Total { get; set; }
          public string Currency { get; set; }
      }
      
      //Detail
      public class SalesDetailView
      {   
          public int BookingId { get; set; }
          public string ShipName { get; set; }
          public float Price { get; set; }
          public string Currency { get; set; }
      }
      
}
