import { Component } from '@angular/core';
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
  availableDat: AvailableApartments[] 
  features: Feature[] = []
  
 

  constructor(private apartmentsService: ApartmentsService, private mapService: MapService) {
   this.availableDat = this.apartmentsService.getSmartApartmentDataPlaces()
   console.log('data', this.availableDat);
   
   }

  // getApartmentData() {
  //   apartmentData!: Feature[] = this.homeData.
  // }

  get isLoadingApartments(): boolean {
    return this.apartmentsService.isLoadingApartments;
   }
 

  // get apartments(): Feature[] {
   
  //   return this.apartmentsService.apartments;
  // }

  flyTo(apartment: Feature) {
    this.selectedId = apartment.id
    const [lng, lat] = apartment.properties.bbox;
    this.mapService.flyTo([lng, lat]);
  }

}
