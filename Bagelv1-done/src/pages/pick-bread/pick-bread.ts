import { PickCreamCheese } from '../pick-cream-cheese/pick-cream-cheese';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Fillings } from '../../providers/fillings';
import { TotalBagel } from '../../providers/totalbagel';

@Component({
  selector: 'page-pick-bread',
  templateUrl: 'pick-bread.html'
})



export class PickBread {

  fuldkorn : Fillings = new Fillings("Fuldkorn");
  plain : Fillings = new Fillings("Plain");
  chilliCheddar : Fillings = new Fillings("Chilli Cheddar");
  sesam : Fillings = new Fillings("Sesamfrø");

  constructor(public navCtrl: NavController, public totalBagel: TotalBagel) {}

  getFuldkorn(){
    this.totalBagel.totalBagelList.push(this.fuldkorn);
    //Push videre til næste side
    this.navCtrl.push(PickCreamCheese);
  }



  getPlain(){
    this.totalBagel.totalBagelList.push(this.plain);
        
    //Push videre til næste side
    this.navCtrl.push(PickCreamCheese);
  }



  getSesam(){
    this.totalBagel.totalBagelList.push(this.sesam);
    
    //Push videre til næste side
    this.navCtrl.push(PickCreamCheese);
  }


//PRINT OBJEKTETS VARIABLER UD TIL STRINGS

  getChilli(){
    this.totalBagel.totalBagelList.push(this.chilliCheddar);
    
    //Push videre til næste side
    this.navCtrl.push(PickCreamCheese);
  }
}

