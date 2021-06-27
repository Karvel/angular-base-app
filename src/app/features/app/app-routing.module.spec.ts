import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '../auth/auth.module';
import { routes } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, RouterTestingModule.withRoutes(routes)],
    });
    router = TestBed.inject(Router);
  });

  it('initializes', () => {
    const module = TestBed.inject(AppRoutingModule);
    expect(module).toBeTruthy();
  });

  it('loads the AuthModule children routes', async () => {
    const route = router.config[1];
    if (typeof route.loadChildren === 'function') {
      expect(await route.loadChildren()).toEqual(AuthModule);
    }
  });
});
