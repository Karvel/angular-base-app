import { TestBed } from '@angular/core/testing';
import { SharedModule } from './shared.module';

describe('[Unit] SharedModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    });
  });

  it('should initialize', () => {
    const module = TestBed.inject(SharedModule);
    expect(module).toBeTruthy();
  });
});
