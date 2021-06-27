import { TestBed } from '@angular/core/testing';

import { AuthRoutingModule } from './auth-routing.module';

describe('AuthRoutingModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthRoutingModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(AuthRoutingModule);
    expect(module).toBeTruthy();
  });
});
