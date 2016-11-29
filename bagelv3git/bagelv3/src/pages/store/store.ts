import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationTracker } from '../../providers/location-tracker';

@Component({
  selector: 'page-store',
  templateUrl: 'store.html'
})

export class Store {

  constructor(public navCtrl: NavController, public locationTracker: LocationTracker) {
    
  }

  start(){
  	this.locationTracker.startTracking();
  }

  stop(){
  	this.locationTracker.stopTracking();
  }

  // http://www.joshmorony.com/adding-background-geolocation-to-an-ionic-2-application/
  
}
