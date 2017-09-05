import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//import { LoginComponent } from './login.component';
import { Login } from '../login/login';
import { Signup } from '../signup/signup';
import { AuthService } from './auth.service';
import { AuthGuard } from '../common/auth.guard';
import { AuthProfile } from './auth.profile';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'login', component: Login },
            { path: 'signup', component: Signup },
            { path: 'logOut', component: Login }
        ])
    ],
    declarations: [
        Login,
        Signup
    ],
    providers: [
        AuthService,
        AuthGuard,
        AuthProfile
    ]
})
export class UserModule { }