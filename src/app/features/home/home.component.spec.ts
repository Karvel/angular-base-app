import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { HomeComponent } from './home.component';

describe('[Integration] HomeComponent', () => {
  let spectator: Spectator<HomeComponent>;
  const createComponent = createComponentFactory({
    component: HomeComponent,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
