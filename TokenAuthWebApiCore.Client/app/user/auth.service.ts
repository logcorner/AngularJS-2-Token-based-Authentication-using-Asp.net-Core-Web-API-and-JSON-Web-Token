import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {  Router, Route } from '@angular/router';
import { IUser } from './user';
import { IProfile } from './profile';

import { AuthProfile } from './auth.profile';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
    currentUser: IUser;
    _redirectUrl: string;
	private baseUrl = 'http://localhost:54823/';
	userProfile: IProfile;
	errorMessage: string;
    constructor(
		private http: Http,
		private router: Router,
        
        private authProfile :AuthProfile) { }

	isLoggedIn(): boolean {
		
        this.userProfile = this.authProfile.getProfile();
		if (this.userProfile) {
			console.log('isLoggedIn.userProfile: ' + JSON.stringify(this.userProfile))
            var isLogIn = !!this.currentUser;
            console.log('currentUser: ' + JSON.stringify(this.currentUser))
			return isLogIn && (!!this.userProfile.access_token);
        }
        return false;
    }

    login(userName: string, password: string): void {
        if (!userName || !password) {
            //this.messageService.addMessage('Please enter your userName and password');
            return;
        }
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'  });
        let options = new RequestOptions(
            { headers: headers });
	
        var credentials = "grant_type=password"
            + "&username=" + userName
            + "&password=" + password;

        console.log('params Credentials:' + JSON.stringify(credentials));

        this.http.post(this.baseUrl + '/TOKEN', credentials, options)
			.subscribe((res) => {
				this.userProfile = res.json()
				this.authProfile.setProfile(this.userProfile);
				this.router.navigate([this._redirectUrl]);
			},
			error => this.errorMessage = <any>error);

        this.currentUser = {
            id: 2,
            userName: userName,
            isAdmin: false
        };
        //this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
    }

	logout(): void {
		this.currentUser = null;
		this.userProfile = null;//this.authProfile.resetProfile();
	}

	private handleError(error: Response): Observable<any> {
		// in a real world app, we may send the server to some remote logging infrastructure
		// instead of just logging it to the console
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
