import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './common/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            {
                path: 'products',
                canActivate: [AuthGuard],
                data: { preload: true },
                loadChildren: 'app/products/product.module#ProductModule'
            },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
        ], { useHash: true })
    ],

    exports: [RouterModule]
})
export class AppRoutingModule { }