import { Injectable } from '@angular/core';
import { Marker, Map, Popup, LngLatBounds } from 'mapbox-gl';
import { Feature } from '../interfaces/available-apartments';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsMarkerService {
  private markers: Marker [] = []
  private map?: Map;

  private removedMarkers: Marker[] = [];

  public newMarkers: Marker[] = [];

  constructor(private mapService: MapService) { }

 

  setMap() {
    this.map = this.mapService.map;

  }

  removeApartmentMarker(){
    
  }

  // removeOneMarker(apartments: Feature[], ){
  //   // if (this.removedMarkers !== null) {
   
  //       this.removedMarkers[i].remove();
    
  //   }
  

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
    // const newMarkers = [];

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
