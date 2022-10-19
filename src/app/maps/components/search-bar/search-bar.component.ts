import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout
  constructor(private placeService: PlacesService) { }

  ngOnInit(): void {
  }

  onQueryChanged(query: string = ''){
    if( this.debounceTimer ) clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      console.log('send this query: ', query);
      this.placeService.getPlacesByQuery(query)
      // this.placesService.getPlacesByQuery(query)
      
    }, 350)
  }

  getAvailableApartments() {
    
  }

}
