import { Injectable } from '@angular/core';
import { AvailableApartments, Feature } from '../interfaces/available-apartments';

import { Marker, Map, Popup, LngLatBounds } from 'mapbox-gl';
import dbjson from 'src/assets/json/db.json';
import { Subject } from 'rxjs';
import { MapService } from './map.service';


@Injectable({
  providedIn: 'root'
})
export class ApartmentsService {
  public useLocation?: [number, number];
  homeData: AvailableApartments[] = dbjson
  public isLoadingApartments: boolean = false;
  public apartments: Feature[] = []
  availableDat: AvailableApartments[] = []
  private map?: Map;
  private removedMarkers: Marker[] = [];

  public newMarkers: Marker[] = [];
  private markers: Marker [] = []

  apartmentChanged = new Subject<Feature[]>();

  constructor(private mapService: MapService) { 
  }

  getSmartApartmentDataPlaces(){
    this.isLoadingApartments = true
    this.availableDat = this.homeData.slice()
    this.apartments = this.availableDat[0].features
    
    this.createMarkersFromApartments(this.apartments, this.useLocation!)
    this.isLoadingApartments = false
  }



  removeApartmentData(apartmentId: number) { 
     this.apartments.splice(this.apartments.findIndex(r => r.properties.id === apartmentId), 1)   
      this.apartmentChanged.next(this.apartments)
      this.createMarkersFromApartments(this.apartments, this.useLocation!)
      
  }



  setMap() {
    this.map = this.mapService.map;

  }

  

  removeMarkersFromApartmenets() {
    if (this.removedMarkers !== null) {
      for (var i = this.removedMarkers.length - 1; i >= 0; i--) {
        this.removedMarkers[i].remove();
      }
    }
  }

  createMarkersFromApartments(apartments: Feature[], userLocation:[number, number]) {
    this.setMap()
    
    if(!this.map) throw Error ('Map is not Inclined');

    this.markers.forEach(marker => marker.remove());
  
    for(const apartment of apartments){
      const [lng, lat] = apartment.properties.bbox;
      const popup = new Popup()
        .setHTML(`
          <h6>${apartment.properties.NAME}</h6>)
          <span>${apartment.properties.name}</span>
          `);

      const newMarker = new Marker()
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(this.map);

      this.newMarkers.push(newMarker);
    }
    this.markers = this.newMarkers;
    this.removedMarkers = this.newMarkers;

    if(apartments.length === 0) return;

    //map limits
    const bounds = new LngLatBounds()
      this.newMarkers.forEach( marker => bounds.extend( marker.getLngLat()));
      bounds.extend( userLocation );    

    this.map.fitBounds(bounds,{
      padding: 200
    })

  }



}
