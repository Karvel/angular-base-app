import { CoreModule } from '../core.module';
import { TestBed } from '@angular/core/testing';

import { CoreModuleImportError } from '../../models/error';
import { ModuleImportGuard } from './module-import.guard';

describe('[Unit] ModuleImportGuard', () => {
  let coreModule: CoreModule;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
    });
    coreModule = TestBed.inject(CoreModule);
  });
  describe('throwIfAlreadyLoaded()', () => {
    it(`does nothing when not passed a CoreModule`, () => {
      const noModule: CoreModule = null;
      const moduleName = '';
      expect(
        ModuleImportGuard.throwIfAlreadyLoaded(noModule, moduleName),
      ).toBeUndefined();
    });

    it(`throws an error when passed a second CoreModule`, () => {
      const moduleName = 'TestCoreModule';
      expect(() => {
        ModuleImportGuard.throwIfAlreadyLoaded(coreModule, moduleName);
      }).toThrow(
        new CoreModuleImportError(
          `${moduleName} has already been loaded. Import Core modules in the AppModule only.`,
        ),
      );
    });
  });
});
