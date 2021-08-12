import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-form-control-validation-indicator',
  template: `
    <app-form-control-indicator [icon]="!validateControl?.touched ? 'info-circle' : validateControl?.errors ? 'exclamation-circle' : 'check-circle'"
                                [message]="validateControl?.valid ? defaultMessage : errorMessage"
                                [iconClass]="!validateControl?.touched ? 'text-primary' : validateControl?.errors ? 'text-danger' : 'text-success'"></app-form-control-indicator>
  `
})
export class FormControlValidationIndicatorComponent {
  @Input()
  defaultMessage!: string;
  @Input()
  errorMessage!: string;
  @Input()
  validateControl!: AbstractControl | null;


}
