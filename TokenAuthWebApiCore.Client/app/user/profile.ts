import { Headers } from '@angular/http';
import { IUser } from './user';

export interface IProfile {
    token: string;
    expiration: string;
    claims: IClaim[];
    currentUser: IUser;
}

interface IClaim {
    type: string;
    value: string;
}