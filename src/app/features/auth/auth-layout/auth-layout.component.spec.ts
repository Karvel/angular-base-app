import { RouterTestingModule } from '@angular/router/testing';

import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { AuthLayoutComponent } from './auth-layout.component';

describe('[Integration] AuthLayoutComponent', () => {
  let spectator: Spectator<AuthLayoutComponent>;
  const createComponent = createComponentFactory({
    component: AuthLayoutComponent,
    imports: [RouterTestingModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
