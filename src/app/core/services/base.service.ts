import {Injectable} from '@angular/core';
import {environment} from '@environments/environment';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable()
export class BaseService {

  handleError(error: any): Observable<never> {
    if (error instanceof HttpErrorResponse) {
        switch (error.status) {
          case 400:
            return throwError(error.error);
        }
    }

    return throwError(error);
  }


  getApi(endpoint: string) {
    return `${environment.application.api}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
  }
}
