import {ErrorHandler, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '@dashboard/dashboard.component';
import {LoginComponent} from '@login/login.component';
import {RegistrationComponent} from '@registration/registration.component';
import {AppRoutingErrorHandler} from './app-routing.error-handler';
import {AppRoutingTitles} from './app-routing.titles';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
    data: {
      title: AppRoutingTitles.DASHBOARD
    }
  },
  {
    path: 'dashboard',
    redirectTo: ''
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: AppRoutingTitles.LOGIN
    }
  },
  {
    path: 'get-started',
    component: RegistrationComponent,
    data: {
      title: AppRoutingTitles.GET_STARTED
    }
  },
  {
    path: 'register',
    redirectTo: 'get-started'
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
