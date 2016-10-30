
import { AddOrder } from '../add-order/add-order';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Animation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-animation',
  templateUrl: 'animation.html'
})
export class Animation {

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.otherBagel = navParams.get('param1');
  }

  public otherBagel;


  public pushPage(){
    this.navCtrl.push(AddOrder, {

    });
  }

  //kode hertil

  ionViewDidLoad() {
    console.log('Hello Animation Page');
  }

}
