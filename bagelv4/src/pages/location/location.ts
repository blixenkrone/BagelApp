import { StoreLocation } from '../../providers/store-location';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocationTracker } from '../../providers/location-tracker';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})

export class LocationPage implements OnInit{

  public usrStoreLat: any;
  public usrStoreLong: any;
  public usrDistance: any;
  public storeArray: Array<number> = [];

  public roskilde: StoreLocation = new StoreLocation("Bagel Roskilde", "Trekroner st. 4", 55.650107, 12.131997, null);
  public valby: StoreLocation = new StoreLocation("Bagel Valby", "Valby Langgade 12", 55.668071, 12.497865, null);
  public kbhK: StoreLocation = new StoreLocation("Indre København", "Axeltorv 5, 1609 København V", 55.6887527, 12.5404156, null);

  constructor(public navCtrl: NavController, public locationTracker: LocationTracker) {
  }

// START GEO TRACKING FOR NUVÆRENDE POSITION

  ngOnInit(){
    this.start();
  }

    public start(){
  	this.locationTracker.startTracking();
    this.usrStoreLat = this.locationTracker.lat;
    this.usrStoreLong = this.locationTracker.lng;

    
    if(this.locationTracker.lat != null){
    console.log('Tracker nu!');
    console.log(this.usrStoreLat);
    console.log(this.usrStoreLong);
    this.calculateDist();
    }
  }


  public calculateDist(){
    var distRoskilde = ((this.usrStoreLat-this.roskilde.lat)+(this.usrStoreLong-this.roskilde.long));
    var distValby = ((this.usrStoreLat-this.valby.lat)+(this.usrStoreLong-this.valby.long));
    var distKbhK = ((this.usrStoreLat-this.kbhK.lat)+(this.usrStoreLong-this.kbhK.long));

    this.storeArray = [distKbhK, distValby, distRoskilde];
    var sortDist = this.storeArray.sort();

    console.log('store arrayet:' + this.storeArray[0]);
    console.log(sortDist);
  }

  stop(){
  	this.locationTracker.stopTracking();
  }

  // http://www.joshmorony.com/adding-background-geolocation-to-an-ionic-2-application/
}