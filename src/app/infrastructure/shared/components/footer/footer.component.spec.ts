import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { FooterComponent } from './footer.component';

describe('[Integration] FooterComponent', () => {
  let spectator: Spectator<FooterComponent>;
  const createComponent = createComponentFactory({
    component: FooterComponent,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
