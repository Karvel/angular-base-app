import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { LoginComponent } from './login.component';

describe('[Integration] LoginComponent', () => {
  let spectator: Spectator<LoginComponent>;
  const createComponent = createComponentFactory({
    component: LoginComponent,
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
