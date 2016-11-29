import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TotalBagel } from '../../providers/totalbagel';
import { Fillings } from '../../providers/fillings';

@Component({
  selector: 'page-bagel',
  templateUrl: 'bagel.html'
})

export class Bagel {

  // Herunder oprettes alle objekter af Fillings:

  // ________Bread_________
  fuldkorn: Fillings = new Fillings("Fuldkorn", 10);
  plain: Fillings = new Fillings("Plain", 10);
  chilliCheddar: Fillings = new Fillings("Chilli Cheddar", 10);
  sesam: Fillings = new Fillings("Sesamfrø", 10);
  // ________Cream-Cheese_________
  Ingen: Fillings = new Fillings("Ingen", 0);
  Hummus: Fillings = new Fillings("Hummus", 5);
  Plaincreamcheese: Fillings = new Fillings("Plaincreamcheese", 5);
  Soltorrettomatcreamcheese: Fillings = new Fillings("Soltorrettomatcreamcheese", 5); 
  Pestocreamcheese: Fillings = new Fillings("Pestocreamcheese", 5);
  // ________Dressing_________
  Pesto: Fillings = new Fillings("Pesto", 7);
  Chili: Fillings = new Fillings("Chili", 7);
  Curry: Fillings = new Fillings("Curry", 7);
  CremeFraiche: Fillings = new Fillings("Creme Fraiche", 7);
  // ________Kød_________
  Kylling: Fillings = new Fillings("Kylling", 12);
  KrydreKylling: Fillings = new Fillings("Krydre-Kylling", 12);
  Chorizo: Fillings = new Fillings("Chorizo", 10);
  Laks: Fillings = new Fillings("Laks", 15);
  // ________Salad_________
  IceBerg: Fillings = new Fillings("Iceberg", 4);
  Agurk: Fillings = new Fillings("Agurk", 5);
  Tomat: Fillings = new Fillings("Tomat", 5);
  Jalapenos: Fillings = new Fillings("Jalapenos", 5);
  Pickles: Fillings = new Fillings("Pickles", 5);

  constructor(public totalBagel: TotalBagel, public navCtrl: NavController) { }

  // Herunder defineres alle functioner tilknyttet til objekterne.

  // ________Bread_________
  getFuldkorn() { this.totalBagel.totalBagelList.push(this.fuldkorn); }
  getPlain() { this.totalBagel.totalBagelList.push(this.plain); }
  getSesam() { this.totalBagel.totalBagelList.push(this.sesam); }
  getChilli() { this.totalBagel.totalBagelList.push(this.chilliCheddar); }
  // ________Cream-Cheese_________
  getIngen() { this.totalBagel.totalBagelList.push(this.Ingen); }
  getHummus() { this.totalBagel.totalBagelList.push(this.Hummus); }
  getPlaincreamcheese() { this.totalBagel.totalBagelList.push(this.Plaincreamcheese); }
  getSoltorrettomatcreamcheese() { this.totalBagel.totalBagelList.push(this.Soltorrettomatcreamcheese); }
  getPestocreamcheese() { this.totalBagel.totalBagelList.push(this.Pestocreamcheese); }
  // ________Dressing_________
  getPesto() { this.totalBagel.totalBagelList.push(this.Pesto); }
  getChili() { this.totalBagel.totalBagelList.push(this.Chili); }
  getCurry() { this.totalBagel.totalBagelList.push(this.Curry); }
  getCreameFraiche() { this.totalBagel.totalBagelList.push(this.CremeFraiche); }
  // ________Kød_________
  getKylling() { this.totalBagel.totalBagelList.push(this.Kylling); }
  getKrydreKylling() { this.totalBagel.totalBagelList.push(this.KrydreKylling); }
  getChorizo() { this.totalBagel.totalBagelList.push(this.Chorizo); }
  getLaks() { this.totalBagel.totalBagelList.push(this.Laks); }
  // ________Salad_________
  getIceBerg() { this.totalBagel.totalBagelList.push(this.IceBerg); }
  getAgurk() { this.totalBagel.totalBagelList.push(this.Agurk); }
  getTomat() { this.totalBagel.totalBagelList.push(this.Tomat); }
  getJalapenos() { this.totalBagel.totalBagelList.push(this.Jalapenos); }
  getPickles() { this.totalBagel.totalBagelList.push(this.Pickles); }

  // getBagel() {
  //   for (var i = 0; i < this.totalBagel.totalBagelList.length; i++) {
  //     var value = this.totalBagel.totalBagelList[i];
  //     console.log(JSON.stringify(value));
  //   }
  // }

}
