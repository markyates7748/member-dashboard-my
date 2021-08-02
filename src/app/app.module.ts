import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginModule} from '@login/login.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AppIconsModule} from './app-icons.module';
import {RegistrationModule} from '@registration/registration.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegistrationModule,
    FontAwesomeModule,
    AppIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
