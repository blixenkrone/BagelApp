import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PickBread } from '../pick-bread/pick-bread';

import { PickDrinks } from '../pick-drinks/pick-drinks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {    
  }

  pickBread(){
    this.navCtrl.push(PickBread);
  }
  
  pickDrinks(){
    this.navCtrl.push(PickDrinks);
  }
}