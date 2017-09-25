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
var user_service_1 = require("./user/user.service");
var user_profile_1 = require("./user/user.profile");
var AppComponent = (function () {
    function AppComponent(authService, authProfile, router) {
        this.authService = authService;
        this.authProfile = authProfile;
        this.router = router;
        this.pageTitle = 'Acme Product Management';
        this.loading = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.Profile = this.authProfile.userProfile;
    };
    AppComponent.prototype.logOut = function () {
        this.authService.logout();
        this.router.navigateByUrl('/home');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        templateUrl: './app/app.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        user_profile_1.UserProfile,
        router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map