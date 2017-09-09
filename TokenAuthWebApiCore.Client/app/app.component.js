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
var auth_profile_1 = require("./user/auth.profile");
var AppComponent = (function () {
    function AppComponent(authService, authProfile, router) {
        var _this = this;
        this.authService = authService;
        this.authProfile = authProfile;
        this.router = router;
        this.pageTitle = 'Acme Product Management';
        this.loading = true;
        router.events.subscribe(function (routerEvent) {
            _this.checkRouterEvent(routerEvent);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.Profile = this.authProfile.userProfile;
    };
    AppComponent.prototype.checkRouterEvent = function (routerEvent) {
        if (routerEvent instanceof router_1.NavigationStart) {
            this.loading = true;
        }
        if (routerEvent instanceof router_1.NavigationEnd ||
            routerEvent instanceof router_1.NavigationCancel ||
            routerEvent instanceof router_1.NavigationError) {
            this.loading = false;
        }
    };
    AppComponent.prototype.logOut = function () {
        this.authService.logout();
        debugger;
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
        auth_profile_1.AuthProfile,
        router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map