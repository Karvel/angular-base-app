import { FormControl } from '@angular/forms';

import { RequiredValidation } from './required-validation';

describe('[Unit] RequiredValidation required()', () => {
  const isRequiredValidator = RequiredValidation.required();
  const defaultPlaceholder: string = 'This field';
  const testControl = new FormControl('');

  it(`should return null if value is truthy`, () => {
    testControl.setValue('test');
    expect(isRequiredValidator(testControl)).toEqual(null);
  });

  it(`should return { 'isRequired': 'This field is required.' } when value is an empty string`, () => {
    testControl.setValue('');
    const expectedValue = {
      isRequired: `${defaultPlaceholder} is required.`,
    };
    expect(isRequiredValidator(testControl)).toEqual(expectedValue);
  });

  it(`should return null when value is 0`, () => {
    testControl.setValue('0');
    expect(isRequiredValidator(testControl)).toEqual(null);
  });
});

describe(`[Unit] RequiredValidation required('Custom Placeholder')`, () => {
  const customPlaceholder: string = 'Custom Placeholder';
  const isRequiredValidator = RequiredValidation.required(customPlaceholder);
  const testControl = new FormControl('');

  it(`should return { 'isRequired': 'Custom Placeholder is required.' } when value is an empty string`, () => {
    testControl.setValue('');
    const expectedValue = { isRequired: `${customPlaceholder} is required.` };
    expect(isRequiredValidator(testControl)).toEqual(expectedValue);
  });
});
