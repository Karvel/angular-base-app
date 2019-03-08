import {
  async,
  ComponentFixture,
  TestBed,
}                        from '@angular/core/testing';

import { environment }   from '../../../environments/environment.test';
import { HomeComponent } from './home.component';

!environment.testIntegration
? console.log('Integration skipped')
: describe('[Integration] HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
