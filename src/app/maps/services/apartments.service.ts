import { Injectable } from '@angular/core';
import { AvailableApartments, Feature } from '../interfaces/available-apartments';
import { ApartmentsMarkerService } from './apartments-marker.service';

import dbjson from 'src/assets/json/db.json';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsService {
  public useLocation?: [number, number];
  homeData: AvailableApartments[] = dbjson
  public isLoadingApartments: boolean = false;
 

  constructor( private apartmentsMarkerService: ApartmentsMarkerService) { 
    // this.getUserLocation()
    console.log(this.homeData)
 
  }

  getSmartApartmentDataPlaces(){
    
  //  this.apartmentsMarkerService.createMarkersFromApartments(this.apartments, this.useLocation!)
    return this.homeData.slice()
  

    
  }
}
