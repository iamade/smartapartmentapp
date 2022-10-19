import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MyLocationButtonComponent } from './components/my-location-button/my-location-button.component';
import { SmartApartmentDataLogoComponent } from './components/smart-apartment-data-logo/smart-apartment-data-logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { AvailableApartmentResultsComponent } from './components/available-apartment-results/available-apartment-results.component';



@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent,
    MyLocationButtonComponent,
    SmartApartmentDataLogoComponent,
    SearchBarComponent,
    SearchResultsComponent,
    AvailableApartmentResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapScreenComponent
  ]
})
export class MapsModule { }
