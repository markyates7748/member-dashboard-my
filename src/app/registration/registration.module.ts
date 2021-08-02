import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationComponent} from './registration.component';
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import {AppRoutingModule} from '@app/app-routing.module';
import {LogoModule} from '@app/logo/logo.module';


@NgModule({
  declarations: [
    RegistrationComponent,
    RegistrationFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    LogoModule
  ]
})
export class RegistrationModule { }
