import { Headers } from '@angular/http';
/* Defines the user entity */
export interface IProfile {
	accessToken: string;
	userName: string;
	refreshToken: string;
	expiresIn: string;
	header: Headers;
	idToken: string;
}