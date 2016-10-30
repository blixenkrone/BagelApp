import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  makeBagel(){
    this.navCtrl.push(PickBread, {
      //Intet at føre med?
    });
  }

}

