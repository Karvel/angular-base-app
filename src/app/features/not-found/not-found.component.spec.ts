import {
  async,
  ComponentFixture,
  TestBed,
}                            from '@angular/core/testing';

import { environment }       from '../../../environments/environment.test';
import { Logger }            from 'src/app/core/services/logger';
import { NotFoundComponent } from './not-found.component';

!environment.testIntegration
? Logger.log('Integration skipped')
: describe('[Integration] NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
