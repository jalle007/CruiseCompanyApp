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
	        //alert("saleUnit:" + saleUnit + " quarter " + qtr);
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

	module.exports = "<h1>Dreamlines GmBH ~ sales for Q{{quarter}} 2016.</h1>\r\n<hr />\r\n<h2>\r\n  Filter by quarter: <select [(ngModel)]=\"quarter\" style=\"color:#ff6a00;\" (change)=\"selectItem($event.target.value)\">\r\n  <option value=\"0\">ALL</option>\r\n  <option value=\"1\" selected>Q1</option>\r\n  <option value=\"2\">Q2</option>\r\n  <option value=\"3\">Q3</option>\r\n  <option value=\"4\">Q4</option>\r\n</select>\r\n</h2>    \r\n<hr />\r\n\r\n<p *ngIf=\"!bookingsList\"><em>Loading data please Wait ! ...</em></p>\r\n\r\nRow: {{activeRow}}\r\nquarter: {{quarter}}\r\nunfolded: {{ !unfolded}}\r\n<table class='table' style=\"background-color:#FFFFFF; border:2px #6D7B8D; padding:5px;width:99%;table-layout:fixed;\" cellpadding=\"2\" cellspacing=\"2\" *ngIf=\"bookingsList\">\r\n\r\n  <tr style=\"height: 30px; background-color:#336699 ; color:#FFFFFF ;border: solid 1px #659EC7;\">\r\n    <td width=\"100\" align=\"center\"></td>\r\n    <td width=\"240\" align=\"center\">Name</td>\r\n    <td width=\"240\" align=\"center\">Country</td>\r\n    <td width=\"120\" align=\"center\">Total</td>\r\n  </tr>\r\n\r\n  <tbody *ngFor=\"let saleUnit of bookingsList\">\r\n    <tr>\r\n      <td align=\"center\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n        <button  (click)=getBookingsBySaleUnit(saleUnit.id,quarter) style=\"background-color:#334668;color:#FFFFFF;font-size:small;width:80px;border-color:#a2aabe;\">\r\n          Details\r\n        </button>\r\n      </td>\r\n\r\n      <td align=\"left\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n        <span style=\"color:#334668;font-size:medium\"><a href=\"http:\\\\{{saleUnit.name}}\" target=\"_blank\">{{saleUnit.name}}</a></span>\r\n      </td>\r\n     \r\n      <td align=\"left\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n        <span style=\"color:#334668;font-size:medium\"><img src=\"{{getCountryFlag(saleUnit.country)}}\" width=\"20\" /> {{saleUnit.country}}</span>\r\n      </td>\r\n\r\n      <td align=\"right\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n        <span style=\"color:#334668;font-size:medium\">{{saleUnit.currency}} {{saleUnit.total }}</span>\r\n      </td>\r\n    </tr>\r\n\r\n    <tr *ngIf=\"(activeRow==saleUnit.id)  && !unfolded\">\r\n      <td colspan=\"6\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n        <table class='table' style=\"background-color:#ECF3F4; border:2px #6D7B8D; padding:5px;width:99%;table-layout:fixed;\" cellpadding=\"2\" cellspacing=\"2\" *ngIf=\"bookingDetails\">\r\n          <tr style=\"height: 30px; background-color:#659EC7 ; color:#FFFFFF ;border: solid 1px #659EC7;\">\r\n            <td width=\"40\" align=\"left\"><Strong>Detail --></Strong>   </td>\r\n            <td width=\"60\" align=\"left\">BookingId</td>\r\n            <td width=\"140\" align=\"center\">ShipName</td>\r\n            <td width=\"120\" align=\"center\">Price</td>\r\n          </tr>\r\n\r\n          <tbody *ngFor=\"let booking  of bookingDetails\">\r\n            <tr>\r\n              <td width=\"40\" align=\"left\"></td>\r\n              <td width=\"60\" align=\"left\">{{booking.bookingId}}</td>\r\n              <td width=\"140\" align=\"center\">{{booking.shipName}}</td>\r\n              <td width=\"120\" align=\"center\">{{booking.currency}} {{booking.price}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </td>\r\n    </tr>\r\n\r\n  </tbody>\r\n</table> \r\n\r\n "

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

	module.exports = "<h2>\r\n  Search bookings : <input [(ngModel)]=\"searchValue\" type=\"text\" name=\"name\" value=\"\" style=\"color:#ff6a00;\" placeholder=\"Id or 2 chars min\"  (change)=\"SearchBookings($event.target.value)\">\r\n</h2>    \r\n<hr />\r\n\r\n<p *ngIf=\"loading\"><em>Loading data please Wait ! ...</em></p>\r\n\r\nSearch : {{searchValue}}\r\nValid : {{ !notValid}}\r\nloading : {{loading}}\r\n\r\n<table class='table' style=\"background-color:#ECF3F4; border:2px #6D7B8D; padding:5px;width:99%;table-layout:fixed;\" cellpadding=\"2\" cellspacing=\"2\" *ngIf=\"searchResults\">\r\n\r\n  <tr style=\"height: 30px; background-color:#659EC7 ; color:#FFFFFF ;border: solid 1px #659EC7;\">\r\n    <td width=\"60\" align=\"left\">BookingId</td>\r\n    <td width=\"60\" align=\"left\">Date</td>\r\n    <td width=\"140\" align=\"center\">ShipName</td>\r\n    <td width=\"120\" align=\"center\">Price</td>\r\n  </tr>\r\n\r\n  <tbody *ngFor=\"let SearchView  of searchResults\">\r\n    <tr>\r\n      <td width=\"60\" align=\"left\">{{SearchView.bookingId}}</td>\r\n      <td width=\"120\" align=\"center\">{{SearchView.bookingDate}}</td>\r\n      <td width=\"140\" align=\"center\">{{SearchView.shipName}}</td>\r\n      <td width=\"60\" align=\"right\">{{SearchView.price}}</td>\r\n    </tr>\r\n\r\n  </tbody>\r\n</table>\r\n\r\n\r\n"

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzAwOGRmMDEyOTJiNzg5NTQzYWYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcz9kZGMzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcz85ZjY0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ib29raW5ncy9ib29raW5ncy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ib29raW5ncy9ib29raW5ncy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBLHdCQUFzQztBQUN0Qyx3QkFBaUI7QUFDakIscUNBQStDO0FBQy9DLG1EQUF5RDtBQUN6RCwyQ0FBNkM7QUFFN0Msc0JBQWMsRUFBRSxDQUFDO0FBQ2pCLEtBQU0sUUFBUSxHQUFHLHdDQUFtQixFQUFFLENBQUM7QUFFdkMsb0JBQXlCLE1BQVc7S0FDaEMsTUFBTSxDQUFDLElBQUks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Q0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDZCxNQUFNLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQzdDLElBQUk7YUFDQSxNQUFNLENBQUMsR0FBRyxDQUFDO0tBQ2pCLENBQUM7S0FFSCxzQkFBQztBQUFELEVBQUM7QUFyQ1ksZ0JBQWU7S0FMM0IsZ0JBQVMsQ0FBQztTQUNQLFFBQVEsRUFBRSxRQUFRO1NBQ2xCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQXlCLENBQUM7TUFDL0MsQ0FBQztzQ0FReUIsV0FBSTtJQU5sQixlQUFlLENBcUMzQjtBQXJDWSwyQ0FBZTs7Ozs7OztBQ1Q1QiwrSUFBOEkseU1BQXlNLGFBQWEsY0FBYyxZQUFZLGdCQUFnQixTQUFTLDhEQUE4RCxvQkFBb0IsYUFBYSxVQUFVLG1CQUFtQixrR0FBa0csMkJBQTJCLGdCQUFnQiwwQkFBMEIsdVZBQXVWLHNCQUFzQixvREFBb0Qsd0JBQXdCLG9EQUFvRCxxQkFBcUIsa0RBQWtELGtCQUFrQiw2RDs7Ozs7O0FDQWh3Qyw0QyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDMwMDhkZjAxMjkyYjc4OTU0M2FmIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcbmltcG9ydCAnem9uZS5qcyc7XG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcblxuZW5hYmxlUHJvZE1vZGUoKTtcbmNvbnN0IHBsYXRmb3JtID0gcGxhdGZvcm1Ob2RlRHluYW1pYygpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXG4gICAgICAgICAgICAgICAgb3JpZ2luVXJsOiBwYXJhbXMub3JpZ2luLFxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC8vIFdhaXRpbmcgb24gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvdW5pdmVyc2FsL2lzc3Vlcy8zNDdcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6b25lLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiem9uZS5qc1wiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50J1xuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBib29raW5nc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ib29raW5ncy9ib29raW5ncy5jb21wb25lbnQnO1xuaW1wb3J0IHsgc2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50JztcblxuXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIE5hdk1lbnVDb21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIGJvb2tpbmdzQ29tcG9uZW50LFxuICAgICAgICBzZWFyY2hDb21wb25lbnQsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxuICAgICAgRm9ybXNNb2R1bGUgLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdib29raW5ncycsIGNvbXBvbmVudDogYm9va2luZ3NDb21wb25lbnQgfSwgXG4gICAgICAgICAgICB7IHBhdGg6ICdzZWFyY2gnLCBjb21wb25lbnQ6IHNlYXJjaENvbXBvbmVudCB9LCBcbiAgICAgICAgICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2hvbWUnIH1cbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vYXBwLmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXItZmx1aWQnPlxcbiAgICA8ZGl2IGNsYXNzPSdyb3cnPlxcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLXNtLTMnPlxcbiAgICAgICAgICAgIDxuYXYtbWVudT48L25hdi1tZW51PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtc20tOSBib2R5LWNvbnRlbnQnPlxcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIHRoZSBuYXYgbWVudSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgc2NyZWVuLiBMZWF2ZSBhIHNwYWNlIGZvciBpdC4gKi9cXG4gICAgLmJvZHktY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZtZW51LmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgTmF2TWVudUNvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdtYWluLW5hdic+XFxuICAgIDxkaXYgY2xhc3M9J25hdmJhciBuYXZiYXItaW52ZXJzZSc+XFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItaGVhZGVyJz5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPGEgY2xhc3M9J25hdmJhci1icmFuZCcgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uL2RyZWFtbGluZXMtbG9nby5wbmdcXFwiICBoZWlnaHQ9XFxcIjUwXFxcIi8+PC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSdjbGVhcmZpeCc+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPSduYXZiYXItY29sbGFwc2UgY29sbGFwc2UnPlxcbiAgICAgICAgICA8dWwgY2xhc3M9J25hdiBuYXZiYXItbmF2Jz5cXHJcXG4gICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJz48L3NwYW4+IFRhc2tcXHJcXG4gICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDxsaSBbcm91dGVyTGlua0FjdGl2ZV09XFxcIlsnbGluay1hY3RpdmUnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2Jvb2tpbmdzJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nZ2x5cGhpY29uIGdseXBoaWNvbi10aC1saXN0Jz48L3NwYW4+IFNvbHV0aW9uXFxyXFxuICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPC9saT5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9zZWFyY2gnXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaCc+PC9zcGFuPiBTZWFyY2hcXHJcXG4gICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICA8L2xpPlxcclxcblxcclxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2bWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibGkgLmdseXBoaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLyogSGlnaGxpZ2h0aW5nIHJ1bGVzIGZvciBuYXYgbWVudSBpdGVtcyAqL1xcbmxpLmxpbmstYWN0aXZlIGEsXFxubGkubGluay1hY3RpdmUgYTpob3ZlcixcXG5saS5saW5rLWFjdGl2ZSBhOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBLZWVwIHRoZSBuYXYgbWVudSBpbmRlcGVuZGVudCBvZiBzY3JvbGxpbmcgYW5kIG9uIHRvcCBvZiBvdGhlciBpdGVtcyAqL1xcbi5tYWluLW5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qIE9uIHNtYWxsIHNjcmVlbnMsIGNvbnZlcnQgdGhlIG5hdiBtZW51IHRvIGEgdmVydGljYWwgc2lkZWJhciAqL1xcbiAgICAubWFpbi1uYXYge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMjBweCk7XFxuICAgIH1cXG4gICAgLm5hdmJhciB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWhlYWRlciB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0O1xcbiAgICAgICAgcGFkZGluZzogMHB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgdWwge1xcbiAgICAgICAgZmxvYXQ6IG5vbmU7XFxuICAgIH1cXG4gICAgLm5hdmJhciBsaSB7XFxuICAgICAgICBmbG9hdDogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIG1hcmdpbjogNnB4O1xcbiAgICB9XFxuICAgIC5uYXZiYXIgbGkgYSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG4gICAgLm5hdmJhciBhIHtcXG4gICAgICAgIC8qIElmIGEgbWVudSBpdGVtJ3MgdGV4dCBpcyB0b28gbG9uZywgdHJ1bmNhdGUgaXQgKi9cXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaG9tZScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vaG9tZS5jb21wb25lbnQuaHRtbCcpXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPlRoZSBUYXNrPC9oMT5cXG48aHIgLz5cXG48cD5UaGUgYXBwbGljYXRpb24gc2hvdWxkIGNvbnNpc3Qgb2YgdHdvIHBhcnRzOjxiciAvPlxcclxcbi1CYWNrZW5kOiBSRVNUZnVsIEFQSSB3cml0dGVuIGluIC5ORVQgQ29yZTxiciAvPlxcclxcbi1Gcm9udGVuZDogU1BBIHdyaXR0ZW4gaW4gQW5ndWxhciAyPGJyIC8+PGJyIC8+XFxyXFxuXFxyXFxuIFlvdSB3aWxsIGJlIGdpdmVuIGEgc2V0IG9mIGRhdGEsIGNvbnRhaW5pbmcgdGhlIGxpc3Qgb2YgQm9va2luZ3MgbWFkZSBieSBhbiBvbmxpbmUgQ3J1aXNlIGNvbXBhbnkuIFRoZSBhcHBsaWNhdGlvbiBzaG91bGQgc2hvdyB0aGUgQm9va2luZ3MgbWFkZSBpbiB0aGUgZmlyc3QgcXVhcnRlciBvZiAyMDE2LjxiciAvPjxiciAvPlxcclxcblxcclxcblRoZSBGcm9udGVuZCBzaG91bGQgcXVlcnkgdGhlIEFQSSBmb3IgdGhlIEJvb2tpbmdzIGluIHRoZSBnaXZlbiByYW5nZS4gT25jZSBpdCBnZXRzIHRoZSBkYXRhLCBpdCBzaG91bGQgcHJlc2VudCAgYSBsaXN0IG9mIFNhbGVzIFVuaXRzLCBzaG93aW5nIHRoZSBuYW1lIGFuZCB0aGUgdG90YWwgcHJpY2Ugb2YgdGhlaXIgcmVsYXRlZCBCb29raW5ncy4gSWYgdGhlIHVzZXIgY2xpY2tzIG9uIGFueSBTYWxlcyBVbml0LCB0aGUgbGlzdCBvZiByZWxhdGVkIEJvb2tpbmdzIHNob3VsZCBiZSBzaG93biwgc2hvd2luZyBCb29raW5nIElkLCBTaGlwIE5hbWUgYW5kIFByaWNlLjxiciAvPjxiciAvPlxcclxcblxcclxcbk9wdGlvbmFsOiBpbXBsZW1lbnQgYSBUeXBlLWFoZWFkIHNlYXJjaCB0aGF0IHdpbGwgYWNjZXB0IGVpdGhlciBCb29raW5nIElkcyBvciBTaGlwIE5hbWVzLiBUaGUgaW1wbGVtZW50YXRpb24gc2hvdWxkIHF1ZXJ5IHRoZSBiYWNrZW5kIGZvciBzZWFyY2hpbmcgKG5vIGZyb250IGVuZCBzZWFyY2hpbmcpLjxiciAvPjxiciAvPlxcclxcblxcclxcbipBbGwgcHJpY2VzIHNob3VsZCBzaG93IHRoZSBjb3JyZWN0IEN1cnJlbmN5ICh3aGljaCBpcyBzdG9yZWQgaW4gdGhlIFNhbGVzIFVuaXQpLiA8L3A+XFxuPGhyIC8+XFxuPGgyPjxhIGhyZWY9XFxcIi9ib29raW5nc1xcXCI+U29sdXRpb248L2E+PC9oMj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdib29raW5ncycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYm9va2luZ3MuY29tcG9uZW50Lmh0bWwnKVxufSlcblxuZXhwb3J0IGNsYXNzIGJvb2tpbmdzQ29tcG9uZW50IHtcbiAgcHVibGljIHF1YXJ0ZXI6IG51bWJlciA7XG4gIHB1YmxpYyBKU09OTW9kZWw6IEpTT05Nb2RlbDtcbiAgcHVibGljIGJvb2tpbmdzTGlzdDogU2FsZXNWaWV3W10gPSBbXTtcbiAgcHVibGljIGJvb2tpbmdEZXRhaWxzOiBTYWxlc0RldGFpbFZpZXdbXSA9IFtdO1xuICBwdWJsaWMgYWN0aXZlUm93OiBzdHJpbmcgPVwiMFwiICA7XG4gIHB1YmxpYyB1bmZvbGRlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge1xuICAgIHRoaXMucXVhcnRlciA9IDE7XG4gICAgdGhpcy51bmZvbGRlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2V0Qm9va2luZ3MoKTtcbiAgfVxuXG4gIHNlbGVjdEl0ZW0odmFsdWUpIHtcclxuICAgIHRoaXMucXVhcnRlciA9IHZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coXCJzZWxlY3Q6IFwiLCB0aGlzLnF1YXJ0ZXIpO1xyXG4gICAgdGhpcy5nZXRCb29raW5ncygpO1xyXG4gIH1cblxuICBnZXRCb29raW5ncygpIHtcbiAgICB0aGlzLmh0dHAuZ2V0KCcvYXBpL2Jvb2tpbmdzLycgKyB0aGlzLnF1YXJ0ZXIpLnN1YnNjcmliZShcbiAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgdGhpcy5ib29raW5nc0xpc3QgPSByZXN1bHQuanNvbigpO1xuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxuXG4gIGdldEJvb2tpbmdzQnlTYWxlVW5pdChzYWxlVW5pdCwgcXRyKSB7XG4gICAgLy9hbGVydChcInNhbGVVbml0OlwiICsgc2FsZVVuaXQgKyBcIiBxdWFydGVyIFwiICsgcXRyKTtcbiAgICBpZiAodGhpcy5hY3RpdmVSb3cgPT0gc2FsZVVuaXQpIHtcbiAgICAgIHRoaXMudW5mb2xkZWQgPSAhdGhpcy51bmZvbGRlZDtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgeyB0aGlzLnVuZm9sZGVkID0gZmFsc2U7fVxuXG4gICAgdGhpcy5odHRwLmdldCgnL2FwaS9ib29raW5ncy8nICsgc2FsZVVuaXQgKyAnLycgKyBxdHIpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgdGhpcy5ib29raW5nRGV0YWlscyA9IHJlc3VsdC5qc29uKCk7XG4gICAgfSk7XG4gICAgdGhpcy5hY3RpdmVSb3cgPSBzYWxlVW5pdDtcbiAgfVxuXG5cbiAgZ2V0Q291bnRyeUZsYWcoY291bnRyeSkge1xuICAgIHZhciB1cmwgPSBcImh0dHA6Ly93d3cuZ2VvZ25vcy5jb20vYXBpL2VuL2NvdW50cmllcy9mbGFnL1wiO1xuICAgIHZhciBjb3VudHJpZXMgPSBbJ0NoaW5hJywgJ0NOJywgJ0dlcm1hbnknLCAnREUnLCAnSXRhbHknLCAnSVQnLCAnTmV0aGVybGFuZHMnLCAnTkwnLCAnQXVzdHJhbGlhJywgJ0FVJywgJ0JyYXppbCcsICdCUicsICdSdXNzaWEnLCAnUlUnLCAnRnJhbmNlJywgJ0ZSJ107XG4gICAgdmFyIGluZGV4ID0gY291bnRyaWVzLmluZGV4T2YoY291bnRyeSk7XG4gICAgaWYgKGluZGV4ICE9IC0xKVxuICAgICAgcmV0dXJuIHVybCArIGNvdW50cmllc1tpbmRleCArIDFdICsgXCIucG5nXCI7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gXCIjXCI7XG4gIH1cbn1cblxuIFxuZXhwb3J0IGludGVyZmFjZSBTYWxlc1ZpZXcge1xuICBJZDogbnVtYmVyO1xuICBOYW1lOiBzdHJpbmc7XG4gIENvdW50cnk6IHN0cmluZztcbiAgVG90YWw6IG51bWJlcjtcbiAgQ3VycmVuY3k6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTYWxlc0RldGFpbFZpZXcge1xuICBCb29raW5nSWQ6IG51bWJlcjtcbiAgU2hpcE5hbWU6IHN0cmluZztcbiAgUHJpY2U6IG51bWJlcjtcbiAgQ3VycmVuY3k6IHN0cmluZztcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIEJvb2tpbmcge1xuICBpZDogbnVtYmVyO1xuICBzaGlwSWQ6IG51bWJlcjtcbiAgYm9va2luZ0RhdGU6IHN0cmluZztcbiAgcHJpY2U6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2hpcCB7XG4gIGlkOiBudW1iZXI7XG4gIHNhbGVzVW5pdElkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2FsZXNVbml0IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBjb3VudHJ5OiBzdHJpbmc7XG4gIGN1cnJlbmN5OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEpTT05Nb2RlbCB7XG4gIHNhbGVzVW5pdHM6IFNhbGVzVW5pdFtdO1xuICBzaGlwczogU2hpcFtdO1xuICBib29raW5nczogQm9va2luZ1tdO1xufVxuXG4gXG5cbi8vZXhwb3J0IGNsYXNzIGJvb2tpbmdzQ29tcG9uZW50MiB7XG4vLyAgICBwdWJsaWMgc3R1ZGVudDogU3R1ZGVudE1hc3RlcnNbXSA9IFtdO1xuLy8gICAgcHVibGljIHN0dWRlbnRkZXRhaWxzOiBTdHVkZW50RGV0YWlsc1tdID0gW107XG4vLyAgICBteU5hbWU6IHN0cmluZztcbi8vICAgIGFjdGl2ZVJvdzogc3RyaW5nID0gXCIwXCI7XG4vLyAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkge1xuLy8gICAgICAgIHRoaXMubXlOYW1lID0gXCJKYWxsZVwiO1xuLy8gICAgICAgIHRoaXMuZ2V0U3R1ZGVudE1hc3RlckRhdGEoKTtcbi8vICAgIH1cbi8vICAgIGdldFN0dWRlbnRNYXN0ZXJEYXRhKCkge1xuLy8gICAgICAgIHRoaXMuaHR0cC5nZXQoJy9hcGkvU3R1ZGVudE1hc3RlcnNBUEkvU3R1ZGVudCcpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuLy8gICAgICAgICAgICB0aGlzLnN0dWRlbnQgPSByZXN1bHQuanNvbigpO1xuLy8gICAgICAgIH0pO1xyXG4vLyAgICB9XG4vLyAgICBnZXRib29raW5nc0RldGFpbHMoU3R1ZElEKSB7XG4vLyAgICAgICAgdGhpcy5odHRwLmdldCgnL2FwaS9TdHVkZW50TWFzdGVyc0FQSS9EZXRhaWxzLycgKyBTdHVkSUQpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuLy8gICAgICAgICAgICB0aGlzLnN0dWRlbnRkZXRhaWxzID0gcmVzdWx0Lmpzb24oKTtcbi8vICAgICAgICB9KTtcbi8vICAgICAgICB0aGlzLmFjdGl2ZVJvdyA9IFN0dWRJRDsgXG4vLyAgICB9XG4vL31cbi8vLy8gRm9yIFN0dWRlbnQgTWFzdGVyXG5leHBvcnQgaW50ZXJmYWNlIFN0dWRlbnRNYXN0ZXJzIHtcbiAgICBzdGRJRDogbnVtYmVyO1xuICAgIHN0ZE5hbWU6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBob25lOiBzdHJpbmc7XG4gICAgYWRkcmVzczogc3RyaW5nO1xufVxuLy8gRm9yIFN0dWRlbnQgRGV0YWlsc1xuZXhwb3J0IGludGVyZmFjZSBTdHVkZW50RGV0YWlscyB7XG4gICAgU3RkRHRsSUQ6IG51bWJlcjtcbiAgICBzdGRJRDogbnVtYmVyO1xuICAgIE1ham9yOiBzdHJpbmc7XG4gICAgWWVhcjogc3RyaW5nO1xuICAgIFRlcm06IHN0cmluZztcbiAgICBHcmFkZTogc3RyaW5nO1xufVxuXG4vL0BQaXBlKHsgbmFtZTogJ3JvdW5kJyB9KVxyXG4vL2V4cG9ydCBjbGFzcyBSb3VuZFBpcGUge1xyXG4vLyAgdHJhbnNmb3JtKGlucHV0OiBudW1iZXIpIHtcclxuLy8gICAgcmV0dXJuIE1hdGguZmxvb3IoaW5wdXQpO1xyXG4vLyAgfVxyXG4vL31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYm9va2luZ3MvYm9va2luZ3MuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMT5EcmVhbWxpbmVzIEdtQkggfiBzYWxlcyBmb3IgUXt7cXVhcnRlcn19IDIwMTYuPC9oMT5cXHJcXG48aHIgLz5cXHJcXG48aDI+XFxyXFxuICBGaWx0ZXIgYnkgcXVhcnRlcjogPHNlbGVjdCBbKG5nTW9kZWwpXT1cXFwicXVhcnRlclxcXCIgc3R5bGU9XFxcImNvbG9yOiNmZjZhMDA7XFxcIiAoY2hhbmdlKT1cXFwic2VsZWN0SXRlbSgkZXZlbnQudGFyZ2V0LnZhbHVlKVxcXCI+XFxyXFxuICA8b3B0aW9uIHZhbHVlPVxcXCIwXFxcIj5BTEw8L29wdGlvbj5cXHJcXG4gIDxvcHRpb24gdmFsdWU9XFxcIjFcXFwiIHNlbGVjdGVkPlExPC9vcHRpb24+XFxyXFxuICA8b3B0aW9uIHZhbHVlPVxcXCIyXFxcIj5RMjwvb3B0aW9uPlxcclxcbiAgPG9wdGlvbiB2YWx1ZT1cXFwiM1xcXCI+UTM8L29wdGlvbj5cXHJcXG4gIDxvcHRpb24gdmFsdWU9XFxcIjRcXFwiPlE0PC9vcHRpb24+XFxyXFxuPC9zZWxlY3Q+XFxyXFxuPC9oMj4gICAgXFxyXFxuPGhyIC8+XFxyXFxuXFxyXFxuPHAgKm5nSWY9XFxcIiFib29raW5nc0xpc3RcXFwiPjxlbT5Mb2FkaW5nIGRhdGEgcGxlYXNlIFdhaXQgISAuLi48L2VtPjwvcD5cXHJcXG5cXHJcXG5Sb3c6IHt7YWN0aXZlUm93fX1cXHJcXG5xdWFydGVyOiB7e3F1YXJ0ZXJ9fVxcclxcbnVuZm9sZGVkOiB7eyAhdW5mb2xkZWR9fVxcclxcbjx0YWJsZSBjbGFzcz0ndGFibGUnIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkY7IGJvcmRlcjoycHggIzZEN0I4RDsgcGFkZGluZzo1cHg7d2lkdGg6OTklO3RhYmxlLWxheW91dDpmaXhlZDtcXFwiIGNlbGxwYWRkaW5nPVxcXCIyXFxcIiBjZWxsc3BhY2luZz1cXFwiMlxcXCIgKm5nSWY9XFxcImJvb2tpbmdzTGlzdFxcXCI+XFxyXFxuXFxyXFxuICA8dHIgc3R5bGU9XFxcImhlaWdodDogMzBweDsgYmFja2dyb3VuZC1jb2xvcjojMzM2Njk5IDsgY29sb3I6I0ZGRkZGRiA7Ym9yZGVyOiBzb2xpZCAxcHggIzY1OUVDNztcXFwiPlxcclxcbiAgICA8dGQgd2lkdGg9XFxcIjEwMFxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+PC90ZD5cXHJcXG4gICAgPHRkIHdpZHRoPVxcXCIyNDBcXFwiIGFsaWduPVxcXCJjZW50ZXJcXFwiPk5hbWU8L3RkPlxcclxcbiAgICA8dGQgd2lkdGg9XFxcIjI0MFxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+Q291bnRyeTwvdGQ+XFxyXFxuICAgIDx0ZCB3aWR0aD1cXFwiMTIwXFxcIiBhbGlnbj1cXFwiY2VudGVyXFxcIj5Ub3RhbDwvdGQ+XFxyXFxuICA8L3RyPlxcclxcblxcclxcbiAgPHRib2R5ICpuZ0Zvcj1cXFwibGV0IHNhbGVVbml0IG9mIGJvb2tpbmdzTGlzdFxcXCI+XFxyXFxuICAgIDx0cj5cXHJcXG4gICAgICA8dGQgYWxpZ249XFxcImNlbnRlclxcXCIgc3R5bGU9XFxcImJvcmRlcjogc29saWQgMXB4ICM2NTlFQzc7IHBhZGRpbmc6IDVweDt0YWJsZS1sYXlvdXQ6Zml4ZWQ7XFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gIChjbGljayk9Z2V0Qm9va2luZ3NCeVNhbGVVbml0KHNhbGVVbml0LmlkLHF1YXJ0ZXIpIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiMzMzQ2Njg7Y29sb3I6I0ZGRkZGRjtmb250LXNpemU6c21hbGw7d2lkdGg6ODBweDtib3JkZXItY29sb3I6I2EyYWFiZTtcXFwiPlxcclxcbiAgICAgICAgICBEZXRhaWxzXFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8L3RkPlxcclxcblxcclxcbiAgICAgIDx0ZCBhbGlnbj1cXFwibGVmdFxcXCIgc3R5bGU9XFxcImJvcmRlcjogc29saWQgMXB4ICM2NTlFQzc7IHBhZGRpbmc6IDVweDt0YWJsZS1sYXlvdXQ6Zml4ZWQ7XFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojMzM0NjY4O2ZvbnQtc2l6ZTptZWRpdW1cXFwiPjxhIGhyZWY9XFxcImh0dHA6XFxcXFxcXFx7e3NhbGVVbml0Lm5hbWV9fVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPnt7c2FsZVVuaXQubmFtZX19PC9hPjwvc3Bhbj5cXHJcXG4gICAgICA8L3RkPlxcclxcbiAgICAgXFxyXFxuICAgICAgPHRkIGFsaWduPVxcXCJsZWZ0XFxcIiBzdHlsZT1cXFwiYm9yZGVyOiBzb2xpZCAxcHggIzY1OUVDNzsgcGFkZGluZzogNXB4O3RhYmxlLWxheW91dDpmaXhlZDtcXFwiPlxcclxcbiAgICAgICAgPHNwYW4gc3R5bGU9XFxcImNvbG9yOiMzMzQ2Njg7Zm9udC1zaXplOm1lZGl1bVxcXCI+PGltZyBzcmM9XFxcInt7Z2V0Q291bnRyeUZsYWcoc2FsZVVuaXQuY291bnRyeSl9fVxcXCIgd2lkdGg9XFxcIjIwXFxcIiAvPiB7e3NhbGVVbml0LmNvdW50cnl9fTwvc3Bhbj5cXHJcXG4gICAgICA8L3RkPlxcclxcblxcclxcbiAgICAgIDx0ZCBhbGlnbj1cXFwicmlnaHRcXFwiIHN0eWxlPVxcXCJib3JkZXI6IHNvbGlkIDFweCAjNjU5RUM3OyBwYWRkaW5nOiA1cHg7dGFibGUtbGF5b3V0OmZpeGVkO1xcXCI+XFxyXFxuICAgICAgICA8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzMzNDY2ODtmb250LXNpemU6bWVkaXVtXFxcIj57e3NhbGVVbml0LmN1cnJlbmN5fX0ge3tzYWxlVW5pdC50b3RhbCB9fTwvc3Bhbj5cXHJcXG4gICAgICA8L3RkPlxcclxcbiAgICA8L3RyPlxcclxcblxcclxcbiAgICA8dHIgKm5nSWY9XFxcIihhY3RpdmVSb3c9PXNhbGVVbml0LmlkKSAgJiYgIXVuZm9sZGVkXFxcIj5cXHJcXG4gICAgICA8dGQgY29sc3Bhbj1cXFwiNlxcXCIgc3R5bGU9XFxcImJvcmRlcjogc29saWQgMXB4ICM2NTlFQzc7IHBhZGRpbmc6IDVweDt0YWJsZS1sYXlvdXQ6Zml4ZWQ7XFxcIj5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz0ndGFibGUnIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiNFQ0YzRjQ7IGJvcmRlcjoycHggIzZEN0I4RDsgcGFkZGluZzo1cHg7d2lkdGg6OTklO3RhYmxlLWxheW91dDpmaXhlZDtcXFwiIGNlbGxwYWRkaW5nPVxcXCIyXFxcIiBjZWxsc3BhY2luZz1cXFwiMlxcXCIgKm5nSWY9XFxcImJvb2tpbmdEZXRhaWxzXFxcIj5cXHJcXG4gICAgICAgICAgPHRyIHN0eWxlPVxcXCJoZWlnaHQ6IDMwcHg7IGJhY2tncm91bmQtY29sb3I6IzY1OUVDNyA7IGNvbG9yOiNGRkZGRkYgO2JvcmRlcjogc29saWQgMXB4ICM2NTlFQzc7XFxcIj5cXHJcXG4gICAgICAgICAgICA8dGQgd2lkdGg9XFxcIjQwXFxcIiBhbGlnbj1cXFwibGVmdFxcXCI+PFN0cm9uZz5EZXRhaWwgLS0+PC9TdHJvbmc+ICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQgd2lkdGg9XFxcIjYwXFxcIiBhbGlnbj1cXFwibGVmdFxcXCI+Qm9va2luZ0lkPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQgd2lkdGg9XFxcIjE0MFxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+U2hpcE5hbWU8L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZCB3aWR0aD1cXFwiMTIwXFxcIiBhbGlnbj1cXFwiY2VudGVyXFxcIj5QcmljZTwvdGQ+XFxyXFxuICAgICAgICAgIDwvdHI+XFxyXFxuXFxyXFxuICAgICAgICAgIDx0Ym9keSAqbmdGb3I9XFxcImxldCBib29raW5nICBvZiBib29raW5nRGV0YWlsc1xcXCI+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgPHRkIHdpZHRoPVxcXCI0MFxcXCIgYWxpZ249XFxcImxlZnRcXFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICA8dGQgd2lkdGg9XFxcIjYwXFxcIiBhbGlnbj1cXFwibGVmdFxcXCI+e3tib29raW5nLmJvb2tpbmdJZH19PC90ZD5cXHJcXG4gICAgICAgICAgICAgIDx0ZCB3aWR0aD1cXFwiMTQwXFxcIiBhbGlnbj1cXFwiY2VudGVyXFxcIj57e2Jvb2tpbmcuc2hpcE5hbWV9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICA8dGQgd2lkdGg9XFxcIjEyMFxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+e3tib29raW5nLmN1cnJlbmN5fX0ge3tib29raW5nLnByaWNlfX08L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgIDwvdGQ+XFxyXFxuICAgIDwvdHI+XFxyXFxuXFxyXFxuICA8L3Rib2R5PlxcclxcbjwvdGFibGU+IFxcclxcblxcclxcbiBcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Jvb2tpbmdzL2Jvb2tpbmdzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NlYXJjaCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vc2VhcmNoLmNvbXBvbmVudC5odG1sJylcbn0pXG5cbmV4cG9ydCBjbGFzcyBzZWFyY2hDb21wb25lbnQge1xuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbjtcbiAgcHVibGljIHNlYXJjaFZhbHVlOiBzdHJpbmc7XG4gIHB1YmxpYyBub3RWYWxpZDogYm9vbGVhbjtcbiAgcHVibGljIHNlYXJjaFJlc3VsdHM6IFNlYXJjaFZpZXdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7XG4gIH1cblxuICBTZWFyY2hCb29raW5ncyhzZWFyY2hWYWx1ZSkge1xuICAgIHRoaXMubm90VmFsaWQgPSBpc05hTihzZWFyY2hWYWx1ZSkgJiYgc2VhcmNoVmFsdWUubGVuZ3RoIDwgMiB8fCBzZWFyY2hWYWx1ZSA9PSBcIlwiO1xyXG4gICAvLyBjb25zb2xlLmxvZyhub3RWYWxpZCk7XG4gICAgaWYgKHRoaXMubm90VmFsaWQpIHtcbiAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5odHRwLmdldCgnL2FwaS9zZWFyY2hib29raW5ncy8nICsgc2VhcmNoVmFsdWUpLnN1YnNjcmliZShcbiAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQuanNvbigpICk7XG4gICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gcmVzdWx0Lmpzb24oKTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH1cblxuICBnZXRDb3VudHJ5RmxhZyhjb3VudHJ5KSB7XG4gICAgdmFyIHVybCA9IFwiaHR0cDovL3d3dy5nZW9nbm9zLmNvbS9hcGkvZW4vY291bnRyaWVzL2ZsYWcvXCI7XG4gICAgdmFyIGNvdW50cmllcyA9IFsnQ2hpbmEnLCAnQ04nLCAnR2VybWFueScsICdERScsICdJdGFseScsICdJVCcsICdOZXRoZXJsYW5kcycsICdOTCcsICdBdXN0cmFsaWEnLCAnQVUnLCAnQnJhemlsJywgJ0JSJywgJ1J1c3NpYScsICdSVScsICdGcmFuY2UnLCAnRlInXTtcbiAgICB2YXIgaW5kZXggPSBjb3VudHJpZXMuaW5kZXhPZihjb3VudHJ5KTtcbiAgICBpZiAoaW5kZXggIT0gLTEpXG4gICAgICByZXR1cm4gdXJsICsgY291bnRyaWVzW2luZGV4ICsgMV0gKyBcIi5wbmdcIjtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBcIiNcIjtcbiAgfVxuXG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hWaWV3IHtcbiAgYm9va2luZ0lkOiBudW1iZXI7XG4gIHNoaXBOYW1lOiBzdHJpbmc7XG4gIGJvb2tpbmdEYXRlOiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG59XG4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoMj5cXHJcXG4gIFNlYXJjaCBib29raW5ncyA6IDxpbnB1dCBbKG5nTW9kZWwpXT1cXFwic2VhcmNoVmFsdWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcIm5hbWVcXFwiIHZhbHVlPVxcXCJcXFwiIHN0eWxlPVxcXCJjb2xvcjojZmY2YTAwO1xcXCIgcGxhY2Vob2xkZXI9XFxcIklkIG9yIDIgY2hhcnMgbWluXFxcIiAgKGNoYW5nZSk9XFxcIlNlYXJjaEJvb2tpbmdzKCRldmVudC50YXJnZXQudmFsdWUpXFxcIj5cXHJcXG48L2gyPiAgICBcXHJcXG48aHIgLz5cXHJcXG5cXHJcXG48cCAqbmdJZj1cXFwibG9hZGluZ1xcXCI+PGVtPkxvYWRpbmcgZGF0YSBwbGVhc2UgV2FpdCAhIC4uLjwvZW0+PC9wPlxcclxcblxcclxcblNlYXJjaCA6IHt7c2VhcmNoVmFsdWV9fVxcclxcblZhbGlkIDoge3sgIW5vdFZhbGlkfX1cXHJcXG5sb2FkaW5nIDoge3tsb2FkaW5nfX1cXHJcXG5cXHJcXG48dGFibGUgY2xhc3M9J3RhYmxlJyBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojRUNGM0Y0OyBib3JkZXI6MnB4ICM2RDdCOEQ7IHBhZGRpbmc6NXB4O3dpZHRoOjk5JTt0YWJsZS1sYXlvdXQ6Zml4ZWQ7XFxcIiBjZWxscGFkZGluZz1cXFwiMlxcXCIgY2VsbHNwYWNpbmc9XFxcIjJcXFwiICpuZ0lmPVxcXCJzZWFyY2hSZXN1bHRzXFxcIj5cXHJcXG5cXHJcXG4gIDx0ciBzdHlsZT1cXFwiaGVpZ2h0OiAzMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiM2NTlFQzcgOyBjb2xvcjojRkZGRkZGIDtib3JkZXI6IHNvbGlkIDFweCAjNjU5RUM3O1xcXCI+XFxyXFxuICAgIDx0ZCB3aWR0aD1cXFwiNjBcXFwiIGFsaWduPVxcXCJsZWZ0XFxcIj5Cb29raW5nSWQ8L3RkPlxcclxcbiAgICA8dGQgd2lkdGg9XFxcIjYwXFxcIiBhbGlnbj1cXFwibGVmdFxcXCI+RGF0ZTwvdGQ+XFxyXFxuICAgIDx0ZCB3aWR0aD1cXFwiMTQwXFxcIiBhbGlnbj1cXFwiY2VudGVyXFxcIj5TaGlwTmFtZTwvdGQ+XFxyXFxuICAgIDx0ZCB3aWR0aD1cXFwiMTIwXFxcIiBhbGlnbj1cXFwiY2VudGVyXFxcIj5QcmljZTwvdGQ+XFxyXFxuICA8L3RyPlxcclxcblxcclxcbiAgPHRib2R5ICpuZ0Zvcj1cXFwibGV0IFNlYXJjaFZpZXcgIG9mIHNlYXJjaFJlc3VsdHNcXFwiPlxcclxcbiAgICA8dHI+XFxyXFxuICAgICAgPHRkIHdpZHRoPVxcXCI2MFxcXCIgYWxpZ249XFxcImxlZnRcXFwiPnt7U2VhcmNoVmlldy5ib29raW5nSWR9fTwvdGQ+XFxyXFxuICAgICAgPHRkIHdpZHRoPVxcXCIxMjBcXFwiIGFsaWduPVxcXCJjZW50ZXJcXFwiPnt7U2VhcmNoVmlldy5ib29raW5nRGF0ZX19PC90ZD5cXHJcXG4gICAgICA8dGQgd2lkdGg9XFxcIjE0MFxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+e3tTZWFyY2hWaWV3LnNoaXBOYW1lfX08L3RkPlxcclxcbiAgICAgIDx0ZCB3aWR0aD1cXFwiNjBcXFwiIGFsaWduPVxcXCJyaWdodFxcXCI+e3tTZWFyY2hWaWV3LnByaWNlfX08L3RkPlxcclxcbiAgICA8L3RyPlxcclxcblxcclxcbiAgPC90Ym9keT5cXHJcXG48L3RhYmxlPlxcclxcblxcclxcblxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9