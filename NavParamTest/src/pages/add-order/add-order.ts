import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-add-order',
  templateUrl: 'add-order.html'
})
export class AddOrder {

  constructor(public navCtrl: NavController,  private addOrderCtrl: ToastController) {}

    addOrder(){
    let order = this.addOrderCtrl.create({
      message: "Tilføjet til kurv",
      duration: 3000,
      position: "top"
    });
    order.present();
    this.navCtrl.push(HomePage, {
      
    });
  }




  ionViewDidLoad() {
    console.log('Hello AddOrder Page');
  }

}