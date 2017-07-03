import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../user/auth.service';

@Component({
	templateUrl: './app/signup/signup.html'
})
export class Signup {
	errorMessage: string;
	pageTitle = 'signup';

	constructor(private authService: AuthService,
		private router: Router) { }

	register(signupForm: NgForm) {
		//event.preventDefault();
		if (signupForm && signupForm.valid) {
			let userName = signupForm.form.value.userName;
			let password = signupForm.form.value.password;
			let confirmPassword = signupForm.form.value.confirmPassword;
			var result = this.authService.register(userName, password, confirmPassword);
			debugger;
			console.log('this.authService._redirectUrl = ' + this.authService.redirectUrl);
			if (this.authService.redirectUrl) {
				this.router.navigateByUrl(this.authService.redirectUrl);
			} else {
				this.router.navigate(['/products']);
			}
		} else {
			this.errorMessage = 'Please enter a user name and password.';
		};
	}
}