import { SecurityContext } from '@angular/core';
import {
  BrowserModule,
  DomSanitizer,
}                          from '@angular/platform-browser';
import {
  inject,
  TestBed,
}                          from '@angular/core/testing';

import { SafeHTMLPipe }    from './safe-html.pipe';

describe('[Unit] SafeHTMLPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
    });
  });

  it(`should return sanitized input`, inject([DomSanitizer], (sanitizer: DomSanitizer) => {
    const pipe = new SafeHTMLPipe(sanitizer);
    const safeHTML = pipe.transform(`Cross <script>alert('Hello')</script>`);
    const sanitizedValue = sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeHTML);
    const expectedValue: string = `Cross <script>alert('Hello')</script>`;

    expect(sanitizedValue).toBe(expectedValue);
  }));
});