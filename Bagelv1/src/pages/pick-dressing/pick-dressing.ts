import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PickDressing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pick-dressing',
  templateUrl: 'pick-dressing.html'
})
export class PickDressing {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PickDressing Page');
  }

}
