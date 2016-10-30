import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TotalBagel {

  totalBagelList: Array<Object> = [];

  constructor() {}

 getBagel() {
    console.log("Dette er Arrayet fra serviceBagel: " + this.totalBagelList);
  }

}

