import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
//import { IProfile, AuthService, AuthProfile } from './user/index';
import { IProfile } from './user/user.model';
import { UserService } from './user/user.service';
import { AuthProfile } from './user/auth.profile';

@Component({
    selector: 'pm-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {
    pageTitle: string = 'Acme Product Management';
    loading: boolean = true;
    Profile: IProfile;

    constructor(private authService: UserService,
        private authProfile: AuthProfile,
        private router: Router) {
        router.events.subscribe((routerEvent: Event) => {
            this.checkRouterEvent(routerEvent);
        });
    }
    ngOnInit(): void {
        this.Profile = this.authProfile.userProfile;
    }

    checkRouterEvent(routerEvent: Event): void {
        if (routerEvent instanceof NavigationStart) {
            this.loading = true;
        }

        if (routerEvent instanceof NavigationEnd ||
            routerEvent instanceof NavigationCancel ||
            routerEvent instanceof NavigationError) {
            this.loading = false;
        }
    }

    logOut(): void {
        this.authService.logout();
        debugger;
        this.router.navigateByUrl('/home');
    }
}