import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { environment } from '../../../environments/environment.test';
import { HomeComponent } from './home.component';
import { Logger } from '../../infrastructure/core/services/logger';

!environment.testIntegration
  ? Logger.log('Integration skipped')
  : describe('[Integration] HomeComponent', () => {
      let component: HomeComponent;
      let fixture: ComponentFixture<HomeComponent>;

      beforeEach(
        waitForAsync(() => {
          TestBed.configureTestingModule({
            declarations: [HomeComponent],
          }).compileComponents();
        }),
      );

      beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('should create', () => {
        expect(component).toBeTruthy();
      });
    });
