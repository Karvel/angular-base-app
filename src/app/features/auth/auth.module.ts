import { NgModule } from '@angular/core';

import { SharedModule } from '../../infrastructure/shared/shared.module';

import {
  AuthRoutingModule,
  components as authComponents,
} from './auth-routing.module';

/**
 * Feature module for all auth-related components and dependencies.
 */
@NgModule({
  declarations: [authComponents],
  imports: [SharedModule, AuthRoutingModule],
})
export class AuthModule {}
