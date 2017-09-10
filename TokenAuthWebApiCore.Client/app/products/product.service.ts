import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IProduct } from './product.model';
import { UserProfile } from '../user/user.profile'
import { CommonService } from '../shared/common.service'

@Injectable()
export class ProductService {
    constructor(private http: Http,
        private authProfile: UserProfile,
        private commonService: CommonService) { }

    getProducts(): Observable<IProduct[]> {
        let url = this.commonService.getBaseUrl() + '/product';

        let options = null;
        let profile = this.authProfile.getProfile();

        if (profile != null && profile != undefined) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + profile.token });
            options = new RequestOptions({ headers: headers });
        }
        let data: Observable<IProduct[]> = this.http.get(url, options)
            .map(res => <IProduct[]>res.json())
            .do(data => console.log('getProducts: ' + JSON.stringify(data)))
            .catch(this.commonService.handleError);

        return data;
    }
}