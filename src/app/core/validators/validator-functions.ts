import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {ValidationExpressions} from '@core/validators/validation-expressions';

export const ValidatorFunctions = {
  usernameValidator: (): ValidatorFn => {
    const {username} = ValidationExpressions;
    return (control: AbstractControl): ValidationErrors | null => {
      const invalidUsername = !username.test(control.value);
      return invalidUsername ? {username: {value: control.value}} : null;
    };
  },
  passwordValidator: (): ValidatorFn =>  {
    const {password} = ValidationExpressions;
    return (control: AbstractControl): ValidationErrors | null => {
      const invalidPassword = !password.test(control.value);
      return invalidPassword ? {password: {value: control.value}} : null;
    };
  },
  membershipIdValidator: (): ValidatorFn =>  {
    const {membershipId} = ValidationExpressions;
    return (control: AbstractControl): ValidationErrors | null => {
      const invalidMembershipId = !membershipId.test(control.value);
      return invalidMembershipId ? {membershipId: {value: control.value}} : null;
    };
  },
  confirmPassword: (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
      return password !== confirmPassword ? {confirmPassword: {value: control.value, password: password}} : null;
    };
  }
};
