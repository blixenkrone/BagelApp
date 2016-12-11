import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class StoreLocation {

  name: string;
  address: string;
  lat: number;
  long: number;

  constructor(name: string, address: string, lat: number, long: number) {
    this.name = name;
    this.address = address; 
    this.lat = lat; 
    this.long = long;
  }
}
