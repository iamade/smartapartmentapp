import { Component, OnInit } from '@angular/core';
import { Feature } from '../../interfaces/places';
import { ApartmentsService, MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent  {

  public selectedId: string = '';

  constructor(private placesService: PlacesService, private mapService: MapService, private apartmentService: ApartmentsService ) { }

  get isLoadingPlaces(): boolean {
    return this.placesService.isLoadingPlaces;
   }

   get places(): Feature[] {
    return this.placesService.places;
  }

  flyTo(place: Feature) {
    this.selectedId = place.id
    const [lng, lat] = place.center;
    this.mapService.flyTo([lng, lat]);
  }
  
 
  
 
}
