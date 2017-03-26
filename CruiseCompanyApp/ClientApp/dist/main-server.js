(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(6);
	var angular2_universal_1 = __webpack_require__(4);
	var app_component_1 = __webpack_require__(7);
	var navmenu_component_1 = __webpack_require__(12);
	var home_component_1 = __webpack_require__(16);
	var bookings_component_1 = __webpack_require__(18);
	var search_component_1 = __webpack_require__(21);
	var forms_1 = __webpack_require__(23);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        bootstrap: [app_component_1.AppComponent],
	        declarations: [
	            app_component_1.AppComponent,
	            navmenu_component_1.NavMenuComponent,
	            home_component_1.HomeComponent,
	            bookings_component_1.bookingsComponent,
	            search_component_1.searchComponent,
	        ],
	        imports: [
	            angular2_universal_1.UniversalModule,
	            forms_1.FormsModule,
	            router_1.RouterModule.forRoot([
	                { path: '', redirectTo: 'home', pathMatch: 'full' },
	                { path: 'home', component: home_component_1.HomeComponent },
	                { path: 'bookings', component: bookings_component_1.bookingsComponent },
	                { path: 'search', component: search_component_1.searchComponent },
	                { path: '**', redirectTo: 'home' }
	            ])
	        ]
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(8),
	        styles: [__webpack_require__(9)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\n    <div class='row'>\n        <div class='col-sm-3'>\n            <nav-menu></nav-menu>\n        </div>\n        <div class='col-sm-9 body-content'>\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(10);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "@media (max-width: 767px) {\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\n    .body-content {\n        padding-top: 50px;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	    }
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'nav-menu',
	        template: __webpack_require__(13),
	        styles: [__webpack_require__(14)]
	    })
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div class='main-nav'>\n    <div class='navbar navbar-inverse'>\n        <div class='navbar-header'>\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n                <span class='sr-only'>Toggle navigation</span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n                <span class='icon-bar'></span>\n            </button>\n            <a class='navbar-brand' [routerLink]=\"['/home']\">\r\n              <img src=\"../dreamlines-logo.png\"  height=\"50\"/></a>\n        </div>\n        <div class='clearfix'></div>\n        <div class='navbar-collapse collapse'>\n          <ul class='nav navbar-nav'>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n              <a [routerLink]=\"['/home']\">\r\n                <span class='glyphicon glyphicon-home'></span> Task\r\n              </a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n              <a [routerLink]=\"['/bookings']\">\r\n                <span class='glyphicon glyphicon-th-list'></span> Solution\r\n              </a>\r\n            </li>\r\n\r\n            <li [routerLinkActive]=\"['link-active']\">\r\n              <a [routerLink]=\"['/search']\">\r\n                <span class='glyphicon glyphicon-search'></span> Search\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\n        </div>\n    </div>\n</div>\n"

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(15);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, "li .glyphicon {\n    margin-right: 10px;\n}\n\n/* Highlighting rules for nav menu items */\nli.link-active a,\nli.link-active a:hover,\nli.link-active a:focus {\n    background-color: #4189C7;\n    color: white;\n}\n\n/* Keep the nav menu independent of scrolling and on top of other items */\n.main-nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n}\n\n@media (min-width: 768px) {\n    /* On small screens, convert the nav menu to a vertical sidebar */\n    .main-nav {\n        height: 100%;\n        width: calc(25% - 20px);\n    }\n    .navbar {\n        border-radius: 0px;\n        border-width: 0px;\n        height: 100%;\n    }\n    .navbar-header {\n        float: none;\n    }\n    .navbar-collapse {\n        border-top: 1px solid #444;\n        padding: 0px;\n    }\n    .navbar ul {\n        float: none;\n    }\n    .navbar li {\n        float: none;\n        font-size: 15px;\n        margin: 6px;\n    }\n    .navbar li a {\n        padding: 10px 16px;\n        border-radius: 4px;\n    }\n    .navbar a {\n        /* If a menu item's text is too long, truncate it */\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n}\n", ""]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(17)
	    })
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<h1>The Task</h1>\n<hr />\n<p>The application should consist of two parts:<br />\r\n-Backend: RESTful API written in .NET Core<br />\r\n-Frontend: SPA written in Angular 2<br /><br />\r\n\r\n You will be given a set of data, containing the list of Bookings made by an online Cruise company. The application should show the Bookings made in the first quarter of 2016.<br /><br />\r\n\r\nThe Frontend should query the API for the Bookings in the given range. Once it gets the data, it should present  a list of Sales Units, showing the name and the total price of their related Bookings. If the user clicks on any Sales Unit, the list of related Bookings should be shown, showing Booking Id, Ship Name and Price.<br /><br />\r\n\r\nOptional: implement a Type-ahead search that will accept either Booking Ids or Ship Names. The implementation should query the backend for searching (no front end searching).<br /><br />\r\n\r\n*All prices should show the correct Currency (which is stored in the Sales Unit). </p>\n<hr />\n<h2><a href=\"/bookings\">Solution</a></h2>"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(19);
	var bookingsComponent = (function () {
	    function bookingsComponent(http) {
	        this.http = http;
	        this.bookingsList = [];
	        this.bookingDetails = [];
	        this.activeRow = "0";
	        this.quarter = 1;
	        this.unfolded = false;
	        this.getBookings();
	    }
	    bookingsComponent.prototype.selectItem = function (value) {
	        this.quarter = value;
	        console.log("select: ", this.quarter);
	        this.getBookings();
	    };
	    bookingsComponent.prototype.getBookings = function () {
	        var _this = this;
	        this.http.get('/api/bookings/' + this.quarter).subscribe(function (result) {
	            _this.bookingsList = result.json();
	        });
	    };
	    bookingsComponent.prototype.getBookingsBySaleUnit = function (saleUnit, qtr) {
	        var _this = this;
	        //console.log("saleUnit:" + saleUnit + " quarter " + qtr);
	        if (this.activeRow == saleUnit) {
	            this.unfolded = !this.unfolded;
	            return;
	        }
	        else {
	            this.unfolded = false;
	        }
	        this.http.get('/api/bookings/' + saleUnit + '/' + qtr).subscribe(function (result) {
	            _this.bookingDetails = result.json();
	        });
	        this.activeRow = saleUnit;
	    };
	    bookingsComponent.prototype.getCountryFlag = function (country) {
	        var url = "http://www.geognos.com/api/en/countries/flag/";
	        var countries = ['China', 'CN', 'Germany', 'DE', 'Italy', 'IT', 'Netherlands', 'NL', 'Australia', 'AU', 'Brazil', 'BR', 'Russia', 'RU', 'France', 'FR'];
	        var index = countries.indexOf(country);
	        if (index != -1)
	            return url + countries[index + 1] + ".png";
	        else
	            return "#";
	    };
	    return bookingsComponent;
	}());
	bookingsComponent = __decorate([
	    core_1.Component({
	        selector: 'bookings',
	        template: __webpack_require__(20)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], bookingsComponent);
	exports.bookingsComponent = bookingsComponent;
	//@Pipe({ name: 'round' })
	//export class RoundPipe {
	//  transform(input: number) {
	//    return Math.floor(input);
	//  }
	//} 


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<h1>Dreamlines GmBH ~ sales for Q{{quarter}} 2016.</h1>\r\n<hr />\r\n<h2>\r\n  Filter by quarters: <select [(ngModel)]=\"quarter\" style=\"color:#ff6a00;\" (change)=\"selectItem($event.target.value)\">\r\n  <option value=\"0\">ALL</option>\r\n  <option value=\"1\" selected>Q1</option>\r\n  <option value=\"2\">Q2</option>\r\n  <option value=\"3\">Q3</option>\r\n  <option value=\"4\">Q4</option>\r\n</select>\r\n</h2>    \r\n<hr />\r\n\r\n<p *ngIf=\"!bookingsList\"><em>Loading data please Wait ! ...</em></p>\r\n\r\nRow: {{activeRow}}\r\nquarter: {{quarter}}\r\nunfolded: {{ !unfolded}}\r\n<table class='table' style=\"background-color:#FFFFFF; border:2px #6D7B8D; padding:5px;width:99%;table-layout:fixed;\" cellpadding=\"2\" cellspacing=\"2\" *ngIf=\"bookingsList\">\r\n\r\n  <tr style=\"height: 30px; background-color:#336699 ; color:#FFFFFF ;border: solid 1px #659EC7;\">\r\n    <td width=\"100\" align=\"center\"></td>\r\n    <td width=\"240\" align=\"center\">Name</td>\r\n    <td width=\"240\" align=\"center\">Country</td>\r\n    <td width=\"120\" align=\"center\">Total</td>\r\n  </tr>\r\n\r\n  <tbody *ngFor=\"let saleUnit of bookingsList\">\r\n    <tr>\r\n      <td align=\"center\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n        <button  (click)=getBookingsBySaleUnit(saleUnit.id,quarter) style=\"background-color:#334668;color:#FFFFFF;font-size:small;width:80px;border-color:#a2aabe;\">\r\n          Details\r\n        </button>\r\n      </td>\r\n\r\n      <td align=\"left\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n        <span style=\"color:#334668;font-size:medium\"><a href=\"http:\\\\{{saleUnit.name}}\" target=\"_blank\">{{saleUnit.name}}</a></span>\r\n      </td>\r\n     \r\n      <td align=\"left\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n        <span style=\"color:#334668;font-size:medium\"><img src=\"{{getCountryFlag(saleUnit.country)}}\" width=\"20\" /> {{saleUnit.country}}</span>\r\n      </td>\r\n\r\n      <td align=\"right\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n        <span style=\"color:#334668;font-size:medium\">{{saleUnit.currency}} {{saleUnit.total }}</span>\r\n      </td>\r\n    </tr>\r\n\r\n    <tr *ngIf=\"(activeRow==saleUnit.id)  && !unfolded\">\r\n      <td colspan=\"6\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n        <table class='table' style=\"background-color:#ECF3F4; border:2px #6D7B8D; padding:5px;width:99%;table-layout:fixed;\" cellpadding=\"2\" cellspacing=\"2\" *ngIf=\"bookingDetails\">\r\n          <tr style=\"height: 30px; background-color:#659EC7 ; color:#FFFFFF ;border: solid 1px #659EC7;\">\r\n            <td width=\"40\" align=\"left\"><Strong>Detail --></Strong>   </td>\r\n            <td width=\"60\" align=\"left\">BookingId</td>\r\n            <td width=\"140\" align=\"center\">ShipName</td>\r\n            <td width=\"120\" align=\"center\">Price</td>\r\n          </tr>\r\n\r\n          <tbody *ngFor=\"let booking  of bookingDetails\">\r\n            <tr>\r\n              <td width=\"40\" align=\"left\"></td>\r\n              <td width=\"60\" align=\"left\">{{booking.bookingId}}</td>\r\n              <td width=\"140\" align=\"center\">{{booking.shipName}}</td>\r\n              <td width=\"120\" align=\"center\">{{booking.currency}} {{booking.price}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </td>\r\n    </tr>\r\n\r\n  </tbody>\r\n</table> \r\n\r\n "

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(19);
	var searchComponent = (function () {
	    function searchComponent(http) {
	        this.http = http;
	        this.searchResults = [];
	    }
	    searchComponent.prototype.SearchBookings = function (searchValue) {
	        var _this = this;
	        this.notValid = isNaN(searchValue) && searchValue.length < 2 || searchValue == "";
	        // console.log(notValid);
	        if (this.notValid) {
	            this.searchResults = [];
	            return;
	        }
	        this.loading = true;
	        this.http.get('/api/searchbookings/' + searchValue).subscribe(function (result) {
	            //console.log("result", result.json() );
	            _this.searchResults = result.json();
	            _this.loading = false;
	        });
	    };
	    searchComponent.prototype.getCountryFlag = function (country) {
	        var url = "http://www.geognos.com/api/en/countries/flag/";
	        var countries = ['China', 'CN', 'Germany', 'DE', 'Italy', 'IT', 'Netherlands', 'NL', 'Australia', 'AU', 'Brazil', 'BR', 'Russia', 'RU', 'France', 'FR'];
	        var index = countries.indexOf(country);
	        if (index != -1)
	            return url + countries[index + 1] + ".png";
	        else
	            return "#";
	    };
	    return searchComponent;
	}());
	searchComponent = __decorate([
	    core_1.Component({
	        selector: 'search',
	        template: __webpack_require__(22)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], searchComponent);
	exports.searchComponent = searchComponent;


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<h2>\r\n  Search bookings : <input [(ngModel)]=\"searchValue\" type=\"text\" name=\"name\" value=\"\" style=\"color:#ff6a00;\" placeholder=\"Id or 2 chars min\" (change)=\"SearchBookings($event.target.value)\">\r\n  <input type=\"button\" name=\"name\" value=\"Go\" />\r\n</h2>\r\n<hr />\r\n\r\n<p *ngIf=\"loading\"><em>Loading data please Wait ! ...</em></p>\r\n\r\nSearch : {{searchValue}}\r\nValid : {{ !notValid}}\r\nloading : {{loading}}\r\n\r\n<table class='table' style=\"background-color:#ECF3F4; border:2px #6D7B8D; padding:5px;width:99%;table-layout:fixed;\" cellpadding=\"2\" cellspacing=\"2\" *ngIf=\"searchResults\">\r\n\r\n  <tr style=\"height: 30px; background-color:#659EC7 ; color:#FFFFFF ;border: solid 1px #659EC7;\">\r\n    <td width=\"60\" align=\"left\">BookingId</td>\r\n    <td width=\"60\" align=\"left\">Date</td>\r\n    <td width=\"140\" align=\"center\">ShipName</td>\r\n    <td width=\"120\" align=\"center\">Price</td>\r\n  </tr>\r\n\r\n  <tbody *ngFor=\"let SearchView  of searchResults\">\r\n    <tr>\r\n      <td width=\"60\" align=\"left\">{{SearchView.bookingId}}</td>\r\n      <td width=\"120\" align=\"center\">{{SearchView.bookingDate}}</td>\r\n      <td width=\"140\" align=\"center\">{{SearchView.shipName}}</td>\r\n      <td width=\"60\" align=\"right\">{{SearchView.price}}</td>\r\n    </tr>\r\n\r\n  </tbody>\r\n</table>\r\n\r\n\r\n"

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODA1NDYzNmFjYTIwNTE2OGRiNmQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz85ZjY0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ib29raW5ncy9ib29raW5ncy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ib29raW5ncy9ib29raW5ncy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBLHdCQUFzQztBQUN0Qyx3QkFBaUI7QUFDakIscUNBQStDO0FBQy9DLG1EQUF5RDtBQUN6RCwyQ0FBNkM7QUFFN0Msc0JBQWMsRUFBRSxDQUFDO0FBQ2pCLEtBQU0sUUFBUSxHQUFHLHdDQUFtQixFQUFFLENBQUM7QUFFdkMsb0JBQXlCLE1BQVc7S0FDaEMsTUFBTSxDQUFDLElBQUks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QUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNkLE1BQU0sQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDN0MsSUFBSTthQUNGLE1BQU0sQ0FBQyxHQUFHLENBQUM7S0FDZixDQUFDO0tBRUgsc0JBQUM7QUFBRCxFQUFDO0FBckNZLGdCQUFlO0tBTDNCLGdCQUFTLENBQUM7U0FDVCxRQUFRLEVBQUUsUUFBUTtTQUNsQixRQUFRLEVBQUUsbUJBQU8sQ0FBQyxFQUF5QixDQUFDO01BQzdDLENBQUM7c0NBUXlCLFdBQUk7SUFObEIsZUFBZSxDQXFDM0I7QUFyQ1ksMkNBQWU7Ozs7Ozs7QUNUNUIsK0lBQThJLDhQQUE4UCxhQUFhLGNBQWMsWUFBWSxnQkFBZ0IsU0FBUyw4REFBOEQsb0JBQW9CLGFBQWEsVUFBVSxtQkFBbUIsa0dBQWtHLDJCQUEyQixnQkFBZ0IsMEJBQTBCLHVWQUF1VixzQkFBc0Isb0RBQW9ELHdCQUF3QixvREFBb0QscUJBQXFCLGtEQUFrRCxrQkFBa0IsNkQ7Ozs7OztBQ0FyekMsNEMiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4MDU0NjM2YWNhMjA1MTY4ZGI2ZCIsImltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtTm9kZUR5bmFtaWMgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtczogYW55KSA6IFByb21pc2U8eyBodG1sOiBzdHJpbmcsIGdsb2JhbHM/OiBhbnkgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZW5kZXIganVzdCB0aGUgPGFwcD4gY29tcG9uZW50IGluc3RlYWQgb2Ygd3JhcHBpbmcgaXQgaW5zaWRlIGFuIGV4dHJhIEhUTUwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgaHRtbDogaHRtbCB9KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcbmltcG9ydCB7IE5hdk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgYm9va2luZ3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYm9va2luZ3MvYm9va2luZ3MuY29tcG9uZW50JztcbmltcG9ydCB7IHNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XG5cblxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBib29raW5nc0NvbXBvbmVudCxcbiAgICAgICAgc2VhcmNoQ29tcG9uZW50LFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgVW5pdmVyc2FsTW9kdWxlLCAvLyBNdXN0IGJlIGZpcnN0IGltcG9ydC4gVGhpcyBhdXRvbWF0aWNhbGx5IGltcG9ydHMgQnJvd3Nlck1vZHVsZSwgSHR0cE1vZHVsZSwgYW5kIEpzb25wTW9kdWxlIHRvby5cbiAgICAgIEZvcm1zTW9kdWxlICxcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xuICAgICAgICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnYm9va2luZ3MnLCBjb21wb25lbnQ6IGJvb2tpbmdzQ29tcG9uZW50IH0sIFxuICAgICAgICAgICAgeyBwYXRoOiAnc2VhcmNoJywgY29tcG9uZW50OiBzZWFyY2hDb21wb25lbnQgfSwgXG4gICAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICdob21lJyB9XG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nY29udGFpbmVyLWZsdWlkJz5cXG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1zbS0zJz5cXG4gICAgICAgICAgICA8bmF2LW1lbnU+PC9uYXYtbWVudT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTkgYm9keS1jb250ZW50Jz5cXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCB0aGUgbmF2IG1lbnUgc3BhbnMgdGhlIGZ1bGwgd2lkdGggb2YgdGhlIHNjcmVlbi4gTGVhdmUgYSBzcGFjZSBmb3IgaXQuICovXFxuICAgIC5ib2R5LWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduYXYtbWVudScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIE5hdk1lbnVDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nbWFpbi1uYXYnPlxcbiAgICA8ZGl2IGNsYXNzPSduYXZiYXIgbmF2YmFyLWludmVyc2UnPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWhlYWRlcic+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSduYXZiYXItdG9nZ2xlJyBkYXRhLXRvZ2dsZT0nY29sbGFwc2UnIGRhdGEtdGFyZ2V0PScubmF2YmFyLWNvbGxhcHNlJz5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPSduYXZiYXItYnJhbmQnIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi9kcmVhbWxpbmVzLWxvZ28ucG5nXFxcIiAgaGVpZ2h0PVxcXCI1MFxcXCIvPjwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY2xlYXJmaXgnPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cXG4gICAgICAgICAgPHVsIGNsYXNzPSduYXYgbmF2YmFyLW5hdic+XFxyXFxuICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvaG9tZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24taG9tZSc+PC9zcGFuPiBUYXNrXFxyXFxuICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9ib29raW5ncyddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tdGgtbGlzdCc+PC9zcGFuPiBTb2x1dGlvblxcclxcbiAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgIDwvbGk+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvc2VhcmNoJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2gnPjwvc3Bhbj4gU2VhcmNoXFxyXFxuICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG5cXHJcXG4gICAgICAgICAgPC91bD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdm1lbnUuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImxpIC5nbHlwaGljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi8qIEhpZ2hsaWdodGluZyBydWxlcyBmb3IgbmF2IG1lbnUgaXRlbXMgKi9cXG5saS5saW5rLWFjdGl2ZSBhLFxcbmxpLmxpbmstYWN0aXZlIGE6aG92ZXIsXFxubGkubGluay1hY3RpdmUgYTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTg5Qzc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogS2VlcCB0aGUgbmF2IG1lbnUgaW5kZXBlbmRlbnQgb2Ygc2Nyb2xsaW5nIGFuZCBvbiB0b3Agb2Ygb3RoZXIgaXRlbXMgKi9cXG4ubWFpbi1uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAvKiBPbiBzbWFsbCBzY3JlZW5zLCBjb252ZXJ0IHRoZSBuYXYgbWVudSB0byBhIHZlcnRpY2FsIHNpZGViYXIgKi9cXG4gICAgLm1haW4tbmF2IHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDIwcHgpO1xcbiAgICB9XFxuICAgIC5uYXZiYXIge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG4gICAgLm5hdmJhci1oZWFkZXIge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhci1jb2xsYXBzZSB7XFxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDtcXG4gICAgICAgIHBhZGRpbmc6IDBweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIHVsIHtcXG4gICAgICAgIGZsb2F0OiBub25lO1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBtYXJnaW46IDZweDtcXG4gICAgfVxcbiAgICAubmF2YmFyIGxpIGEge1xcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgYSB7XFxuICAgICAgICAvKiBJZiBhIG1lbnUgaXRlbSdzIHRleHQgaXMgdG9vIGxvbmcsIHRydW5jYXRlIGl0ICovXFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2hvbWUuY29tcG9uZW50Lmh0bWwnKVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5UaGUgVGFzazwvaDE+XFxuPGhyIC8+XFxuPHA+VGhlIGFwcGxpY2F0aW9uIHNob3VsZCBjb25zaXN0IG9mIHR3byBwYXJ0czo8YnIgLz5cXHJcXG4tQmFja2VuZDogUkVTVGZ1bCBBUEkgd3JpdHRlbiBpbiAuTkVUIENvcmU8YnIgLz5cXHJcXG4tRnJvbnRlbmQ6IFNQQSB3cml0dGVuIGluIEFuZ3VsYXIgMjxiciAvPjxiciAvPlxcclxcblxcclxcbiBZb3Ugd2lsbCBiZSBnaXZlbiBhIHNldCBvZiBkYXRhLCBjb250YWluaW5nIHRoZSBsaXN0IG9mIEJvb2tpbmdzIG1hZGUgYnkgYW4gb25saW5lIENydWlzZSBjb21wYW55LiBUaGUgYXBwbGljYXRpb24gc2hvdWxkIHNob3cgdGhlIEJvb2tpbmdzIG1hZGUgaW4gdGhlIGZpcnN0IHF1YXJ0ZXIgb2YgMjAxNi48YnIgLz48YnIgLz5cXHJcXG5cXHJcXG5UaGUgRnJvbnRlbmQgc2hvdWxkIHF1ZXJ5IHRoZSBBUEkgZm9yIHRoZSBCb29raW5ncyBpbiB0aGUgZ2l2ZW4gcmFuZ2UuIE9uY2UgaXQgZ2V0cyB0aGUgZGF0YSwgaXQgc2hvdWxkIHByZXNlbnQgIGEgbGlzdCBvZiBTYWxlcyBVbml0cywgc2hvd2luZyB0aGUgbmFtZSBhbmQgdGhlIHRvdGFsIHByaWNlIG9mIHRoZWlyIHJlbGF0ZWQgQm9va2luZ3MuIElmIHRoZSB1c2VyIGNsaWNrcyBvbiBhbnkgU2FsZXMgVW5pdCwgdGhlIGxpc3Qgb2YgcmVsYXRlZCBCb29raW5ncyBzaG91bGQgYmUgc2hvd24sIHNob3dpbmcgQm9va2luZyBJZCwgU2hpcCBOYW1lIGFuZCBQcmljZS48YnIgLz48YnIgLz5cXHJcXG5cXHJcXG5PcHRpb25hbDogaW1wbGVtZW50IGEgVHlwZS1haGVhZCBzZWFyY2ggdGhhdCB3aWxsIGFjY2VwdCBlaXRoZXIgQm9va2luZyBJZHMgb3IgU2hpcCBOYW1lcy4gVGhlIGltcGxlbWVudGF0aW9uIHNob3VsZCBxdWVyeSB0aGUgYmFja2VuZCBmb3Igc2VhcmNoaW5nIChubyBmcm9udCBlbmQgc2VhcmNoaW5nKS48YnIgLz48YnIgLz5cXHJcXG5cXHJcXG4qQWxsIHByaWNlcyBzaG91bGQgc2hvdyB0aGUgY29ycmVjdCBDdXJyZW5jeSAod2hpY2ggaXMgc3RvcmVkIGluIHRoZSBTYWxlcyBVbml0KS4gPC9wPlxcbjxociAvPlxcbjxoMj48YSBocmVmPVxcXCIvYm9va2luZ3NcXFwiPlNvbHV0aW9uPC9hPjwvaDI+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jvb2tpbmdzJyxcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYm9va2luZ3MuY29tcG9uZW50Lmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIGJvb2tpbmdzQ29tcG9uZW50IHtcbiAgcHVibGljIHF1YXJ0ZXI6IG51bWJlcjtcbiAgcHVibGljIEpTT05Nb2RlbDogSlNPTk1vZGVsO1xuICBwdWJsaWMgYm9va2luZ3NMaXN0OiBTYWxlc1ZpZXdbXSA9IFtdO1xuICBwdWJsaWMgYm9va2luZ0RldGFpbHM6IFNhbGVzRGV0YWlsVmlld1tdID0gW107XG4gIHB1YmxpYyBhY3RpdmVSb3c6IHN0cmluZyA9IFwiMFwiO1xuICBwdWJsaWMgdW5mb2xkZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHApIHtcbiAgICB0aGlzLnF1YXJ0ZXIgPSAxO1xuICAgIHRoaXMudW5mb2xkZWQgPSBmYWxzZTtcbiAgICB0aGlzLmdldEJvb2tpbmdzKCk7XG4gIH1cblxuICBzZWxlY3RJdGVtKHZhbHVlKSB7XHJcbiAgICB0aGlzLnF1YXJ0ZXIgPSB2YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0OiBcIiwgdGhpcy5xdWFydGVyKTtcclxuICAgIHRoaXMuZ2V0Qm9va2luZ3MoKTtcclxuICB9XG5cbiAgZ2V0Qm9va2luZ3MoKSB7XG4gICAgdGhpcy5odHRwLmdldCgnL2FwaS9ib29raW5ncy8nICsgdGhpcy5xdWFydGVyKS5zdWJzY3JpYmUoXG4gICAgICByZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLmJvb2tpbmdzTGlzdCA9IHJlc3VsdC5qc29uKCk7XG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cblxuICBnZXRCb29raW5nc0J5U2FsZVVuaXQoc2FsZVVuaXQsIHF0cikge1xuICAgIC8vY29uc29sZS5sb2coXCJzYWxlVW5pdDpcIiArIHNhbGVVbml0ICsgXCIgcXVhcnRlciBcIiArIHF0cik7XG4gICAgaWYgKHRoaXMuYWN0aXZlUm93ID09IHNhbGVVbml0KSB7XG4gICAgICB0aGlzLnVuZm9sZGVkID0gIXRoaXMudW5mb2xkZWQ7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHsgdGhpcy51bmZvbGRlZCA9IGZhbHNlOyB9XG5cbiAgICB0aGlzLmh0dHAuZ2V0KCcvYXBpL2Jvb2tpbmdzLycgKyBzYWxlVW5pdCArICcvJyArIHF0cikuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLmJvb2tpbmdEZXRhaWxzID0gcmVzdWx0Lmpzb24oKTtcbiAgICB9KTtcbiAgICB0aGlzLmFjdGl2ZVJvdyA9IHNhbGVVbml0O1xuICB9XG5cblxuICBnZXRDb3VudHJ5RmxhZyhjb3VudHJ5KSB7XG4gICAgdmFyIHVybCA9IFwiaHR0cDovL3d3dy5nZW9nbm9zLmNvbS9hcGkvZW4vY291bnRyaWVzL2ZsYWcvXCI7XG4gICAgdmFyIGNvdW50cmllcyA9IFsnQ2hpbmEnLCAnQ04nLCAnR2VybWFueScsICdERScsICdJdGFseScsICdJVCcsICdOZXRoZXJsYW5kcycsICdOTCcsICdBdXN0cmFsaWEnLCAnQVUnLCAnQnJhemlsJywgJ0JSJywgJ1J1c3NpYScsICdSVScsICdGcmFuY2UnLCAnRlInXTtcbiAgICB2YXIgaW5kZXggPSBjb3VudHJpZXMuaW5kZXhPZihjb3VudHJ5KTtcbiAgICBpZiAoaW5kZXggIT0gLTEpXG4gICAgICByZXR1cm4gdXJsICsgY291bnRyaWVzW2luZGV4ICsgMV0gKyBcIi5wbmdcIjtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gXCIjXCI7XG4gIH1cbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIFNhbGVzVmlldyB7XG4gIElkOiBudW1iZXI7XG4gIE5hbWU6IHN0cmluZztcbiAgQ291bnRyeTogc3RyaW5nO1xuICBUb3RhbDogbnVtYmVyO1xuICBDdXJyZW5jeTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNhbGVzRGV0YWlsVmlldyB7XG4gIEJvb2tpbmdJZDogbnVtYmVyO1xuICBTaGlwTmFtZTogc3RyaW5nO1xuICBQcmljZTogbnVtYmVyO1xuICBDdXJyZW5jeTogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9va2luZyB7XG4gIGlkOiBudW1iZXI7XG4gIHNoaXBJZDogbnVtYmVyO1xuICBib29raW5nRGF0ZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBTaGlwIHtcbiAgaWQ6IG51bWJlcjtcbiAgc2FsZXNVbml0SWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTYWxlc1VuaXQge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvdW50cnk6IHN0cmluZztcbiAgY3VycmVuY3k6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSlNPTk1vZGVsIHtcbiAgc2FsZXNVbml0czogU2FsZXNVbml0W107XG4gIHNoaXBzOiBTaGlwW107XG4gIGJvb2tpbmdzOiBCb29raW5nW107XG59XG5cbi8vQFBpcGUoeyBuYW1lOiAncm91bmQnIH0pXHJcbi8vZXhwb3J0IGNsYXNzIFJvdW5kUGlwZSB7XHJcbi8vICB0cmFuc2Zvcm0oaW5wdXQ6IG51bWJlcikge1xyXG4vLyAgICByZXR1cm4gTWF0aC5mbG9vcihpbnB1dCk7XHJcbi8vICB9XHJcbi8vfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ib29raW5ncy9ib29raW5ncy5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPkRyZWFtbGluZXMgR21CSCB+IHNhbGVzIGZvciBRe3txdWFydGVyfX0gMjAxNi48L2gxPlxcclxcbjxociAvPlxcclxcbjxoMj5cXHJcXG4gIEZpbHRlciBieSBxdWFydGVyczogPHNlbGVjdCBbKG5nTW9kZWwpXT1cXFwicXVhcnRlclxcXCIgc3R5bGU9XFxcImNvbG9yOiNmZjZhMDA7XFxcIiAoY2hhbmdlKT1cXFwic2VsZWN0SXRlbSgkZXZlbnQudGFyZ2V0LnZhbHVlKVxcXCI+XFxyXFxuICA8b3B0aW9uIHZhbHVlPVxcXCIwXFxcIj5BTEw8L29wdGlvbj5cXHJcXG4gIDxvcHRpb24gdmFsdWU9XFxcIjFcXFwiIHNlbGVjdGVkPlExPC9vcHRpb24+XFxyXFxuICA8b3B0aW9uIHZhbHVlPVxcXCIyXFxcIj5RMjwvb3B0aW9uPlxcclxcbiAgPG9wdGlvbiB2YWx1ZT1cXFwiM1xcXCI+UTM8L29wdGlvbj5cXHJcXG4gIDxvcHRpb24gdmFsdWU9XFxcIjRcXFwiPlE0PC9vcHRpb24+XFxyXFxuPC9zZWxlY3Q+XFxyXFxuPC9oMj4gICAgXFxyXFxuPGhyIC8+XFxyXFxuXFxyXFxuPHAgKm5nSWY9XFxcIiFib29raW5nc0xpc3RcXFwiPjxlbT5Mb2FkaW5nIGRhdGEgcGxlYXNlIFdhaXQgISAuLi48L2VtPjwvcD5cXHJcXG5cXHJcXG5Sb3c6IHt7YWN0aXZlUm93fX1cXHJcXG5xdWFydGVyOiB7e3F1YXJ0ZXJ9fVxcclxcbnVuZm9sZGVkOiB7eyAhdW5mb2xkZWR9fVxcclxcbjx0YWJsZSBjbGFzcz0ndGFibGUnIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7IGJvcmRlcjoycHggIzZEN0I4RDsgcGFkZGluZzo1cHg7d2lkdGg6OTklO3RhYmxlLWxheW91dDpmaXhlZDtcXFwiIGNlbGxwYWRkaW5nPVxcXCIyXFxcIiBjZWxsc3BhY2luZz1cXFwiMlxcXCIgKm5nSWY9XFxcImJvb2tpbmdzTGlzdFxcXCI+XFxyXFxuXFxyXFxuICA8dHIgc3R5bGU9XFxcImhlaWdodDogMzBweDsgYmFja2dyb3VuZC1jb2xvcjojMzM2Njk5IDsgY29sb3I6I0ZGRkZGRiA7Ym9yZGVyOiBzb2xpZCAxcHggIzY1OUVDNztcXFwiPlxcclxcbiAgICA8dGQgd2lkdGg9XFxcIjEwMFxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+PC90ZD5cXHJcXG4gICAgPHRkIHdpZHRoPVxcXCIyNDBcXFwiIGFsaWduPVxcXCJjZW50ZXJcXFwiPk5hbWU8L3RkPlxcclxcbiAgICA8dGQgd2lkdGg9XFxcIjI0MFxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+Q291bnRyeTwvdGQ+XFxyXFxuICAgIDx0ZCB3aWR0aD1cXFwiMTIwXFxcIiBhbGlnbj1cXFwiY2VudGVyXFxcIj5Ub3RhbDwvdGQ+XFxyXFxuICA8L3RyPlxcclxcblxcclxcbiAgPHRib2R5ICpuZ0Zvcj1cXFwibGV0IHNhbGVVbml0IG9mIGJvb2tpbmdzTGlzdFxcXCI+XFxyXFxuICAgIDx0cj5cXHJcXG4gICAgICA8dGQgYWxpZ249XFxcImNlbnRlclxcXCIgc3R5bGU9XFxcImJvcmRlcjogc29saWQgMXB4ICM2NTlFQzc7IHBhZGRpbmc6IDVweDt0YWJsZS1sYXlvdXQ6Zml4ZWQ7XFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gIChjbGljayk9Z2V0Qm9va2luZ3NCeVNhbGVVbml0KHNhbGVVbml0LmlkLHF1YXJ0ZXIpIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiMzMzQ2Njg7Y29sb3I6I0ZGRkZGRjtmb250LXNpemU6c21hbGw7d2lkdGg6ODBweDtib3JkZXItY29sb3I6I2EyYWFiZTtcXFwiPlxcclxcbiAgICAgICAgICBEZXRhaWxzXFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8L3RkPlxcclxcblxcclxcbiAgICAgIDx0ZCBhbGlnbj1cXFwibGVmdFxcXCIgc3R5bGU9XFxcImJvcmRlcjogc29saWQgMXB4ICM2NTlFQzc7IHBhZGRpbmc6IDVweDt0YWJsZS1sYXlvdXQ6Zml4ZWQ7XFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojMzM0NjY4O2ZvbnQtc2l6ZTptZWRpdW1cXFwiPjxhIGhyZWY9XFxcImh0dHA6XFxcXFxcXFx7e3NhbGVVbml0Lm5hbWV9fVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPnt7c2FsZVVuaXQubmFtZX19PC9hPjwvc3Bhbj5cXHJcXG4gICAgICA8L3RkPlxcclxcbiAgICAgXFxyXFxuICAgICAgPHRkIGFsaWduPVxcXCJsZWZ0XFxcIiBzdHlsZT1cXFwiYm9yZGVyOiBzb2xpZCAxcHggIzY1OUVDNzsgcGFkZGluZzogNXB4O3RhYmxlLWxheW91dDpmaXhlZDtcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gc3R5bGU9XFxcImNvbG9yOiMzMzQ2Njg7Zm9udC1zaXplOm1lZGl1bVxcXCI+PGltZyBzcmM9XFxcInt7Z2V0Q291bnRyeUZsYWcoc2FsZVVuaXQuY291bnRyeSl9fVxcXCIgd2lkdGg9XFxcIjIwXFxcIiAvPiB7e3NhbGVVbml0LmNvdW50cnl9fTwvc3Bhbj5cXHJcXG4gICAgICA8L3RkPlxcclxcblxcclxcbiAgICAgIDx0ZCBhbGlnbj1cXFwicmlnaHRcXFwiIHN0eWxlPVxcXCJib3JkZXI6IHNvbGlkIDFweCAjNjU5RUM3OyBwYWRkaW5nOiA1cHg7dGFibGUtbGF5b3V0OmZpeGVkO1xcXCI+XFxyXFxuICAgICAgICA8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzMzNDY2ODtmb250LXNpemU6bWVkaXVtXFxcIj57e3NhbGVVbml0LmN1cnJlbmN5fX0ge3tzYWxlVW5pdC50b3RhbCB9fTwvc3Bhbj5cXHJcXG4gICAgICA8L3RkPlxcclxcbiAgICA8L3RyPlxcclxcblxcclxcbiAgICA8dHIgKm5nSWY9XFxcIihhY3RpdmVSb3c9PXNhbGVVbml0LmlkKSAgJiYgIXVuZm9sZGVkXFxcIj5cXHJcXG4gICAgICA8dGQgY29sc3Bhbj1cXFwiNlxcXCIgc3R5bGU9XFxcImJvcmRlcjogc29saWQgMXB4ICM2NTlFQzc7IHBhZGRpbmc6IDVweDt0YWJsZS1sYXlvdXQ6Zml4ZWQ7XFxcIj5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz0ndGFibGUnIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiNFQ0YzRjQ7IGJvcmRlcjoycHggIzZEN0I4RDsgcGFkZGluZzo1cHg7d2lkdGg6OTklO3RhYmxlLWxheW91dDpmaXhlZDtcXFwiIGNlbGxwYWRkaW5nPVxcXCIyXFxcIiBjZWxsc3BhY2luZz1cXFwiMlxcXCIgKm5nSWY9XFxcImJvb2tpbmdEZXRhaWxzXFxcIj5cXHJcXG4gICAgICAgICAgPHRyIHN0eWxlPVxcXCJoZWlnaHQ6IDMwcHg7IGJhY2tncm91bmQtY29sb3I6IzY1OUVDNyA7IGNvbG9yOiNGRkZGRkYgO2JvcmRlcjogc29saWQgMXB4ICM2NTlFQzc7XFxcIj5cXHJcXG4gICAgICAgICAgICA8dGQgd2lkdGg9XFxcIjQwXFxcIiBhbGlnbj1cXFwibGVmdFxcXCI+PFN0cm9uZz5EZXRhaWwgLS0+PC9TdHJvbmc+ICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQgd2lkdGg9XFxcIjYwXFxcIiBhbGlnbj1cXFwibGVmdFxcXCI+Qm9va2luZ0lkPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQgd2lkdGg9XFxcIjE0MFxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+U2hpcE5hbWU8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZCB3aWR0aD1cXFwiMTIwXFxcIiBhbGlnbj1cXFwiY2VudGVyXFxcIj5QcmljZTwvdGQ+XFxyXFxuICAgICAgICAgIDwvdHI+XFxyXFxuXFxyXFxuICAgICAgICAgIDx0Ym9keSAqbmdGb3I9XFxcImxldCBib29raW5nICBvZiBib29raW5nRGV0YWlsc1xcXCI+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgPHRkIHdpZHRoPVxcXCI0MFxcXCIgYWxpZ249XFxcImxlZnRcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICA8dGQgd2lkdGg9XFxcIjYwXFxcIiBhbGlnbj1cXFwibGVmdFxcXCI+e3tib29raW5nLmJvb2tpbmdJZH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgIDx0ZCB3aWR0aD1cXFwiMTQwXFxcIiBhbGlnbj1cXFwiY2VudGVyXFxcIj57e2Jvb2tpbmcuc2hpcE5hbWV9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICA8dGQgd2lkdGg9XFxcIjEyMFxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+e3tib29raW5nLmN1cnJlbmN5fX0ge3tib29raW5nLnByaWNlfX08L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgIDwvdGQ+XFxyXFxuICAgIDwvdHI+XFxyXFxuXFxyXFxuICA8L3Rib2R5PlxcclxcbjwvdGFibGU+IFxcclxcblxcclxcbiBcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Jvb2tpbmdzL2Jvb2tpbmdzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWFyY2gnLFxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9zZWFyY2guY29tcG9uZW50Lmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIHNlYXJjaENvbXBvbmVudCB7XG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuO1xuICBwdWJsaWMgc2VhcmNoVmFsdWU6IHN0cmluZztcbiAgcHVibGljIG5vdFZhbGlkOiBib29sZWFuO1xuICBwdWJsaWMgc2VhcmNoUmVzdWx0czogU2VhcmNoVmlld1tdID0gW107XG5cbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHApIHtcbiAgfVxuXG4gIFNlYXJjaEJvb2tpbmdzKHNlYXJjaFZhbHVlKSB7XG4gICAgdGhpcy5ub3RWYWxpZCA9IGlzTmFOKHNlYXJjaFZhbHVlKSAmJiBzZWFyY2hWYWx1ZS5sZW5ndGggPCAyIHx8IHNlYXJjaFZhbHVlID09IFwiXCI7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhub3RWYWxpZCk7XG4gICAgaWYgKHRoaXMubm90VmFsaWQpIHtcbiAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5odHRwLmdldCgnL2FwaS9zZWFyY2hib29raW5ncy8nICsgc2VhcmNoVmFsdWUpLnN1YnNjcmliZShcbiAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0Lmpzb24oKSApO1xuICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSByZXN1bHQuanNvbigpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxuXG4gIGdldENvdW50cnlGbGFnKGNvdW50cnkpIHtcbiAgICB2YXIgdXJsID0gXCJodHRwOi8vd3d3Lmdlb2dub3MuY29tL2FwaS9lbi9jb3VudHJpZXMvZmxhZy9cIjtcbiAgICB2YXIgY291bnRyaWVzID0gWydDaGluYScsICdDTicsICdHZXJtYW55JywgJ0RFJywgJ0l0YWx5JywgJ0lUJywgJ05ldGhlcmxhbmRzJywgJ05MJywgJ0F1c3RyYWxpYScsICdBVScsICdCcmF6aWwnLCAnQlInLCAnUnVzc2lhJywgJ1JVJywgJ0ZyYW5jZScsICdGUiddO1xuICAgIHZhciBpbmRleCA9IGNvdW50cmllcy5pbmRleE9mKGNvdW50cnkpO1xuICAgIGlmIChpbmRleCAhPSAtMSlcbiAgICAgIHJldHVybiB1cmwgKyBjb3VudHJpZXNbaW5kZXggKyAxXSArIFwiLnBuZ1wiO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBcIiNcIjtcbiAgfVxuXG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hWaWV3IHtcbiAgYm9va2luZ0lkOiBudW1iZXI7XG4gIHNoaXBOYW1lOiBzdHJpbmc7XG4gIGJvb2tpbmdEYXRlOiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPlxcclxcbiAgU2VhcmNoIGJvb2tpbmdzIDogPGlucHV0IFsobmdNb2RlbCldPVxcXCJzZWFyY2hWYWx1ZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwibmFtZVxcXCIgdmFsdWU9XFxcIlxcXCIgc3R5bGU9XFxcImNvbG9yOiNmZjZhMDA7XFxcIiBwbGFjZWhvbGRlcj1cXFwiSWQgb3IgMiBjaGFycyBtaW5cXFwiIChjaGFuZ2UpPVxcXCJTZWFyY2hCb29raW5ncygkZXZlbnQudGFyZ2V0LnZhbHVlKVxcXCI+XFxyXFxuICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBuYW1lPVxcXCJuYW1lXFxcIiB2YWx1ZT1cXFwiR29cXFwiIC8+XFxyXFxuPC9oMj5cXHJcXG48aHIgLz5cXHJcXG5cXHJcXG48cCAqbmdJZj1cXFwibG9hZGluZ1xcXCI+PGVtPkxvYWRpbmcgZGF0YSBwbGVhc2UgV2FpdCAhIC4uLjwvZW0+PC9wPlxcclxcblxcclxcblNlYXJjaCA6IHt7c2VhcmNoVmFsdWV9fVxcclxcblZhbGlkIDoge3sgIW5vdFZhbGlkfX1cXHJcXG5sb2FkaW5nIDoge3tsb2FkaW5nfX1cXHJcXG5cXHJcXG48dGFibGUgY2xhc3M9J3RhYmxlJyBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojRUNGM0Y0OyBib3JkZXI6MnB4ICM2RDdCOEQ7IHBhZGRpbmc6NXB4O3dpZHRoOjk5JTt0YWJsZS1sYXlvdXQ6Zml4ZWQ7XFxcIiBjZWxscGFkZGluZz1cXFwiMlxcXCIgY2VsbHNwYWNpbmc9XFxcIjJcXFwiICpuZ0lmPVxcXCJzZWFyY2hSZXN1bHRzXFxcIj5cXHJcXG5cXHJcXG4gIDx0ciBzdHlsZT1cXFwiaGVpZ2h0OiAzMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiM2NTlFQzcgOyBjb2xvcjojRkZGRkZGIDtib3JkZXI6IHNvbGlkIDFweCAjNjU5RUM3O1xcXCI+XFxyXFxuICAgIDx0ZCB3aWR0aD1cXFwiNjBcXFwiIGFsaWduPVxcXCJsZWZ0XFxcIj5Cb29raW5nSWQ8L3RkPlxcclxcbiAgICA8dGQgd2lkdGg9XFxcIjYwXFxcIiBhbGlnbj1cXFwibGVmdFxcXCI+RGF0ZTwvdGQ+XFxyXFxuICAgIDx0ZCB3aWR0aD1cXFwiMTQwXFxcIiBhbGlnbj1cXFwiY2VudGVyXFxcIj5TaGlwTmFtZTwvdGQ+XFxyXFxuICAgIDx0ZCB3aWR0aD1cXFwiMTIwXFxcIiBhbGlnbj1cXFwiY2VudGVyXFxcIj5QcmljZTwvdGQ+XFxyXFxuICA8L3RyPlxcclxcblxcclxcbiAgPHRib2R5ICpuZ0Zvcj1cXFwibGV0IFNlYXJjaFZpZXcgIG9mIHNlYXJjaFJlc3VsdHNcXFwiPlxcclxcbiAgICA8dHI+XFxyXFxuICAgICAgPHRkIHdpZHRoPVxcXCI2MFxcXCIgYWxpZ249XFxcImxlZnRcXFwiPnt7U2VhcmNoVmlldy5ib29raW5nSWR9fTwvdGQ+XFxyXFxuICAgICAgPHRkIHdpZHRoPVxcXCIxMjBcXFwiIGFsaWduPVxcXCJjZW50ZXJcXFwiPnt7U2VhcmNoVmlldy5ib29raW5nRGF0ZX19PC90ZD5cXHJcXG4gICAgICA8dGQgd2lkdGg9XFxcIjE0MFxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+e3tTZWFyY2hWaWV3LnNoaXBOYW1lfX08L3RkPlxcclxcbiAgICAgIDx0ZCB3aWR0aD1cXFwiNjBcXFwiIGFsaWduPVxcXCJyaWdodFxcXCI+e3tTZWFyY2hWaWV3LnByaWNlfX08L3RkPlxcclxcbiAgICA8L3RyPlxcclxcblxcclxcbiAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcblxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9