import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './imports/material.module';

import { components } from './components';
import { pipes } from './pipes';

/**
 * Connects modules, pipes, directives, components, and modules that do not need to be singleton instances.
 */
@NgModule({
  declarations: [components, pipes],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    components,
    pipes,
  ],
})
export class SharedModule {
  static forRoot(): { ngModule: typeof SharedModule } {
    return {
      ngModule: SharedModule,
    };
  }
}
