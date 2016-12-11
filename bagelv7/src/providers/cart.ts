import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Drink } from './drink';
import { TotalBagel } from './totalbagel';

@Injectable()
export class Cart {

  checkOutBagels: Array<Object> = [];
  checkOutDrinks: Array<Object> = [];
  bagelPrices: Array<number> = [];
  totalPrice: number;

  constructor(public totalbagel:TotalBagel) {
    this.totalPrice = 0;
  }

  add(drinks : Drink) {
    this.totalPrice += drinks.pris;
    this.checkOutDrinks.push(drinks);
  }
}
