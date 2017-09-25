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
var router_1 = require("@angular/router");
var UserProfile = (function () {
    function UserProfile(router) {
        this.router = router;
        this.userProfile = {
            token: "",
            expiration: "",
            currentUser: { id: '', userName: '', email: '' },
            claims: null
        };
    }
    UserProfile.prototype.setProfile = function (profile) {
        var nameid = profile.claims.filter(function (p) { return p.type == 'nameid'; })[0].value;
        var userName = profile.claims.filter(function (p) { return p.type == 'sub'; })[0].value;
        var email = profile.claims.filter(function (p) { return p.type == 'email'; })[0].value;
        sessionStorage.setItem('access_token', profile.token);
        sessionStorage.setItem('expires_in', profile.expiration);
        sessionStorage.setItem('nameid', nameid);
        sessionStorage.setItem('userName', userName);
        sessionStorage.setItem('email', email);
    };
    UserProfile.prototype.getProfile = function (authorizationOnly) {
        if (authorizationOnly === void 0) { authorizationOnly = false; }
        var accessToken = sessionStorage.getItem('access_token');
        if (accessToken) {
            this.userProfile.token = accessToken;
            this.userProfile.expiration = sessionStorage.getItem('expires_in');
            if (this.userProfile.currentUser == null) {
                this.userProfile.currentUser = { id: '', userName: '', email: '' };
            }
            this.userProfile.currentUser.id = sessionStorage.getItem('nameid');
            this.userProfile.currentUser.userName = sessionStorage.getItem('userName');
        }
        return this.userProfile;
    };
    UserProfile.prototype.resetProfile = function () {
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('expires_in');
        this.userProfile = {
            token: "",
            expiration: "",
            currentUser: null,
            claims: null
        };
        return this.userProfile;
    };
    return UserProfile;
}());
UserProfile = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], UserProfile);
exports.UserProfile = UserProfile;
//# sourceMappingURL=user.profile.js.map