import { Headers } from '@angular/http';
import { IUser } from './user';
/* Defines the user entity */
export interface IProfile {
    token: string;
    userName: string;
    refreshToken: string;
    expiresIn: string;
    header: Headers;
    idToken: string;
    currentUser: IUser;
}