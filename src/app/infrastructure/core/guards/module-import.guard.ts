import { CoreModule } from '../core.module';
import { CoreModuleImportError } from '../../models/error';

/**
 * Ensures that `CoreModule` is imported only once.
 */
export class ModuleImportGuard {
  static throwIfAlreadyLoaded(
    parentModule: CoreModule | null,
    moduleName: string,
  ): void {
    if (parentModule) {
      throw new CoreModuleImportError(
        `${moduleName} has already been loaded. Import Core modules in the AppModule only.`,
      );
    }
  }
}
