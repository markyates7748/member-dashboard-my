import {NgModule} from '@angular/core';
import {RegistrationComponent} from './registration.component';
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import {AppRoutingModule} from '@app/app-routing.module';
import {LogoModule} from '@app/logo/logo.module';
import {BrowserModule} from '@angular/platform-browser';
import {AppIconsModule} from '@app/app-icons.module';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {AppMaskModule} from '@app/app-mask.module';


@NgModule({
  declarations: [
    RegistrationComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LogoModule,
    AppIconsModule,
    NgbTooltipModule,
    AppMaskModule
  ]
})
export class RegistrationModule { }
