import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ProductListComponent, ProductService } from './index';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: ProductListComponent
            }
        ])
    ],
    declarations: [
        ProductListComponent
    ],
    providers: [
        ProductService
    ]
})
export class ProductModule { }