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
const country_service_1 = require("../services/country.service");
const router_1 = require("@angular/router");
let CountryListComponent = class CountryListComponent {
    constructor(countryService, _router) {
        this.countryService = countryService;
        this._router = _router;
        // Local properties
        this.comments = [];
        this.details = [];
    }
    loadComments() {
        this.countryService.getCountryList()
            .subscribe((res) => {
            this.comments = res;
        });
    }
    ngOnInit() {
        this.loadComments();
    }
};
CountryListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'countrylist.html',
    }),
    __metadata("design:paramtypes", [country_service_1.CountryService,
        router_1.Router])
], CountryListComponent);
exports.CountryListComponent = CountryListComponent;
//# sourceMappingURL=country-list.Component.js.map