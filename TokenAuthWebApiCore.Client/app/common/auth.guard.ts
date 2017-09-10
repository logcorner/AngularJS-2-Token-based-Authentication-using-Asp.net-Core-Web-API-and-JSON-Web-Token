import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isAuthorized()) {
            return true;
        }

        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    }
}