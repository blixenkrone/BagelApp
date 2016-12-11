import { Injectable, NgZone } from '@angular/core';
import { Geolocation, Geoposition, BackgroundGeolocation } from 'ionic-native';
import 'rxjs/add/operator/filter';

@Injectable()
export class LocationTracker {
  
  public watch: any;    
  public lat: any;
  public lng: any;

  constructor(public zone: NgZone) {
  }

  startTracking() {
    
  	// Background Tracking

    let config = {
      desiredAccuracy: 0,
      stationaryRadius: 20,
      distanceFilter: 10, 
      debug: true,
      interval: 2000 
    };

    BackgroundGeolocation.configure((location) => {

		// Kør update inden i Angular's zone
		this.zone.run(() => {
			this.lat = location.latitude;
			this.lng = location.longitude;
		});

     }, (err) => {

		console.log(err);

     }, config);

    // Turn ON the background-geolocation system.
    BackgroundGeolocation.start();

    // Forgrunds Tracking
	let options = {
		frequency: 3000, 
		enableHighAccuracy: true
	};

	this.watch = Geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

		// Kør update inden i Angular's zone
		this.zone.run(() => {
			this.lat = position.coords.latitude;
			this.lng = position.coords.longitude;
		});

	});
  }
 

  stopTracking() {
    console.log('Stop Tracking');
    BackgroundGeolocation.finish();
    this.watch.unsubscribe();
  }
}

