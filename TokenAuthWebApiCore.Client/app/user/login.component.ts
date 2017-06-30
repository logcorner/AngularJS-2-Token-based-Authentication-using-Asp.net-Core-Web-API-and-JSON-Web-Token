import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    templateUrl: './app/user/login.component.html'
})
export class LoginComponent {
    errorMessage: string;
    pageTitle = 'Log In';

    constructor(private authService: AuthService,
                private router: Router) { }

    login(loginForm: NgForm) {
        if (loginForm && loginForm.valid) {
            let userName = loginForm.form.value.userName;
            let password = loginForm.form.value.password;
			var result = this.authService.login(userName, password);


			//var currentUser = sessionStorage.getItem('currentUser');
		    //var token = currentUser.access_token;
			console.log('this.authService._redirectUrl = ' + this.authService._redirectUrl);
            if (this.authService._redirectUrl) {
				this.router.navigateByUrl(this.authService._redirectUrl);
            } else {
                this.router.navigate(['/products']);
            }
        } else {
            this.errorMessage = 'Please enter a user name and password.';
        };
    }
}