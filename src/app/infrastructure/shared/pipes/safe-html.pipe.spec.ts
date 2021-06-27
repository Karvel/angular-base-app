import { SecurityContext } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { SpectatorPipe, createPipeFactory, SpyObject } from '@ngneat/spectator';

import { SafeHTMLPipe } from './safe-html.pipe';
describe('[Unit] SafeHTMLPipe', () => {
  const createPipe = createPipeFactory(SafeHTMLPipe);
  let spectator: SpectatorPipe<SafeHTMLPipe>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
    });
  });

  it(`should return sanitized input`, inject(
    [DomSanitizer],
    (sanitizer: DomSanitizer) => {
      const pipe = new SafeHTMLPipe(sanitizer);
      const safeHTML = pipe.transform(`Cross <script>alert('Hello')</script>`);
      const sanitizedValue = sanitizer.sanitize(
        SecurityContext.RESOURCE_URL,
        safeHTML,
      );
      const expectedValue: string = `Cross <script>alert('Hello')</script>`;

      expect(sanitizedValue).toBe(expectedValue);
    },
  ));

  it('should return sanitized input spectator', () => {
    const expectedValue: string = `Cross`;
    spectator = createPipe(
      `{{ Cross <script>alert('Hello')</script> | safeHTML }}`,
    );

    expect(spectator.element).toHaveText(expectedValue);
  });
});
