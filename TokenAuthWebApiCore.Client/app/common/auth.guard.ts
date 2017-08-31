import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { tokenNotExpired } from 'angular2-jwt';
//import { tokenNotExpired } from 'angular2-jwt';

import { AuthService } from '../user/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        debugger;
        //if (tokenNotExpired()) {
        //    return true;
        //}
        //if (!this.authService.isExpired()) {
            return true;
        //}

        //this.authService.redirectUrl = state.url;
        //this.router.navigate(['/login']);
        //return false;
    }
}