import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Bagel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-bagel',
  templateUrl: 'bagel.html'
})


export class BagelPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BagelPage Page');
  }

}
