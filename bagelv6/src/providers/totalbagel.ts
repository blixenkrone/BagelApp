import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Filling } from './filling';

@Injectable()
export class TotalBagel {

  totalBagelList: Array<Object> = [];
  totalPrice: number;

  constructor() {
     this.totalPrice = 0;
  }

  add(filling : Filling) {
    this.totalPrice += filling.price;
    this.totalBagelList.push(filling);
  }
}

