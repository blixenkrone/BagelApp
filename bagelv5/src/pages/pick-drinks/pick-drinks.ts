import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { Cart } from '../../providers/cart';
import { Drinks } from '../../providers/drinks'

@Component({
  selector: 'page-pick-drinks',
  templateUrl: 'pick-drinks.html'
})

export class PickDrinks {

  Cola: Drinks = new Drinks("Coca-cola", 18);
  Fanta: Drinks = new Drinks("Fanta", 18);
  Sprite: Drinks = new Drinks("Sprite", 18);

  constructor(public cart: Cart, public navCtrl: NavController) { }

  getCola() {
    this.cart.add(this.Cola);
  }

  getFanta() {
    this.cart.add(this.Fanta);
  }

  getSprite() {
    this.cart.add(this.Sprite);
  }

  GoHome() {
    this.navCtrl.push(HomePage);
  }

  removeDrink(idx: number){
    this.cart.checkOutDrinks.splice(idx, 1);
    this.cart.totalPrice -= this.Cola.pris; // HER SNYDER VI!
  }

}
