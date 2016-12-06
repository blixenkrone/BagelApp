import { Component } from '@angular/core';
import { Cart } from '../../providers/cart';
import { TotalBagel } from '../../providers/totalbagel';

@Component({
  selector: 'page-check-out',
  templateUrl: 'check-out.html'
})

export class CheckOut {

  constructor(public cart: Cart, public totalBagel: TotalBagel){ 
  }

  removeBagel(idx: number){
    this.cart.checkOutBagels.splice(idx, 1);
    this.cart.totalPrice -= this.cart.bagelPrices[idx].valueOf(); // fucked op måde at gøre det på.
    this.cart.bagelPrices.splice(idx, 1); // fucked op måde at gøre det på.
  }
}
