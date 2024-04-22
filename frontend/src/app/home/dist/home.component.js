"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var property_location_component_1 = require("../property-location/property-location.component");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        /* Inject HttpClient into component. */
        this.httpClient = core_1.inject(http_1.HttpClient);
        /* Holds the values of all properties */
        this.propertyLocationList = [];
        this.hostApi = 'http://localhost:3000';
        /* Holds the values of filtered properties */
        this.filteredLocationList = this.propertyLocationList;
        this.propertyLocationList = [];
        this.filteredLocationList = this.propertyLocationList;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.fetchPropertyLocationList();
    };
    /* Getting data from API */
    HomeComponent.prototype.fetchPropertyLocationList = function () {
        var _this = this;
        this.httpClient
            .get(this.hostApi + "/properties/all")
            .subscribe(function (data) {
            _this.propertyLocationList = data;
        });
    };
    /* Filtering the properties based on city */
    HomeComponent.prototype.filterResults = function (text) {
        if (!text) {
            this.filteredLocationList = this.propertyLocationList;
            return;
        }
        this.filteredLocationList = this.propertyLocationList.filter(function (propertyLocation) { return propertyLocation === null || propertyLocation === void 0 ? void 0 : propertyLocation.state.toLowerCase().includes(text.toLowerCase()); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            standalone: true,
            imports: [property_location_component_1.PropertyLocationComponent, http_1.HttpClientModule, common_1.NgForOf],
            template: "\n    <section>\n      <form>\n        <input type=\"text\" placeholder=\"Filter by state\" #filter />\n        <button\n          class=\"primary\"\n          type=\"button\"\n          (click)=\"filterResults(filter.value)\"\n        >\n          Search\n        </button>\n      </form>\n    </section>\n    <section class=\"results\">\n      <app-property-location\n        *ngFor=\"let propertyLocation of filteredLocationList\"\n        [propertyLocation]=\"propertyLocation\"\n      >\n      </app-property-location>\n    </section>\n  ",
            styleUrl: './home.component.scss'
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
