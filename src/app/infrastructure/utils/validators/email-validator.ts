import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { CONSTANTS } from '../constants';

export class EmailValidator {
  static validEmail(isRequired?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return isRequired ? { isRequired: 'Email is required.' } : null;
      }
      if (!CONSTANTS.EMAIL_REGEX.test(control.value)) {
        return { invalidEmail: 'Please enter a valid email.' };
      }

      return null;
    };
  }
}
