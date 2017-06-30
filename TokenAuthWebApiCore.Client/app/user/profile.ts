import { Headers } from '@angular/http';
/* Defines the user entity */
export interface IProfile {
	access_token: string;
    userName: string;
    refresh_token: string;
    expires_in: string;
    header: Headers
}
