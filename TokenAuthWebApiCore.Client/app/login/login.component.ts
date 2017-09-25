import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
    templateUrl: './app/login/login.component.html'
})
export class LoginComponent {
    errorMessage: string;
    pageTitle = 'Log In';

    constructor(private authService: UserService,
        private router: Router) { }

    login(loginForm: NgForm) {
        if (loginForm && loginForm.valid) {
            let userName = loginForm.form.value.userName;
            let password = loginForm.form.value.password;
            var result = this.authService.login(userName, password).subscribe(
                response => {
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
                });
        } else {
            this.errorMessage = 'Please enter a user name and password.';
        };
    }
}