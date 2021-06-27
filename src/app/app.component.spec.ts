import { APP_BASE_HREF } from '@angular/common';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment.test';
import { Logger } from './infrastructure/utils/logger';

!environment.testIntegration
  ? Logger.log('Integration skipped')
  : describe('[Integration] AppComponent', () => {
      beforeEach(
        waitForAsync(() => {
          TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent],
            providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
          }).compileComponents();
        }),
      );
      it(
        'should create the app',
        waitForAsync(() => {
          const fixture = TestBed.createComponent(AppComponent);
          const app = fixture.debugElement.componentInstance;
          expect(app).toBeTruthy();
        }),
      );
      it(
        `should have as title 'angular-base-app'`,
        waitForAsync(() => {
          const fixture = TestBed.createComponent(AppComponent);
          const app = fixture.debugElement.componentInstance;
          expect(app.title).toEqual('angular-base-app');
        }),
      );
    });
