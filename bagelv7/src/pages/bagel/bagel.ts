import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TotalBagel } from '../../providers/totalbagel';
import { Filling } from '../../providers/filling';
import { Cart } from '../../providers/cart';

import {Input, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'page-bagel',
  templateUrl: 'bagel.html',
  animations:[
      trigger('visibilityChanged', [
      state("shown" , style({ opacity: 1, marginLeft: 0, padding: 0})), 
      state("hidden", style({ opacity: 0, marginLeft: 500, padding: 0, height: 0, width: 0 })),
      transition('shown => hidden', animate('600ms')),
      transition('hidden => shown', animate('300ms')),
    ]),
  ]
})

export class Bagel {

  // Herunder oprettes alle objekter af Filling:

  // ________Bread_________
  public fuldkorn: Filling = new Filling("Fuldkorn", 10);
  public plain: Filling = new Filling("Plain", 10);
  public chilliCheddar: Filling = new Filling("Chilli Cheddar", 10);
  public sesam: Filling = new Filling("Sesamfrø", 10);
  // ________Cream-Cheese_________
  public Hummus: Filling = new Filling("Hummus", 5);
  public Plaincreamcheese: Filling = new Filling("Plaincreamcheese", 5);
  public SolTomatCC: Filling = new Filling("SolTomatCC", 5); 
  public Pestocreamcheese: Filling = new Filling("Pestocreamcheese", 5);
  // ________Dressing_________
  public Pesto: Filling = new Filling("Pesto", 7);
  public Chili: Filling = new Filling("Chili", 7);
  public Curry: Filling = new Filling("Curry", 7);
  public CremeFraiche: Filling = new Filling("Creme Fraiche", 7);
  // ________Kød_________
  public Kylling: Filling = new Filling("Kylling", 10);
  public KrydreKylling: Filling = new Filling("Krydre-Kylling", 10);
  public Chorizo: Filling = new Filling("Chorizo", 10);
  public Laks: Filling = new Filling("Laks", 10);
  // ________Salad_________
  public IceBerg: Filling = new Filling("Iceberg", 5);
  public Agurk: Filling = new Filling("Agurk", 5);
  public Tomat: Filling = new Filling("Tomat", 5);
  public Jalapenos: Filling = new Filling("Jalapenos", 5);

  constructor(public totalBagel: TotalBagel, public navCtrl: NavController, public cart: Cart) { }
  
  // Herunder bestemmes alle Filling-objekter som skal animeres samt knapper.
  @Input() animateBread : string = "hidden";
  @Input() animateCreamCheese : string = "hidden";
  @Input() animateDressing : string = "hidden";
  @Input() animateMeat : string = "hidden";

  @Input() animateIceBerg : string = "hidden";
  @Input() animateAgurk : string = "hidden";
  @Input() animateTomat : string = "hidden";
  @Input() animateJalapenos : string = "hidden";

  @Input() animateBreadButtons : string = "shown";
  @Input() animateCreamCheeseButtons : string = "hidden";
  @Input() animateDressingButtons : string = "hidden";
  @Input() animateMeatButtons : string = "hidden";

  @Input() animateIceBergButton : string = "hidden";
  @Input() animateAgurkButton : string = "hidden";
  @Input() animateTomatButton : string = "hidden";
  @Input() animateJalapenosButton : string = "hidden";

  @Input() animateBackButton : string = "shown";
  @Input() animateConfirmButton : string = "hidden";

  // Herunder defineres alle functioner tilknyttet til objekterne.
  // ________Bread_________
  getFuldkorn() { this.totalBagel.add(this.fuldkorn);
      this.animateBread = "shown";
      this.animateBreadButtons = "hidden";
      this.animateCreamCheeseButtons = "shown";
  }
  getPlain() { this.totalBagel.add(this.plain); 
      this.animateBread = "shown";
      this.animateBreadButtons = "hidden";
      this.animateCreamCheeseButtons = "shown";
  }
  getSesam() { this.totalBagel.add(this.sesam); 
      this.animateBread = "shown";
      this.animateBreadButtons = "hidden";
      this.animateCreamCheeseButtons = "shown";
  }
  getChilli() { this.totalBagel.add(this.chilliCheddar); 
      this.animateBread = "shown";
      this.animateBreadButtons = "hidden";
      this.animateCreamCheeseButtons = "shown";
  }


  // ________Cream-Cheese_________
  getHummus() { this.totalBagel.add(this.Hummus);
      this.animateCreamCheese = "shown";
      this.animateCreamCheeseButtons = "hidden";
      this.animateDressingButtons = "shown";
  }
  getPlainCC() { this.totalBagel.add(this.Plaincreamcheese); 
      this.animateCreamCheese = "shown";
      this.animateCreamCheeseButtons = "hidden";
      this.animateDressingButtons = "shown";
  }
  getSolTomatCC() { this.totalBagel.add(this.SolTomatCC); 
      this.animateCreamCheese = "shown";
      this.animateCreamCheeseButtons = "hidden";
      this.animateDressingButtons = "shown";
  }
  getPestocreamcheese() { this.totalBagel.add(this.Pestocreamcheese); 
      this.animateCreamCheese = "shown";
      this.animateCreamCheeseButtons = "hidden";
      this.animateDressingButtons = "shown";
  }


  // ________Dressing_________
  getPesto() { this.totalBagel.add(this.Pesto); 
      this.animateDressing = "shown";
      this.animateDressingButtons = "hidden";
      this.animateMeatButtons = "shown";
  }
  getChili() { this.totalBagel.add(this.Chili); 
      this.animateDressing = "shown";
      this.animateDressingButtons = "hidden";
      this.animateMeatButtons = "shown";
  }
  getCurry() { this.totalBagel.add(this.Curry); 
      this.animateDressing = "shown";
      this.animateDressingButtons = "hidden";
      this.animateMeatButtons = "shown";
  }
  getCreameFraiche() { this.totalBagel.add(this.CremeFraiche); 
      this.animateDressing = "shown";
      this.animateDressingButtons = "hidden";
      this.animateMeatButtons = "shown";
  }


  // ________Kød_________
  getKylling() { this.totalBagel.add(this.Kylling);
      this.animateMeat = "shown";
      this.animateMeatButtons = "hidden";
      this.animateIceBergButton = "shown";
      this.animateAgurkButton = "shown";
      this.animateTomatButton = "shown";
      this.animateJalapenosButton = "shown";
      this.animateConfirmButton = "shown";
  }
  getKrydreKylling() { this.totalBagel.add(this.KrydreKylling); 
      this.animateMeat = "shown";
      this.animateMeatButtons = "hidden";
      this.animateIceBergButton = "shown";
      this.animateAgurkButton = "shown";
      this.animateTomatButton = "shown";
      this.animateJalapenosButton = "shown";
      this.animateConfirmButton = "shown";
  }
  getChorizo() { this.totalBagel.add(this.Chorizo); 
      this.animateMeat = "shown";
      this.animateMeatButtons = "hidden";
      this.animateIceBergButton = "shown";
      this.animateAgurkButton = "shown";
      this.animateTomatButton = "shown";
      this.animateJalapenosButton = "shown";
      this.animateConfirmButton = "shown";
  }
  getLaks() { this.totalBagel.add(this.Laks); 
      this.animateMeat = "shown";
      this.animateMeatButtons = "hidden";
      this.animateIceBergButton = "shown";
      this.animateAgurkButton = "shown";
      this.animateTomatButton = "shown";
      this.animateJalapenosButton = "shown";
      this.animateConfirmButton = "shown";
  }


  // ________Salad_________
  getIceBerg() { this.totalBagel.add(this.IceBerg); 
      this.animateIceBerg = "shown";
      this.animateIceBergButton = "hidden";
  }
  getAgurk() { this.totalBagel.add(this.Agurk);
      this.animateAgurk = "shown";
      this.animateAgurkButton = "hidden";
  }
  getTomat() { this.totalBagel.add(this.Tomat); 
      this.animateTomat = "shown";
      this.animateTomatButton = "hidden";
  }
  getJalapenos() { this.totalBagel.add(this.Jalapenos); 
      this.animateJalapenos = "shown";
      this.animateJalapenosButton = "hidden";
  }

  // ________Fortyrd_________
  regretChoice() {
      if(this.totalBagel.totalBagelList.length > 0){
          this.totalBagel.totalPrice = 0;
            while(this.totalBagel.totalBagelList.length > 0){
                this.totalBagel.totalBagelList.pop();
            }
      this.animateBread = "hidden";
      this.animateDressing = "hidden";
      this.animateIceBerg = "hidden";
      this.animateAgurk = "hidden";
      this.animateTomat = "hidden";
      this.animateJalapenos = "hidden";
      this.animateMeat = "hidden";
      this.animateCreamCheese = "hidden";

      this.animateBreadButtons = "shown";
      this.animateCreamCheeseButtons = "hidden";
      this.animateDressingButtons = "hidden";
      this.animateMeatButtons = "hidden";
      this.animateIceBergButton = "hidden";
      this.animateAgurkButton = "hidden";
      this.animateTomatButton = "hidden";
      this.animateJalapenosButton = "hidden";
      this.animateConfirmButton = "hidden";

      this.navCtrl.pop(HomePage);
      }
  }


  // ________Bekræft_________  

  public tempTotalBagel = new TotalBagel();

  confirmChoice(){
      this.tempTotalBagel.totalPrice = this.totalBagel.totalPrice;

      while (this.totalBagel.totalBagelList.length > 0){
          this.tempTotalBagel.totalBagelList.push(this.totalBagel.totalBagelList.pop());
      }

        this.cart.bagelPrices.push(this.tempTotalBagel.totalPrice);

        this.totalBagel.totalPrice = 0;
        this.cart.checkOutBagels.push(this.tempTotalBagel);
        this.cart.totalPrice += this.tempTotalBagel.totalPrice;
        this.navCtrl.push(HomePage);
  }
}