import { TestBed } from '@angular/core/testing';
import { AuthModule } from './auth.module';

describe('AuthModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(AuthModule);
    expect(module).toBeTruthy();
  });
});
