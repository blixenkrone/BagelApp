import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


/*
  Generated class for the PickBread page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
