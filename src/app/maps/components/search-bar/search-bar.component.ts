import { Component, OnInit } from '@angular/core';
import { ApartmentsService, MapService, PlacesService } from '../../services';
import { ApartmentsMarkerService } from '../../services/apartments-marker.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
 displaySearchResult: boolean = false
 displayAvailableApartment: boolean =false
  private debounceTimer?: NodeJS.Timeout
  constructor(private placeService: PlacesService, private apartmentService: ApartmentsService, private mapService: MapService,
              private apartmentsMarkerService: ApartmentsMarkerService) { }

  ngOnInit(): void {
  }

  onQueryChanged(query: string = ''){
    this.displaySearchResult = true
    this.displayAvailableApartment = false
    if( this.debounceTimer ) clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      
      this.placeService.getPlacesByQuery(query)
      this.apartmentsMarkerService.removeMarkersFromApartmenets()
      
      
    }, 350)
  }

  getAvailableApartments() {
    this.displayAvailableApartment = true
    this.displaySearchResult = false
   this.apartmentService.getSmartApartmentDataPlaces()
  
  }

}
