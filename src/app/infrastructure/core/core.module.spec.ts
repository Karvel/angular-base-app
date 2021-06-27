import { TestBed } from '@angular/core/testing';
import { CoreModule } from './core.module';

describe('[Unit] CoreModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
    });
  });

  it('should initialize', () => {
    const module = TestBed.inject(CoreModule);
    expect(module).toBeTruthy();
  });
});
