import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanLoad, Router, Route } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private authService: UserService,
		private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		var result = this.checkLoggedIn(state.url);

		console.log('canActivate: ' + result + ',state.url' + state.url);
		return result;
	}

	canLoad(route: Route): boolean {
		return this.checkLoggedIn(route.path);
	}

	checkLoggedIn(url: string): boolean {
		/*if (this.authService.isLoggedIn()) {
            return true;
        }
        this.authService._redirectUrl = url;
        this.router.navigate(['/login']);
        return false;*/
		return true;
	}
}