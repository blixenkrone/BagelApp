import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Cart } from '../../providers/cart';
import { Drink } from '../../providers/drink'

@Component({
  selector: 'page-pick-drinks',
  templateUrl: 'pick-drinks.html'
})

export class PickDrinks {
  public Cola: Drink = new Drink("Coca-cola", 18);
  public Fanta: Drink = new Drink("Fanta", 18);
  public Sprite: Drink = new Drink("Sprite", 18);

  constructor(public cart: Cart, public navCtrl: NavController) { 

  }

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
    this.cart.totalPrice -= 18;
  }
}
