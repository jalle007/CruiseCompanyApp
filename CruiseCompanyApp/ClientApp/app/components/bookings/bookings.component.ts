import { Component, Pipe } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bookings',
  template: require('./bookings.component.html')
})

export class bookingsComponent {
  public quarter: number;
  public JSONModel: JSONModel;
  public bookingsList: SalesView[] = [];
  public bookingDetails: SalesDetailView[] = [];
  public activeRow: string = "0";
  public unfolded: boolean;

  constructor(public http: Http) {
    this.quarter = 1;
    this.unfolded = false;
    this.getBookings();
  }

  selectItem(value) {
    this.quarter = value;
    console.log("select: ", this.quarter);
    this.getBookings();
  }

  getBookings() {
    this.http.get('/api/bookings/' + this.quarter).subscribe(
      result => {
        this.bookingsList = result.json();
      }
    );
  }

  getBookingsBySaleUnit(saleUnit, qtr) {
    //console.log("saleUnit:" + saleUnit + " quarter " + qtr);
    if (this.activeRow == saleUnit) {
      this.unfolded = !this.unfolded;
      return;
    } else { this.unfolded = false; }

    this.http.get('/api/bookings/' + saleUnit + '/' + qtr).subscribe(result => {
      this.bookingDetails = result.json();
    });
    this.activeRow = saleUnit;
  }


  getCountryFlag(country) {
    var url = "http://www.geognos.com/api/en/countries/flag/";
    var countries = ['China', 'CN', 'Germany', 'DE', 'Italy', 'IT', 'Netherlands', 'NL', 'Australia', 'AU', 'Brazil', 'BR', 'Russia', 'RU', 'France', 'FR'];
    var index = countries.indexOf(country);
    if (index != -1)
      return url + countries[index + 1] + ".png";
    else
      return "#";
  }
}


export interface SalesView {
  Id: number;
  Name: string;
  Country: string;
  Total: number;
  Currency: string;
}

export interface SalesDetailView {
  BookingId: number;
  ShipName: string;
  Price: number;
  Currency: string;
}


export interface Booking {
  id: number;
  shipId: number;
  bookingDate: string;
  price: number;
}
export interface Ship {
  id: number;
  salesUnitId: number;
  name: string;
}
export interface SalesUnit {
  id: number;
  name: string;
  country: string;
  currency: string;
}
export interface JSONModel {
  salesUnits: SalesUnit[];
  ships: Ship[];
  bookings: Booking[];
}

//@Pipe({ name: 'round' })
//export class RoundPipe {
//  transform(input: number) {
//    return Math.floor(input);
//  }
//}