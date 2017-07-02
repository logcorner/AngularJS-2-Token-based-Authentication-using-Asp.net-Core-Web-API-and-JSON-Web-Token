import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//import { LoginComponent } from './login.component';
import { Login } from '../login/login';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { AuthProfile } from './auth.profile';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
		{ path: 'login', component: Login }
    ])
  ],
  declarations: [
	  Login
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthProfile
  ]
})
export class UserModule { }
