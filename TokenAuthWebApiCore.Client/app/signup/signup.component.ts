import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { UserService } from '../user/user.service';

@Component({
    templateUrl: './app/signup/signup.component.html'
})
export class SignupComponent {
    errorMessage: string;
    pageTitle = 'signup';

    constructor(private authService: UserService,
        private router: Router) { }

    register(signupForm: NgForm) {
        if (signupForm && signupForm.valid) {
            let userName = signupForm.form.value.userName;
            let password = signupForm.form.value.password;
            let confirmPassword = signupForm.form.value.confirmPassword;
            var result = this.authService.register(userName, password, confirmPassword)
                .subscribe(
                response => {
                    if (this.authService.redirectUrl) {
                        this.router.navigateByUrl(this.authService.redirectUrl);
                    } else {
                        this.router.navigate(['/']);
                    }
                },
                error => {
                    var results = error['_body'];
                    this.errorMessage = error.statusText + ' ' +

                        error.text();
                }
                );
        } else {
            this.errorMessage = 'Please enter a user name and password.';
        };
    }
}