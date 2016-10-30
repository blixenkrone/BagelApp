import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Fillings } from '../../providers/fillings';

@Component({
  selector: 'page-pick-bread',
  templateUrl: 'pick-bread.html'
})
export class PickBread {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PickBread Page');
  }

}
