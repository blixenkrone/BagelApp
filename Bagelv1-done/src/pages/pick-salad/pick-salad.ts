import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Fillings } from '../../providers/fillings';
import { TotalBagel } from '../../providers/totalbagel';

import { Bagel } from '../bagel/bagel';

@Component({
  selector: 'page-pick-salad',
  templateUrl: 'pick-salad.html'
})

export class PickSalad {

  IceBerg: Fillings = new Fillings("Iceberg");
  Agurk: Fillings = new Fillings("Agurk");
  Tomat: Fillings = new Fillings("Tomat");
  Jalapenos: Fillings = new Fillings("Jalapenos");
  Pickles: Fillings = new Fillings("Pickles");

  constructor(public totalBagel: TotalBagel, public navCtrl: NavController) {}

  getIceBerg() {
    this.totalBagel.totalBagelList.push(this.IceBerg);
  }
  
  getAgurk() {
    this.totalBagel.totalBagelList.push(this.Agurk);
  }

  getTomat() {
    this.totalBagel.totalBagelList.push(this.Tomat);
  }

  getJalapenos() {
    this.totalBagel.totalBagelList.push(this.Jalapenos);
  }

  getPickles() {
    this.totalBagel.totalBagelList.push(this.Pickles);
  }

  goToFinalBagel() {
    this.navCtrl.push(Bagel);
  }
}
