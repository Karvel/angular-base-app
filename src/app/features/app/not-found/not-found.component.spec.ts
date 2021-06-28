import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { NotFoundComponent } from './not-found.component';

describe('[Integration] NotFoundComponent', () => {
  let spectator: Spectator<NotFoundComponent>;
  const createComponent = createComponentFactory({
    component: NotFoundComponent,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
