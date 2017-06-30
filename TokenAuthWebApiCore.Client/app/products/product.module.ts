import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
;
import { ProductService } from './product.service';

@NgModule({
	imports: [

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