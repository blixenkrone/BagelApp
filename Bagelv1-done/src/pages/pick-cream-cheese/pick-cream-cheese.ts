import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PickDressing } from '../pick-dressing/pick-dressing';
import { Fillings } from '../../providers/fillings';
import { TotalBagel } from '../../providers/totalbagel';

@Component({
  selector: 'page-pick-cream-cheese',
  templateUrl: 'pick-cream-cheese.html'
})

export class PickCreamCheese {

Ingen: Fillings = new Fillings("Ingen");
Hummus: Fillings = new Fillings("Hummus");
Plaincreamcheese: Fillings = new Fillings("Plaincreamcheese");
Soltorrettomatcreamcheese: Fillings = new Fillings("Soltorrettomatcreamcheese"); 
Pestocreamcheese: Fillings = new Fillings("Pestocreamcheese");

constructor(public totalbagel: TotalBagel, public navCtrl: NavController) {}

getIngen() {
  this.totalbagel.totalBagelList.push(this.Ingen);
}
getHummus() {
  this.totalbagel.totalBagelList.push(this.Hummus);
}
getPlaincreamcheese() {
  this.totalbagel.totalBagelList.push(this.Plaincreamcheese);
}
getSoltorrettomatcreamcheese() {
  this.totalbagel.totalBagelList.push(this.Soltorrettomatcreamcheese);
}
getPestocreamcheese() {
  this.totalbagel.totalBagelList.push(this.Pestocreamcheese);
}

 pickDressing(){
  this.navCtrl.push(PickDressing);
  }


}
