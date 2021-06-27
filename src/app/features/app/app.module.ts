import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  AppRoutingModule,
  routedComponents as mainAppRoutedComponents,
} from './app-routing.module';
import { CoreModule } from '../../infrastructure/core/core.module';
import { SharedModule } from '../../infrastructure/shared/shared.module';

@NgModule({
  declarations: [AppComponent, mainAppRoutedComponents],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
