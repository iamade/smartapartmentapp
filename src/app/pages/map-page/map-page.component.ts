import { Component, OnInit } from '@angular/core';

import * as Mapboxgl from 'mapbox-gl';
import { HomeData } from 'src/app/shared/home-data.model';
import { environment } from 'src/environments/environment';

import dbjson from 'src/assets/json/db.json';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

homeData: HomeData[] = dbjson
map!: Mapboxgl.Map
  constructor() { }

  ngOnInit(): void {
    this.createMap()
  }

createMap(){
  Mapboxgl!.accessToken = environment.mapboxKey;
  this.map = new Mapboxgl.Map({
  container: 'map', // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: 'https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=SoL71Zyf7SmLrVYWC7fQ', // style URL
  center: [-75.76, 45.35], // starting position
  zoom: 16.6 // starting zoom
  });
  this.createMarker(-75.76, 45.35 )
}

createMarker(lng: number, lat: number) {

  const marker = new Mapboxgl.Marker({
    draggable: true
    }).setLngLat([lng, lat])
    .addTo(this.map);

    marker.on('drag', () => {
      console.log(marker.getLngLat());
      
    })

}

}
