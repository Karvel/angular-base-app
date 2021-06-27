import { SafeHTMLPipe } from './safe-html.pipe';
import { SpectatorPipe, createPipeFactory } from '@ngneat/spectator';

describe('[Unit] SafeHTMLPipe', () => {
  let spectator: SpectatorPipe<SafeHTMLPipe>;
  const createPipe = createPipeFactory(SafeHTMLPipe);

  it('should return sanitized input', () => {
    const expectedValue: string = `Cross`;
    spectator = createPipe(
      `{{ Cross <script>alert('Hello')</script> | safeHTML }}`,
    );

    expect(spectator.element).toHaveText(expectedValue);
  });
});
