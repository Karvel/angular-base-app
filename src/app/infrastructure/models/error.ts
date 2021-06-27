export class CoreModuleImportError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = CoreModuleImportError.name;
    Object.setPrototypeOf(this, CoreModuleImportError.prototype);
  }
}
