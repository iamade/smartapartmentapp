import { Injectable } from '@angular/core';
import { AvailableApartments, Feature } from '../interfaces/available-apartments';
import { ApartmentsMarkerService } from './apartments-marker.service';

import dbjson from 'src/assets/json/db.json';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsService {
  public useLocation?: [number, number];
  homeData: AvailableApartments[] = dbjson
  public isLoadingApartments: boolean = false;
  public apartments: Feature[] = []
  availableDat: AvailableApartments[] = []

  apartmentChanged = new Subject<Feature[]>();

  constructor( private apartmentsMarkerService: ApartmentsMarkerService) { 
  }

  getSmartApartmentDataPlaces(){
  
    this.availableDat = this.homeData.slice()
    this.apartments = this.availableDat[0].features
    this.apartmentsMarkerService.createMarkersFromApartments(this.apartments, this.useLocation!)
   
  }

addApartmentData(apartments: Feature) {
  this.apartments.push(apartments)
  this.apartmentChanged.next(this.apartments)
  this.apartmentsMarkerService.createMarkersFromApartments(this.apartments, this.useLocation!)
  
}

  removeApartmentData(apartmentId: number) { 
     this.apartments.splice(this.apartments.findIndex(r => r.properties.id === apartmentId), 1)   
      this.apartmentChanged.next(this.apartments)
      this.apartmentsMarkerService.createMarkersFromApartments(this.apartments, this.useLocation!)
      
  }



}
