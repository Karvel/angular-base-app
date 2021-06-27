import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PipeModule } from './pipes/pipe.module';

import { components } from './components';

/**
 * Connects modules, pipes, directives, components, and modules that do not need to be singleton instances.
 */
@NgModule({
  declarations: [components],
  imports: [CommonModule, PipeModule.forRoot(), ReactiveFormsModule],
  exports: [CommonModule, ReactiveFormsModule, components],
})
export class SharedModule {
  static forRoot(): { ngModule: typeof SharedModule } {
    return {
      ngModule: SharedModule,
    };
  }
}
