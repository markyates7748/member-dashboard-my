import {ErrorHandler} from '@angular/core';

export class AppRoutingErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error('Route does not exist.');
    console.error(error);
  }
}
