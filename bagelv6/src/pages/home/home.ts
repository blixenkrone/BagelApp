import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Bagel } from '../bagel/bagel';
import { PickDrinks } from '../pick-drinks/pick-drinks';
import { LocationPage } from '../location/location';
import { CheckOut } from '../check-out/check-out';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) { }

  goToBagel() {
    this.navCtrl.push(Bagel);
  }

  goToDrink() {
    this.navCtrl.push(PickDrinks);
  }

  goToStore() {
    this.navCtrl.push(LocationPage);
  }

  goToCart(){
    this.navCtrl.push(CheckOut);
  }
}