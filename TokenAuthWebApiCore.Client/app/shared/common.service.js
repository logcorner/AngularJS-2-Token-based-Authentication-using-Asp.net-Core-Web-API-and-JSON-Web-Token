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
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/throw");
var CommonService = (function () {
    function CommonService() {
        this.baseUrl = 'http://localhost:58834/api';
    }
    CommonService.prototype.getBaseUrl = function () {
        return this.baseUrl;
    };
    CommonService.prototype.handleFullError = function (error) {
        return Observable_1.Observable.throw(error);
    };
    CommonService.prototype.handleError = function (error) {
        var errorMessage = error.json();
        console.error(errorMessage);
        return Observable_1.Observable.throw(errorMessage.error || 'Server error');
    };
    return CommonService;
}());
CommonService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CommonService);
exports.CommonService = CommonService;
//# sourceMappingURL=common.service.js.map