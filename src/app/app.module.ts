import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TourPackagesComponent } from './tour-packages/tour-packages.component';
import { DestinationsComponent } from './destinations/destinations.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TourPackagesComponent,
    DestinationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
