import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BestilOversigt } from '../bestil-oversigt/bestil-oversigt';


/*
  Generated class for the Butik page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-butik',
  templateUrl: 'butik.html'
})
export class Butik {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Butik Page');
  }

  chooseNorrebro(){
    alert("Nørrebro Valgt");
  }

  chooseOsterbro(){
    alert("Østerbro Valgt");
  }

  chooseValby(){
    alert("Valby Valgt");
  }
  
  chooseVesterbro(){
    alert("Vesterbro Valgt");
  }

  pageThree() {
    this.navCtrl.push(BestilOversigt, {
    });
}

}

