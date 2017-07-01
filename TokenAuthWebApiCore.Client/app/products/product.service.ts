import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IProduct } from './product';

@Injectable()
export class ProductService {
	private baseUrl = 'http://localhost:58834/api/product';

	constructor(private http: Http) { }

	getProducts(): Observable<IProduct[]> {
		debugger;
		let data: Observable<IProduct[]> = this.http.get(this.baseUrl)
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