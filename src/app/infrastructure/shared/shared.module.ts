import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PipeModule } from './pipes/pipe.module';

/**
 * Connects modules, pipes, directives, components, and modules that do not need to be singleton instances.
 */
@NgModule({
  imports: [CommonModule, PipeModule.forRoot(), ReactiveFormsModule],
  exports: [CommonModule, ReactiveFormsModule],
})
export class SharedModule {
  static forRoot(): { ngModule: typeof SharedModule } {
    return {
      ngModule: SharedModule,
    };
  }
}
