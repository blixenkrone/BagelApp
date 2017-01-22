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
  public storeArray: Array<any> = [];
  public nearestStore: string;

  public roskilde: StoreLocation = new StoreLocation("Bagel Roskilde", "Trekroner st. 4", 55.650107, 12.131997);
  public valby: StoreLocation = new StoreLocation("Bagel Valby", "Valby Langgade 12", 55.668071, 12.497865);
  public kbhK: StoreLocation = new StoreLocation("Indre København", "Axeltorv 5, 1609 København V", 55.6887527, 12.5404156);
  public nørrebro: StoreLocation = new StoreLocation("Nørrebro", "Nørrebrogade 154, 2200 København N", 55.698415, 12.542681);
  public amager: StoreLocation = new StoreLocation("Amager", "Amager Blvd. 144, 2450 Amager", 55.667923, 12.585762);

  constructor(public navCtrl: NavController, public locationTracker: LocationTracker) {
    this.locationTracker = locationTracker;
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
    console.log('person lokation lat:' + this.usrStoreLat);
    console.log('person lokation long:' + this.usrStoreLong);
    this.calculateDist();
    }
  }


  public calculateDist (){

    //Distancen mellem butikkerne

    var distRoskilde  = (Math.abs(this.usrStoreLat-this.roskilde.lat)+Math.abs(this.usrStoreLong-this.roskilde.long));
    var distValby     = (Math.abs(this.usrStoreLat-this.valby.lat)+Math.abs(this.usrStoreLong-this.valby.long));
    var distKbhK      = (Math.abs(this.usrStoreLat-this.kbhK.lat)+Math.abs(this.usrStoreLong-this.kbhK.long));
    var distNorrebro  = (Math.abs(this.usrStoreLat-this.nørrebro.lat)+Math.abs(this.usrStoreLong-this.nørrebro.long));
    var distAmager    = (Math.abs(this.usrStoreLat-this.amager.lat)+Math.abs(this.usrStoreLong-this.amager.long));

    //Alle butik's-parametre som objekter (distance, navn, adresse)
    
    this.storeArray = [
    {dist: distRoskilde, name: this.roskilde.name, address:this.roskilde.address}, 
    {dist: distValby, name: this.valby.name, address:this.valby.address}, 
    {dist: distKbhK, name:this.kbhK.name, address:this.kbhK.address}, 
    {dist: distNorrebro, name:this.nørrebro.name, address:this.nørrebro.address}, 
    {dist: distAmager, name:this.amager.name, address:this.amager.address}];

    this.storeArray.sort(function(a,b) { // Her sorteres listen.
        return a.dist - b.dist;
      });


    //Tætteste butik med Butiksnavn og adresse
    this.nearestStore = this.storeArray[0].name + "\n" +'på addressen:' + "\n" + this.storeArray[0].address;
    
    console.log('Tætteste butik:'+this.storeArray[0].name);
    console.log('Tætteste tal på butik:'+this.storeArray[0].dist);
    console.log('Næsttætteste butik:'+this.storeArray[1].name);
    console.log('Næsttætteste tal på butik:'+this.storeArray[1].dist);
    
  }

  stop(){
  	this.locationTracker.stopTracking();
  }
  // http://www.joshmorony.com/adding-background-geolocation-to-an-ionic-2-application/

}