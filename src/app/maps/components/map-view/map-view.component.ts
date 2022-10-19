import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Map, Popup, Marker} from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv') mapDivElement!: ElementRef 

  constructor(private placesService: PlacesService, private mapService: MapService) { }

  ngAfterViewInit(): void {
    if(!this.placesService.useLocation) throw Error ('There is no placesService.useLocation')
    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=SoL71Zyf7SmLrVYWC7fQ', // style URL
      center: this.placesService.useLocation , // starting position [lng, lat]
      zoom: 14, // starting zoom
      });

      const popup = new Popup()
        .setHTML(`
        <h6>here I am</h6>
        <span>I am in this part of the world</span>
        `);

      new Marker({ color: 'red'})
        .setLngLat(this.placesService.useLocation)
        .setPopup( popup )
        .addTo( map )

        this.mapService.setMap(map)
  } 

  

}
