import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {  Headers } from '@angular/http';
import { IProfile } from './profile';

@Injectable()
export class AuthProfile  {
    userProfile: IProfile = {
        access_token: '',
        userName: '',
        refresh_token: '',
        expires_in :'',
        header  : null
     };
  constructor(private router: Router) {
      
  }

  //canActivate() {
  //  if (tokenNotExpired()) {
  //    return true;
  //  }

  //  this.router.navigate(['/login']);
  //  return false;
  //}

  setProfile(profile: IProfile): void {
      sessionStorage.setItem('access_token', profile.access_token);
      sessionStorage.setItem('userName', profile.userName);
      sessionStorage.setItem('refresh_token', profile.refresh_token);
      sessionStorage.setItem('expires_in', profile.expires_in);

  }

  getProfile(authorizationOnly: boolean = false): IProfile {
      let headers = new Headers({});
      if (authorizationOnly == false)
      {
           headers = new Headers({ 'Content-Type': 'application/json' });
      }
      var accessToken = sessionStorage.getItem('access_token');
      
      if (accessToken) {
          headers.append('Authorization', 'Bearer ' + accessToken);
          this.userProfile.access_token = accessToken;
          this.userProfile.userName = sessionStorage.getItem('userName');
          this.userProfile.expires_in = sessionStorage.getItem('expires_in');
          this.userProfile.refresh_token = sessionStorage.getItem('refresh_token');
      }
      this.userProfile.header = headers;
      return this.userProfile;
  }

  resetProfile(): IProfile {
	  sessionStorage.removeItem('access_token');
	  return {
		  access_token: null,
		  userName: null,
          refresh_token: null,
          expires_in : null,
		  header: null
	  };
  }
}
