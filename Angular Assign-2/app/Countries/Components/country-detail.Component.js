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
const country_service_1 = require("../services/country.service");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let CountryDetailComponent = class CountryDetailComponent {
    // Constructor with injected service
    constructor(countryService, routeACTIVE) {
        this.countryService = countryService;
        this.routeACTIVE = routeACTIVE;
        // Local properties initiation
        this.comments = [];
        this.details = [];
        this.neighbour = [];
    }
    ngOnInit() {
        this.routeACTIVE.params.subscribe(params => {
            this.countryCode = params['id'];
            this.countryService.countryDetails(this.countryCode).subscribe((res) => {
                this.details = res;
                this.geoNameId = res.geonames[0].geonameId;
                this.countryService.NeighbourDetails(this.geoNameId).subscribe((res) => {
                    this.neighbour = res;
                });
            });
        });
        // Load Countries
    }
};
CountryDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'detail.html',
    }),
    __metadata("design:paramtypes", [country_service_1.CountryService,
        router_1.ActivatedRoute])
], CountryDetailComponent);
exports.CountryDetailComponent = CountryDetailComponent;
//# sourceMappingURL=country-detail.Component.js.map