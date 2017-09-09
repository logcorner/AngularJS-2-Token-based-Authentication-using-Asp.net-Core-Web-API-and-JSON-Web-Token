import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';

@Component({
    templateUrl: './app/login/login.html'
})
export class Login {
    errorMessage: string;
    pageTitle = 'Log In';

    constructor(private authService: AuthService,
        private router: Router) { }

    login(loginForm: NgForm) {
       // event.preventDefault();
        if (loginForm && loginForm.valid) {
            let userName = loginForm.form.value.userName;
            let password = loginForm.form.value.password;
            var result = this.authService.login(userName, password).subscribe(
                response => {
                    debugger;

                    if (this.authService.redirectUrl) {
                        this.router.navigateByUrl(this.authService.redirectUrl);
                    } else {
                        this.router.navigate(['/products']);
                    }
                },
                error => {
                    var results = error['_body'];
                    this.errorMessage = error.statusText + ' ' +

                        error.text();
                    debugger;
                });
        } else {
            this.errorMessage = 'Please enter a user name and password.';
        };
    }
}