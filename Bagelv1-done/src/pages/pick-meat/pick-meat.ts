import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Fillings } from '../../providers/fillings';
import { TotalBagel } from '../../providers/totalbagel';

import { PickSalad } from '../pick-salad/pick-salad';

@Component({
  selector: 'page-pick-meat',
  templateUrl: 'pick-meat.html'
})

export class PickMeat {

  Kylling: Fillings = new Fillings("Kylling");
  KrydreKylling: Fillings = new Fillings("Krydre-Kylling");
  Chorizo: Fillings = new Fillings("Chorizo");
  Laks: Fillings = new Fillings("Laks");

  constructor(public totalBagel: TotalBagel, public navCtrl: NavController) {}

  getKylling() {
    this.totalBagel.totalBagelList.push(this.Kylling);
  }
  getKrydreKylling() {
    this.totalBagel.totalBagelList.push(this.KrydreKylling);
  }
  getChorizo() {
    this.totalBagel.totalBagelList.push(this.Chorizo);
  }
  getLaks() {
    this.totalBagel.totalBagelList.push(this.Laks);
  }
  goToSalad() {
    this.navCtrl.push(PickSalad);
  }

}
