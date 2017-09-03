import { Headers } from '@angular/http';
import { IUser } from './user';

export interface IProfile {
    token: string;
    expiration: string;
    currentUser: IUser;
}