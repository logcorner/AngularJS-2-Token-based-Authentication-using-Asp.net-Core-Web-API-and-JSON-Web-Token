import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { IUser } from './user';
import { IProfile } from './profile';
import { contentHeaders } from '../common/headers';
import { AuthProfile } from './auth.profile';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
	currentUser: IUser;
	redirectUrl: string;
	private baseUrl = 'http://localhost:58834/api/auth';
	userProfile: IProfile;
	errorMessage: string;
	constructor(
		private http: Http,
		private router: Router,
		private authProfile: AuthProfile) { }

	isLoggedIn() {
		return false;
	}

	login(userName: string, password: string): void {
		if (!userName || !password) {
			return;
		}
		let options = new RequestOptions(
			{ headers: contentHeaders });

		var credentials = {
			grant_type: 'password',
			email: userName,
			password: password
		};

		this.http.post(this.baseUrl + '/token', credentials, options)
			.subscribe((res) => {
				this.userProfile = res.json();
				this.authProfile.setProfile(this.userProfile);
				this.router.navigate([this.redirectUrl]);
			},
			error => this.errorMessage = <any>error);
	}
	register(userName: string, password: string, confirmPassword: string): void {
		if (!userName || !password) {
			return;
		}
		let options = new RequestOptions(
			{ headers: contentHeaders });

		var credentials = {
			email: userName,
			password: password,
			confirmPassword: confirmPassword
		};

		this.http.post(this.baseUrl + '/register', credentials, options)
			.subscribe((res) => {
				this.userProfile = res.json();
				this.login(userName, password);
			},
			error => this.errorMessage = <any>error);
	}

	logout(): void {
		this.currentUser = null;
		this.userProfile = null;
	}
}