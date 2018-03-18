import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
/*
 * Components
 */
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
/**
 * Modules
 */
import { ServicesModule } from './services/services.module';
import { ShopModule } from './shop/shop.module';
import { ComponentsModule } from "./components/components.module";

import { environment } from './../environments/environment';
/*
 * Routing
 */
import { routing } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routing,
    //App Modules
    ComponentsModule,
    ShopModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
