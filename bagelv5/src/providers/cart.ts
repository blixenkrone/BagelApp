import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Drinks } from './drinks';
import { TotalBagel } from './totalbagel';

@Injectable()
export class Cart {

  checkOutBagels: Array<Object> = [];
  checkOutDrinks: Array<Object> = [];

  totalPrice: number;

  bagelPrices: Array<number> = [];

  constructor(public totalbagel: TotalBagel) {
    this.totalPrice = 0;
  }

  add(drinks : Drinks) {
    this.totalPrice += drinks.pris;
    this.checkOutDrinks.push(drinks);
  }

}
