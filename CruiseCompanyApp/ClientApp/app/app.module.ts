import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { bookingsComponent } from './components/bookings/bookings.component';
import { searchComponent } from './components/search/search.component';


import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        bookingsComponent,
        searchComponent,
    ],
    imports: [
      UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
      FormsModule ,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'bookings', component: bookingsComponent }, 
            { path: 'search', component: searchComponent }, 
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
