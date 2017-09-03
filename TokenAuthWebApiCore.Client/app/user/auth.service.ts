import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { IProfile } from './profile';
import { contentHeaders } from '../common/headers';
import { AuthProfile } from './auth.profile';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";
import { tokenNotExpired } from "angular2-jwt";

@Injectable()
export class AuthService {
    redirectUrl: string;
    private baseUrl = 'http://localhost:58834/api/auth';
    errorMessage: string;
    constructor(
        private http: Http,
        private router: Router,
        private authProfile: AuthProfile) { }

    isAuthenticated() {
        let profile = this.authProfile.getProfile();
        var validToken = profile.token != "" && profile.token != null;
        var isTokenExpired = this.isTokenExpired(profile);
        return validToken && !isTokenExpired;
    }
    isAuthorized() {
        let profile = this.authProfile.getProfile();
        var validToken = profile.token != "" && profile.token != null;
        var isTokenExpired = this.isTokenExpired(profile);
        return validToken && !isTokenExpired;
    }
    isTokenExpired(profile: IProfile) {
        var expiration = new Date(profile.expiration)
        return expiration < new Date();
    }

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
                var userProfile: IProfile = response.json();
                this.authProfile.setProfile(userProfile);
                return response.json();
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
        this.authProfile.resetProfile();
    }
}