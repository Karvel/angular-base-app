import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  /**
   * Build a request payload from the matching `FormGroup` values.
   * Does not handle conditional logic.
   */
  public buildRequestPayload<T extends Object>(
    form: FormGroup,
    requestPayload: T,
  ): T {
    for (const property in requestPayload) {
      if (
        requestPayload.hasOwnProperty(property) &&
        form.controls[property]?.value
      ) {
        requestPayload[property] = form.controls[property].value;
      }
    }

    return requestPayload;
  }
}
