import { TestBed } from '@angular/core/testing';
import { AuthModule } from './auth.module';

describe('[Unit] AuthModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthModule],
    });
  });

  it('should initialize', () => {
    const module = TestBed.inject(AuthModule);
    expect(module).toBeTruthy();
  });
});
