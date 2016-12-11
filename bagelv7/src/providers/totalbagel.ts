import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Filling } from './filling';

@Injectable()
export class TotalBagel {

  chosenFillings: Array<Object> = [];
  totalPrice: number;

  constructor() {
     this.totalPrice = 0;
  }

  add(filling : Filling) {
    this.totalPrice += filling.price;
    this.chosenFillings.push(filling);
  }
}

