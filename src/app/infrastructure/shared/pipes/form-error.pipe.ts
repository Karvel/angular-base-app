import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

/**
 * Returns the first error value in the `AbstractControl` error object.
 * Expects an object with string or boolean key-value pairs.
 */
@Pipe({ name: 'formError' })
export class FormErrorPipe implements PipeTransform {
  public transform(
    value: ValidationErrors | string | null | undefined,
  ): string {
    if (typeof value === 'string') {
      return value;
    }
    if (!value) {
      return '';
    }
    const keys = Object.keys(value);
    if (keys.length === 0) {
      return '';
    }
    const firstKey = keys[0];
    const firstValue = value[firstKey];
    if (typeof firstValue === 'string') {
      return firstValue;
    }
    return '';
  }
}
