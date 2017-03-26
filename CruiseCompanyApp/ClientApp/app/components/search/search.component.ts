import { Component, Pipe } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'search',
    template: require('./search.component.html')
})

export class searchComponent {
  public loading: boolean;
  public searchValue: string;
  public notValid: boolean;
  public searchResults: SearchView[] = [];

  constructor(public http: Http) {
  }

  SearchBookings(searchValue) {
    this.notValid = isNaN(searchValue) && searchValue.length < 2 || searchValue == "";
   // console.log(notValid);
    if (this.notValid) {
      this.searchResults = [];
      return;
    }

    this.loading = true;
    this.http.get('/api/searchbookings/' + searchValue).subscribe(
      result => {
          //console.log("result", result.json() );
          this.searchResults = result.json();
          this.loading = false;
        }
      );
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


export interface SearchView {
  bookingId: number;
  shipName: string;
  bookingDate: string;
  price: number;
}
 