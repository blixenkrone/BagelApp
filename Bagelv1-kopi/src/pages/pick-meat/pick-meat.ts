import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PickMeat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pick-meat',
  templateUrl: 'pick-meat.html'
})
export class PickMeat {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PickMeat Page');
  }

}