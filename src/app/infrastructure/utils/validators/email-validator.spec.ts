import { FormControl } from '@angular/forms';

import { EmailValidator } from './email-validator';

describe('[Unit] EmailValidator', () => {
  describe('validEmail() Required', () => {
    const emailValidator = EmailValidator.validEmail(true);
    const emailControl = new FormControl('');

    it(`should return null if value matches RegEx`, () => {
      emailControl.setValue('test@test.com');
      expect(emailValidator(emailControl)).toEqual(null);
    });

    it(`should return { isRequired: 'Email is required.' } when value is an empty string`, () => {
      emailControl.setValue('');
      const expectedValue = { isRequired: 'Email is required.' };
      expect(emailValidator(emailControl)).toEqual(expectedValue);
    });

    it(`should return { invalidEmail: 'Please enter a valid email.' } when value does not match RegEx`, () => {
      emailControl.setValue('test@');
      const expectedValue = { invalidEmail: 'Please enter a valid email.' };
      expect(emailValidator(emailControl)).toEqual(expectedValue);
    });

    it(`should return { invalidEmail: 'Please enter a valid email.' } when value is too short`, () => {
      emailControl.setValue('t@t');
      const expectedValue = { invalidEmail: 'Please enter a valid email.' };
      expect(emailValidator(emailControl)).toEqual(expectedValue);
    });

    it(`should return { invalidEmail: 'Please enter a valid email.' } when domain is too short`, () => {
      emailControl.setValue('test@t.com');
      const expectedValue = { invalidEmail: 'Please enter a valid email.' };
      expect(emailValidator(emailControl)).toEqual(expectedValue);
    });
  });

  describe('validEmail() Not Required', () => {
    const emailValidator = EmailValidator.validEmail(false);
    const emailControl = new FormControl('');

    it(`should return null when value is an empty string`, () => {
      emailControl.setValue('');
      expect(emailValidator(emailControl)).toEqual(null);
    });
  });
});
