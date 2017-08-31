import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IProduct } from './product';
import { AuthService } from '../user/auth.service'

@Injectable()
export class ProductService {
    private baseUrl = 'http://localhost:58834/api/product';

    constructor(private http: Http, private authService: AuthService) { }

    getProducts(): Observable<IProduct[]> {
        debugger;
        let options = null;
        if (this.authService.userProfile != null && this.authService.userProfile != undefined) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.userProfile.token });
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