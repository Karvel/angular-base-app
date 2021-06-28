import { TestBed } from '@angular/core/testing';

import { AuthRoutingModule } from './auth-routing.module';

describe('[Unit] AuthRoutingModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthRoutingModule],
    });
  });

  it('should initialize', () => {
    const module = TestBed.inject(AuthRoutingModule);
    expect(module).toBeTruthy();
  });
});
