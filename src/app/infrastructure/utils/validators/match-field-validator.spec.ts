import { FormControl, FormGroup } from '@angular/forms';

import { MatchFieldValidator } from './match-field-validator';

describe('[Unit] MatchFieldValidator', () => {
  describe('validFieldMatch() default field name', () => {
    const matchFieldValidator = MatchFieldValidator.validFieldMatch(
      'controlName',
      'confirmControlName',
    );
    const form = new FormGroup({
      controlName: new FormControl(''),
      confirmControlName: new FormControl(''),
    });
    const control = form.get('controlName');
    const confirmControl = form.get('confirmControlName');

    it(`should set control error as { confirmFieldRequired: 'Confirm Password is required.' } when value is an empty string`, () => {
      control?.setValue('');
      confirmControl?.setValue('');
      matchFieldValidator(form);
      const expectedValue = {
        confirmFieldRequired: 'Confirm Password is required.',
      };
      expect(confirmControl?.errors).toEqual(expectedValue);
    });

    it(`should set control error as { fieldsMismatched: 'Password fields do not match.' } when values do not match`, () => {
      control?.setValue('password123!');
      confirmControl?.setValue('password123');
      matchFieldValidator(form);
      const expectedValue = {
        fieldsMismatched: 'Password fields do not match.',
      };
      expect(confirmControl?.errors).toEqual(expectedValue);
    });

    it(`should set control error as null when values match`, () => {
      control?.setValue('password123!');
      confirmControl?.setValue('password123!');
      matchFieldValidator(form);
      expect(control?.errors).toEqual(null);
      expect(confirmControl?.errors).toEqual(null);
    });

    it(`should set control error as null when control matches confirm after not matching`, () => {
      control?.setValue('password123!');
      confirmControl?.setValue('password123!');
      matchFieldValidator(form);
      control?.setValue('password123');
      matchFieldValidator(form);
      control?.setValue('password123!');
      matchFieldValidator(form);
      expect(control?.errors).toEqual(null);
      expect(confirmControl?.errors).toEqual(null);
    });

    it(`should set control error as null when confirm matches control after not matching`, () => {
      control?.setValue('password123!');
      confirmControl?.setValue('password123!');
      matchFieldValidator(form);
      control?.setValue('password123');
      matchFieldValidator(form);
      confirmControl?.setValue('password123');
      matchFieldValidator(form);
      expect(control?.errors).toEqual(null);
      expect(confirmControl?.errors).toEqual(null);
    });
  });

  describe(`validFieldMatch('Email') parameter field name`, () => {
    const matchFieldValidator = MatchFieldValidator.validFieldMatch(
      'controlName',
      'confirmControlName',
      'Email',
    );
    const form = new FormGroup({
      controlName: new FormControl(''),
      confirmControlName: new FormControl(''),
    });
    const control = form.get('controlName');
    const confirmControl = form.get('confirmControlName');

    it(`should set control error as { confirmFieldRequired: 'Confirm Email is required.' } when value is an empty string`, () => {
      control?.setValue('');
      confirmControl?.setValue('');
      matchFieldValidator(form);
      const expectedValue = {
        confirmFieldRequired: 'Confirm Email is required.',
      };
      expect(confirmControl?.errors).toEqual(expectedValue);
    });

    it(`should set control error as { fieldsMismatched: 'Email fields do not match.' } when values do not match`, () => {
      control?.setValue('password123!');
      confirmControl?.setValue('test@test.co');
      matchFieldValidator(form);
      const expectedValue = {
        fieldsMismatched: 'Email fields do not match.',
      };
      expect(confirmControl?.errors).toEqual(expectedValue);
    });
  });
});
