import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { UserModule } from './user/user.module';

import { CommonService } from './shared/common.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,

        UserModule,

        AppRoutingModule
    ],
    declarations: [
        AppComponent,

        PageNotFoundComponent
    ],
    providers: [
        CommonService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }