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
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
let CountryService = class CountryService {
    // Resolve HTTP using the constructor
    constructor(http) {
        this.http = http;
        this.countryUrl = 'http://api.geonames.org/countryInfoJSON?username=mubashir.hussain@tenpearls.com';
        this.detailUrl = 'http://api.geonames.org/countryInfo?username=mubashir.hussain@tenpearls.com&type=json&country=';
        this.neighbour = 'http://api.geonames.org/neighbours?username=mubashir.hussain@tenpearls.com&type=json&geonameId=';
    }
    // Fetch all existing comments
    getCountryList() {
        // ...using get request
        return this.http.get(this.countryUrl)
            .map((res) => res.json())
            .catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error'));
    }
    countryDetails(id) {
        return this.http.get(`${this.detailUrl}${id}`) // ...using put request
            .map((res) => res.json()) // ...and calling .json() on the response to return data
            .catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
    NeighbourDetails(code) {
        return this.http.get(`${this.neighbour}${code}`) // ...using put request
            .map((res) => res.json()) // ...and calling .json() on the response to return data
            .catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
};
CountryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CountryService);
exports.CountryService = CountryService;
//# sourceMappingURL=country.service.js.map