import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppSecondComponent } from './app-second/app-second.component';
import { AppFirstComponent } from './app-first/app-first.component';

@NgModule({
  declarations: [
    AppComponent,
    AppSecondComponent,
    AppFirstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
