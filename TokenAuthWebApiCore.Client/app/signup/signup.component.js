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
var user_service_1 = require("../user/user.service");
var SignupComponent = (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.pageTitle = 'signup';
    }
    SignupComponent.prototype.register = function (signupForm) {
        var _this = this;
        if (signupForm && signupForm.valid) {
            var userName = signupForm.form.value.userName;
            var password = signupForm.form.value.password;
            var confirmPassword = signupForm.form.value.confirmPassword;
            var result = this.authService.register(userName, password, confirmPassword)
                .subscribe(function (response) {
                if (_this.authService.redirectUrl) {
                    _this.router.navigateByUrl(_this.authService.redirectUrl);
                }
                else {
                    _this.router.navigate(['/']);
                }
            }, function (error) {
                var results = error['_body'];
                _this.errorMessage = error.statusText + ' ' +
                    error.text();
            });
        }
        else {
            this.errorMessage = 'Please enter a user name and password.';
        }
        ;
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    core_1.Component({
        templateUrl: './app/signup/signup.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router])
], SignupComponent);
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map