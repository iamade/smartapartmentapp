import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtYXIyMDIiLCJhIjoiY2w5OHQ1aWhuMGM2ajNwcXRyZmk2bTZ6NCJ9.HYxBDFXAGpk-wQcZiNomRw';


if(!navigator.geolocation) {
  alert('browser does not support geoloaction');
  throw new Error('browser does not support geoloaction')
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
