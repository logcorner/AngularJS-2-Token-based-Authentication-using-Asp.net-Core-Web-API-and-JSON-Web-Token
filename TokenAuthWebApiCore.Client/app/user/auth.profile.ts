import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';
import { IProfile } from './profile';

@Injectable()
export class AuthProfile {
    userProfile: IProfile = {
        token: "",
        expiration: "",
        currentUser: null
    };
    constructor(private router: Router) {
    }

    setProfile(profile: IProfile): void {
        debugger;
        sessionStorage.setItem('access_token', profile.token);
        sessionStorage.setItem('expires_in', profile.expiration);
    }

    getProfile(authorizationOnly: boolean = false): IProfile {
        var accessToken = sessionStorage.getItem('access_token');

        if (accessToken) {
            this.userProfile.token = accessToken;
            this.userProfile.expiration = sessionStorage.getItem('expires_in');
        }

        return this.userProfile;
    }

    resetProfile(): IProfile {
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('expires_in');
        return {
            token: "",
            expiration: "",
            currentUser: null
        };
    }
}