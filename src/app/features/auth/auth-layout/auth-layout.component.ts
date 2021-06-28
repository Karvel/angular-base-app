import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Wrapper component for all `AuthModule` routes.
 */
@Component({
  templateUrl: './auth-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {}
