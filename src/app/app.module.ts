import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { MapsModule } from './maps/maps.module';
import { MapPageComponent } from './pages/map-page/map-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MapPageComponent
  ],
  imports: [
    BrowserModule,
    MapsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
