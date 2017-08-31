import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';
import { IProfile } from './profile';

@Injectable()
export class AuthProfile {
    userProfile: IProfile = {
        token: '',
        userName: '',
        refreshToken: '',
        expiresIn: '',
        header: null,
        idToken: '',
        currentUser :null
    };
    constructor(private router: Router) {
    }

    setProfile(profile: IProfile): void {
        sessionStorage.setItem('access_token', profile.token);
        sessionStorage.setItem('userName', profile.userName);
        sessionStorage.setItem('refresh_token', profile.refreshToken);
        sessionStorage.setItem('expires_in', profile.expiresIn);
        sessionStorage.setItem('id_token', profile.idToken);

        localStorage.setItem('id_token', profile.idToken);
    }

    getProfile(authorizationOnly: boolean = false): IProfile {
        let headers = new Headers({});
        if (authorizationOnly === false) {
            headers = new Headers({ 'Content-Type': 'application/json' });
        }
        debugger;
        var accessToken = sessionStorage.getItem('access_token');

        if (accessToken) {
            headers.append('Authorization', 'Bearer ' + accessToken);
            this.userProfile.token = accessToken;
            this.userProfile.userName = sessionStorage.getItem('userName');
            this.userProfile.expiresIn = sessionStorage.getItem('expires_in');
            this.userProfile.refreshToken = sessionStorage.getItem('refresh_token');
        }
        this.userProfile.header = headers;
        return this.userProfile;
    }

    resetProfile(): IProfile {
        sessionStorage.removeItem('access_token');
        return {
            token: '',
            userName: '',
            refreshToken: '',
            expiresIn: '',
            header: null,
            idToken: '',
            currentUser : null
        };
    }
}