//import { Component } from '@angular/core';
//import { Router } from '@angular/router';
//import { Http } from '@angular/http';
//import { contentHeaders } from '../common/headers';

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
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../user/auth.service';

@Component({
	templateUrl: './app/user/login.component.html'
})
export class Login {
	errorMessage: string;
	pageTitle = 'Log In';

	constructor(private authService: AuthService,
		private router: Router) { }

	login(loginForm: NgForm) {
		if (loginForm && loginForm.valid) {
			let userName = loginForm.form.value.userName;
			let password = loginForm.form.value.password;
			var result = this.authService.login(userName, password);
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
