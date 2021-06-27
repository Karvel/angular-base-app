import { SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { SpectatorPipe, createPipeFactory } from '@ngneat/spectator';

import { SafeHTMLPipe } from './safe-html.pipe';
describe('[Unit] SafeHTMLPipe', () => {
  let spectator: SpectatorPipe<SafeHTMLPipe>;
  const createPipe = createPipeFactory(SafeHTMLPipe);

  it(`should return sanitized input`, () => {
    const sanitizer = spectator?.inject(DomSanitizer);
    const pipe = new SafeHTMLPipe(sanitizer);
    const safeHTML = pipe.transform(`Cross <script>alert('Hello')</script>`);
    const sanitizedValue = sanitizer.sanitize(
      SecurityContext.RESOURCE_URL,
      safeHTML,
    );
    const expectedValue: string = `Cross <script>alert('Hello')</script>`;

    expect(sanitizedValue).toBe(expectedValue);
  }),
    it('should return sanitized input spectator', () => {
      const expectedValue: string = `Cross`;
      spectator = createPipe(
        `{{ Cross <script>alert('Hello')</script> | safeHTML }}`,
      );

      expect(spectator.element).toHaveText(expectedValue);
    });
});
