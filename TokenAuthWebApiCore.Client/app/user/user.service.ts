import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
//import { IProfile } from '../user/index';
import { contentHeaders } from '../common/headers';
import { AuthProfile } from './auth.profile';
import {  IProfile } from './user.model';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";
//import { tokenNotExpired } from "angular2-jwt";
import { CommonService } from '../shared/common.service'

@Injectable()
export class UserService {
    redirectUrl: string;
    errorMessage: string;
    constructor(
        private http: Http,
        private router: Router,
        private authProfile: AuthProfile,
        private commonService: CommonService) { }

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
        let url = this.commonService.getBaseUrl() + '/auth/token';
        debugger;
        return this.http.post(url, credentials, options)
            .map((response: Response) => {
                debugger;
                var userProfile: IProfile = response.json();
                this.authProfile.setProfile(userProfile);
                return response.json();
            }).catch(this.commonService.handleFullError);
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
        let url = this.commonService.getBaseUrl() + '/auth/register';
        return this.http.post(url, credentials, options)
            .map((response: Response) => {
                debugger;
                return response.json();
            }).catch(this.commonService.handleFullError);
    }

    logout(): void {
        this.authProfile.resetProfile();
    }
}