import {ErrorHandler} from '@angular/core';

export class AppRoutingErrorHandler implements ErrorHandler {
  handleError(): void {
    console.error('Route does not exist.');
  }
}
