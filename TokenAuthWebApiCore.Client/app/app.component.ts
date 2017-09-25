import { Component, OnInit } from '@angular/core';
import {
    Router,
} from '@angular/router';
import { IProfile } from './user/user.model';
import { UserService } from './user/user.service';
import { UserProfile } from './user/user.profile';

@Component({
    selector: 'pm-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {
    pageTitle: string = 'Acme Product Management';
    loading: boolean = true;
    Profile: IProfile;

    constructor(private authService: UserService,
        private authProfile: UserProfile,
        private router: Router) {
    }
    ngOnInit(): void {
        this.Profile = this.authProfile.userProfile;
    }

    logOut(): void {
        this.authService.logout();

        this.router.navigateByUrl('/home');
    }
}