import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Fillings } from './fillings';

@Injectable()
export class TotalBagel {

  totalBagelList: Array<Object> = [];
  totalPrice: number;

  constructor() {
     this.totalPrice = 0;
  }

  add(filling : Fillings) {
    this.totalPrice += filling.price;
    this.totalBagelList.push(filling);
  }
}

