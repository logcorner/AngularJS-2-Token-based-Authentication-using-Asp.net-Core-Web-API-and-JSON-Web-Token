import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
//import { AuthService } from './auth.service';
import { AuthGuard } from '../common/auth.guard';
//import { AuthProfile } from './auth.profile';
import { SharedModule } from '../shared/shared.module';

import {
    UserService,
    AuthProfile
} from './index'


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
            ])
    ],
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    providers: [
        UserService,
        AuthGuard,
        AuthProfile
    ]
})
export class UserModule { }