import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import {TourPackagesComponent} from './tour-packages/tour-packages.component';
import {DestinationsComponent} from './destinations/destinations.component';

const routes: Routes = [
  {path :'home',component:HomeComponent},
  {path : 'tourPackages',component:TourPackagesComponent},
  {path :'destinations',component:DestinationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
