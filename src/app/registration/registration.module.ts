import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationComponent} from './registration.component';
import { LookupFormComponent } from './lookup-form/lookup-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';



@NgModule({
  declarations: [
    RegistrationComponent,
    LookupFormComponent,
    RegistrationFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegistrationModule { }
