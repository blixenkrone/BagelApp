import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TotalBagel } from '../../providers/totalbagel';
import { Drinks } from '../../providers/drinks'

@Component({
  selector: 'page-pick-drinks',
  templateUrl: 'pick-drinks.html'
})

export class PickDrinks {
  
Cola : Drinks = new Drinks("Coca-cola");
Fanta: Drinks = new Drinks("Fanta");
manjuice: Drinks = new Drinks("Joey's manjuice");
CremeFraiche: Drinks = new Drinks("Creme Fraiche");

constructor (public totalbagel : TotalBagel, public navCtrl : NavController) {}

   getCola() {
  this.totalbagel.totalBagelList.push(this.Cola);
  }

   getFanta() {
  this.totalbagel.totalBagelList.push(this.Fanta);
  }

   getCreameFraiche() {
  this.totalbagel.totalBagelList.push(this.CremeFraiche);
  }

GoHome(){
    this.navCtrl.push(HomePage);
  }

}
