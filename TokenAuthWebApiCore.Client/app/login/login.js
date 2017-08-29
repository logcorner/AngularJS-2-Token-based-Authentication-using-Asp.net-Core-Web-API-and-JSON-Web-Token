//import { Component } from '@angular/core';
//import { Router } from '@angular/router';
//import { Http } from '@angular/http';
//import { contentHeaders } from '../common/headers';
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
////const styles = require('./login.css');
////const template = require('./login.html');
////@Component({
////  selector: 'login',
////  template: template,
////  styles: [ styles ]
////})
//@Component({
//	templateUrl: './app/login/login.html',
//	styleUrls: ['app/login/login.css']
//})
//export class Login {
//	constructor(public router: Router, public http: Http) {
//	}
//	login(event: any, username: string, password: string) {
//		event.preventDefault();
//		let body = JSON.stringify({ username, password });
//		this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
//			.subscribe(
//			response => {
//				localStorage.setItem('id_token', response.json().id_token);
//				this.router.navigate(['home']);
//			},
//			error => {
//				alert(error.text());
//				console.log(error.text());
//			}
//			);
//	}
//	signup(event: any) {
//		event.preventDefault();
//		this.router.navigate(['signup']);
//	}
//}
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../user/auth.service");
var Login = (function () {
    function Login(authService, router) {
        this.authService = authService;
        this.router = router;
        this.pageTitle = 'Log In';
    }
    Login.prototype.login = function (loginForm) {
        var _this = this;
        if (loginForm && loginForm.valid) {
            var userName = loginForm.form.value.userName;
            var password = loginForm.form.value.password;
            var result = this.authService.login(userName, password).subscribe(function (response) {
                debugger;
                //localStorage.setItem('id_token', response.json().id_token);
                //this.router.navigate(['home']);
                if (_this.authService.redirectUrl) {
                    _this.router.navigateByUrl(_this.authService.redirectUrl);
                }
                else {
                    _this.router.navigate(['/products']);
                }
            }, function (error) {
                var results = error['_body'];
                _this.errorMessage = error.statusText + ' ' +
                    error.text();
                debugger;
            });
            //debugger;
            //console.log('this.authService._redirectUrl = ' + this.authService.redirectUrl);
            //debugger;
            //if (this.authService.redirectUrl) {
            //    this.router.navigateByUrl(this.authService.redirectUrl);
            //} else {
            //    this.router.navigate(['/products']);
            //}
        }
        else {
            this.errorMessage = 'Please enter a user name and password.';
        }
        ;
    };
    return Login;
}());
Login = __decorate([
    core_1.Component({
        templateUrl: './app/login/login.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        router_1.Router])
], Login);
exports.Login = Login;
//# sourceMappingURL=login.js.map