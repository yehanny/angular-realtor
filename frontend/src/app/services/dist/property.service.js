"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PropertyService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var PropertyService = /** @class */ (function () {
    function PropertyService() {
        /* Inject HttpClient into component. */
        this.httpClient = core_1.inject(http_1.HttpClient);
        this.data = [];
        this.hostApi = 'http://localhost:3000';
        this.propertyLocationList = this.data;
    }
    PropertyService.prototype.ngOnInit = function () {
        this.fetchData();
    };
    /* Getting data from API */
    PropertyService.prototype.fetchData = function () {
        var _this = this;
        this.httpClient
            .get(this.hostApi + "/properties/all")
            .subscribe(function (data) {
            _this.data = data;
        });
    };
    /* Get all property locations */
    PropertyService.prototype.getAllPropertyLocations = function () {
        return this.propertyLocationList;
    };
    /* Get property location by id */
    PropertyService.prototype.getPropertyLocationById = function (id) {
        return this.propertyLocationList.find(function (propertyLocation) { return propertyLocation.id === id; });
    };
    PropertyService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        core_1.NgModule({
            imports: [http_1.HttpClientModule]
        })
    ], PropertyService);
    return PropertyService;
}());
exports.PropertyService = PropertyService;
