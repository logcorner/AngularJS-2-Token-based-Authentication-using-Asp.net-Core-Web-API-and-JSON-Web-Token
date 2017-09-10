import { Component, OnInit } from '@angular/core';

import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    templateUrl: './app/products/product-list.component.html',
    styleUrls: ['./app/products/product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    products: IProduct[];

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.productService.getProducts()
            .subscribe(products => this.products = products,
            error => console.log(error));
    }
}