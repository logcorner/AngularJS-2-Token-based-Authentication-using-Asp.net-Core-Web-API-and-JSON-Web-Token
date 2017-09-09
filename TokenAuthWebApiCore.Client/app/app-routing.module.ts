import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './common/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'products',
                canActivate: [AuthGuard],
                data: { preload: true },
                loadChildren: 'app/products/product.module#ProductModule'
            },
            { path: '', redirectTo: 'products', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
        ])
    ],

    exports: [RouterModule]
})
export class AppRoutingModule { }