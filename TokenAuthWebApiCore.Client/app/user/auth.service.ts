import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

import { IProfile } from './profile';
import { contentHeaders } from '../common/headers';
import { AuthProfile } from './auth.profile';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//import { JwtHelper } from 'angular2-jwt';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
    redirectUrl: string;
    private baseUrl = 'http://localhost:58834/api/auth';
    public userProfile: IProfile;
    errorMessage: string;
    constructor(
        private http: Http,
        private router: Router,
        private authProfile: AuthProfile) { }

    isLoggedIn() {
        return false;
    }

    //private jwtHelper: JwtHelper = new JwtHelper();
    private token = localStorage.getItem('auth_token');

    //isExpired() {
    //    debugger;
    //    if (this.token === null) {
    //        return true;
    //    }
    //    this.jwtHelper.decodeToken(this.token);
    //    this.jwtHelper.getTokenExpirationDate(this.token);
    //    this.jwtHelper.isTokenExpired(this.token);
    //    return this.jwtHelper.isTokenExpired(this.token);
    //}

    login(userName: string, password: string) {
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

        return this.http.post(this.baseUrl + '/token', credentials, options)
            .map((response: Response) => {
                debugger;
                this.userProfile = response.json();
                this.authProfile.setProfile(this.userProfile);
                return response.json();
                //this.router.navigate([this.redirectUrl]);
            }).catch(this.handleError);
    }
    register(userName: string, password: string, confirmPassword: string) {
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

        return this.http.post(this.baseUrl + '/register', credentials, options)
            .map((response: Response) => {
                debugger;
                return response.json();
            }).catch(this.handleError);
    }
    private handleError(error: Response) {
        debugger;
        return Observable.throw(error);
    }

    logout(): void {
        this.userProfile = null;
    }
}