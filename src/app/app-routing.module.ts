import {ErrorHandler, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '@dashboard/dashboard.component';
import {LoginComponent} from '@login/login.component';
import {RegistrationComponent} from '@registration/registration.component';
import {AppRoutingErrorHandler} from './app-routing.error-handler';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    redirectTo: ''
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AppRoutingErrorHandler
    }
  ]
})
export class AppRoutingModule { }
