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
import { ComponentsModule } from "./components/components.module";

import { environment } from './../environments/environment';

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
    //App Modules
    ComponentsModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
