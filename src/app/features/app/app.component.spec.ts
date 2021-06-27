import { RouterTestingModule } from '@angular/router/testing';

import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { AppComponent } from './app.component';

describe('[Integration] AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [RouterTestingModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });

  it(`should have as title 'angular-base-app'`, () => {
    const expectedValue = 'angular-base-app';
    expect(spectator.component.title).toEqual(expectedValue);
  });
});
