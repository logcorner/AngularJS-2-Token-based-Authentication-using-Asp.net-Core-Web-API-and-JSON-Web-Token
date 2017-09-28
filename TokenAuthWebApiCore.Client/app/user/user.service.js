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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var common_service_1 = require("../shared/common.service");
var headers_1 = require("../common/headers");
var user_profile_1 = require("./user.profile");
var UserService = (function () {
    function UserService(http, router, authProfile, commonService) {
        this.http = http;
        this.router = router;
        this.authProfile = authProfile;
        this.commonService = commonService;
    }
    UserService.prototype.isAuthenticated = function () {
        var profile = this.authProfile.getProfile();
        var validToken = profile.token != "" && profile.token != null;
        var isTokenExpired = this.isTokenExpired(profile);
        return validToken && !isTokenExpired;
    };
    UserService.prototype.isAuthorized = function () {
        var profile = this.authProfile.getProfile();
        var validToken = profile.token != "" && profile.token != null;
        var isTokenExpired = this.isTokenExpired(profile);
        return validToken && !isTokenExpired;
    };
    UserService.prototype.isTokenExpired = function (profile) {
        var expiration = new Date(profile.expiration);
        return expiration < new Date();
    };
    UserService.prototype.login = function (userName, password) {
        var _this = this;
        if (!userName || !password) {
            return;
        }
        var options = new http_1.RequestOptions({ headers: headers_1.contentHeaders });
        var credentials = {
            grant_type: 'password',
            email: userName,
            password: password
        };
        var url = this.commonService.getBaseUrl() + '/auth/token';
        return this.http.post(url, credentials, options)
            .map(function (response) {
            var userProfile = response.json();
            _this.authProfile.setProfile(userProfile);
            return response.json();
        }).catch(this.commonService.handleFullError);
    };
    UserService.prototype.register = function (userName, password, confirmPassword) {
        if (!userName || !password) {
            return;
        }
        var options = new http_1.RequestOptions({ headers: headers_1.contentHeaders });
        var credentials = {
            email: userName,
            password: password,
            confirmPassword: confirmPassword
        };
        var url = this.commonService.getBaseUrl() + '/auth/register';
        return this.http.post(url, credentials, options)
            .map(function (response) {
            return response.json();
        }).catch(this.commonService.handleFullError);
    };
    UserService.prototype.logout = function () {
        this.authProfile.resetProfile();
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        router_1.Router,
        user_profile_1.UserProfile,
        common_service_1.CommonService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map