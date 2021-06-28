import { Pipe, PipeTransform } from '@angular/core';

/**
 * Returns the first error value in the `AbstractControl` error object.
 * Expects an object with string or boolean key-value pairs.
 */
@Pipe({ name: 'formError' })
export class FormErrorPipe implements PipeTransform {
  public transform(value: string | object | null): string {
    if (!value) {
      return '';
    }
    if (typeof value !== 'object') {
      return value;
    }
    const key: string = value[Object.keys(value)[0]];

    return key;
  }
}
