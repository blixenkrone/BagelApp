import { Drinks } from '../../providers/drinks';
import { Fillings } from '../../providers/fillings';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TotalBagel } from '../../providers/totalbagel';

@Component({
  selector: 'page-bagel',
  templateUrl: 'bagel.html'
})

export class Bagel {

  constructor(public totalBagel: TotalBagel, public navCtrl: NavController) {}

  getBagel(){
    for(var i = 0; i<this.totalBagel.totalBagelList.length; i++){
      var value = this.totalBagel.totalBagelList[i];
      console.log(JSON.stringify(value));
    }
  }

}
