import { Component, OnInit } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-my-location-button',
  templateUrl: './my-location-button.component.html',
  styleUrls: ['./my-location-button.component.css']
})
export class MyLocationButtonComponent {

  constructor(private placesService: PlacesService, private mapService: MapService) { }

  goToMyLocation(){
    console.log('btnmylo',this.placesService.useLocation!);

    if( !this.placesService.isUserLocationReady) throw Error('no user location')
    if( !this.mapService.isMapReady) throw Error('no map available')

    this.mapService.flyTo(this.placesService.useLocation!)
  }

}
