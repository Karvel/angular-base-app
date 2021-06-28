import { FormControl, FormGroup } from '@angular/forms';

import { FormService } from './form.service';
import { LoginRequest } from '../../models/auth';

describe('[Unit] FormService', () => {
  describe('formService', () => {
    const formService = new FormService();
    it('should be created', () => {
      expect(formService).toBeTruthy();
    });
  });

  describe('buildRequestPayload()', () => {
    const formService = new FormService();
    it(`should return a populated request object with values from matching form values`, () => {
      const requestPayload = new LoginRequest({ email: 'test@test.com' });
      const expectedValue = new LoginRequest({ email: 'test@test.com' });
      const form = new FormGroup({});
      form.addControl('email', new FormControl('test@test.com'));
      form.addControl('password', new FormControl('password'));
      expectedValue.email = 'test@test.com';
      expectedValue.password = 'password';
      expect(formService.buildRequestPayload(form, requestPayload)).toEqual(
        expectedValue,
      );
    });

    it(`should return a partially populated object with values from partially matching form values`, () => {
      const payload = new LoginRequest();
      const expectedValue = new LoginRequest();
      const form = new FormGroup({});
      form.addControl('email', new FormControl('test@test.com'));
      form.addControl('test', new FormControl('test'));
      expectedValue.email = 'test@test.com';
      expectedValue.password = '';
      expect(formService.buildRequestPayload(form, payload)).toEqual(
        expectedValue,
      );
    });

    it(`should return an initialized request object when no matching form values are found`, () => {
      const payload = new LoginRequest();
      const expectedValue = new LoginRequest();
      const form = new FormGroup({});
      form.addControl('test', new FormControl('test'));
      expectedValue.email = '';
      expectedValue.password = '';
      expect(formService.buildRequestPayload(form, payload)).toEqual(
        expectedValue,
      );
    });
  });
});
