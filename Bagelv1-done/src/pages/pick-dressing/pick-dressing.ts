import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PickMeat } from '../pick-meat/pick-meat';
import { TotalBagel } from '../../providers/totalbagel';
import { Fillings } from '../../providers/fillings';

@Component({
  selector: 'page-pick-dressing',
  templateUrl: 'pick-dressing.html'
})
export class PickDressing {

Pesto: Fillings = new Fillings("Pesto");
Chili: Fillings = new Fillings("Chili");
Curry: Fillings = new Fillings("Curry");
CremeFraiche: Fillings = new Fillings("Creme Fraiche");

constructor (public totalbagel : TotalBagel, public navCtrl : NavController) {}

   getPesto() {
  this.totalbagel.totalBagelList.push(this.Pesto);
  }

   getChili() {
  this.totalbagel.totalBagelList.push(this.Chili);
  }

   getCurry() {
  this.totalbagel.totalBagelList.push(this.Curry);
  }

   getCreameFraiche() {
  this.totalbagel.totalBagelList.push(this.CremeFraiche);
  }

 pickMeat(){
  this.navCtrl.push(PickMeat);
  }

}
