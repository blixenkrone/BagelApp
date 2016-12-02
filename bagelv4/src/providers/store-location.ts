import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class StoreLocation {

  name: string;
  address: string;
  lat: number;
  long: number;
  distance: number;

  constructor(name: string, address: string, lat: number, long: number, distance: number) {
    this.name = name;
    this.address = address; 
    this.lat = lat; 
    this.long = long;
    this.distance = distance; 
  }
}
