import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PickSalad page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pick-salad',
  templateUrl: 'pick-salad.html'
})
export class PickSalad {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PickSalad Page');
  }

}
