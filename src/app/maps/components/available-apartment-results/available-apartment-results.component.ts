import { Component } from '@angular/core';
import { throws } from 'assert';
import { Subject } from 'rxjs';
import { AvailableApartments, Feature } from '../../interfaces/available-apartments';
import { MapService } from '../../services';

import { ApartmentsService } from '../../services/apartments.service';


@Component({
  selector: 'app-available-apartment-results',
  templateUrl: './available-apartment-results.component.html',
  styleUrls: ['./available-apartment-results.component.css']

})
export class AvailableApartmentResultsComponent {
  public selectedId: string = '';
  availableDat: AvailableApartments[] = []
  features: Feature[] = []
 
  removeApartmentId!: number

  constructor(private apartmentsService: ApartmentsService, private mapService: MapService,  ) {
   
   }

 
  get isLoadingApartments(): boolean {
    return this.apartmentsService.isLoadingApartments;
   }
 
   get apartments(): Feature[] {
  
    return this.apartmentsService.apartments;
  }


  flyTo(apartment: Feature) {
    this.selectedId = apartment.id
    const [lng, lat] = apartment.properties.bbox;
    this.mapService.flyTo([lng, lat]);
  }

  removeApartmentMarker(apartmentId: number){
  this.apartmentsService.removeApartmentData(apartmentId)
  
   
  }

}
