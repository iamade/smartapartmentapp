import { Injectable } from '@angular/core';
import { Marker, Map, Popup, LngLatBounds } from 'mapbox-gl';
import { Feature } from '../interfaces/available-apartments';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsMarkerService {
  private markers: Marker [] = []
  private map?: Map;

  constructor() { }

  setMap(map:Map) {
    this.map = map;
  }

  createMarkersFromApartments(apartments: Feature[], userLocation:[number, number]) {
    if(!this.map) throw Error ('Map is not Inclined');

    this.markers.forEach(marker => marker.remove());
    const newMarkers = [];

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

      newMarkers.push(newMarker);
    }
    this.markers = newMarkers;

    if(apartments.length === 0) return;

    //map limits
    const bounds = new LngLatBounds()
      newMarkers.forEach( marker => bounds.extend( marker.getLngLat()));
      bounds.extend( userLocation );    

    this.map.fitBounds(bounds,{
      padding: 200
    })

  }
}
