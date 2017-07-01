import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from './product.service';

@NgModule({
	imports: [
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				component: ProductListComponent
			},

		])
	],
	declarations: [
		ProductListComponent,

	],
	providers: [
		ProductService,

	]
})
export class ProductModule { }