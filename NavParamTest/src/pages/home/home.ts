
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Animation } from '../animation/animation';

import { Bagel } from '../../models/bagel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    //this.navCtrl = navCtrl;

    this.myBagel = new Bagel();
    this.myBagel.pris = 10;
    
  }
  public myBagel : Bagel;

  public pushPage(){
    this.navCtrl.push(Animation, {
      param1 : this.myBagel
      
    });
  }
}
