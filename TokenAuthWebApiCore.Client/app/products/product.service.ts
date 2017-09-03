import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IProduct } from './product';
import { AuthProfile } from '../user/auth.profile'

@Injectable()
export class ProductService {
    private baseUrl = 'http://localhost:58834/api/product';

    constructor(private http: Http, private authProfile: AuthProfile) { }

    getProducts(): Observable<IProduct[]> {
        debugger;
        let options = null;
        let profile = this.authProfile.getProfile();

        if (profile != null && profile != undefined) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + profile.token });
            options = new RequestOptions({ headers: headers });
        }
        let data: Observable<IProduct[]> = this.http.get(this.baseUrl, options)
            .map(res => <IProduct[]>res.json())
            .do(data => console.log('getProducts: ' + JSON.stringify(data)))
            .catch(this.handleError);

        return data;
    }

    private handleError(error: Response): Observable<any> {
        debugger;
        let errorMessage = error.json();
        console.error(errorMessage);
        return Observable.throw(errorMessage.error || 'Server error');
    }
}