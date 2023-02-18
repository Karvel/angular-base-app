import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class MatchFieldValidator {
  static validFieldMatch(
    controlName: string,
    confirmControlName: string,
    fieldName: string = 'Password',
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const confirmControl: AbstractControl | null =
        control.get(confirmControlName);
      const controlValue: unknown | null = control.get(controlName)?.value;
      const confirmValue: unknown | null =
        control.get(confirmControlName)?.value;

      if (!confirmValue) {
        confirmControl?.setErrors({
          confirmFieldRequired: `Confirm ${fieldName} is required.`,
        });
      }

      if (controlValue !== confirmValue) {
        confirmControl?.setErrors({
          fieldsMismatched: `${fieldName} fields do not match.`,
        });
      }

      if (controlValue && controlValue === confirmValue) {
        confirmControl?.setErrors(null);
      }

      return null;
    };
  }
}
