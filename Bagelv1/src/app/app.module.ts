import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Fillings } from '../providers/fillings';
<<<<<<< HEAD
import { TotalBagels } from '../providers/totalbagels';
import { bagel } from '../pages/bagel'
import { pickBread } from '../pages/pickBread'
import { pickCreamCheese } from '../pages/pickCreamCheese'
import { pickDressing } from '../pages/pickDressing'
import { pickMeat } from '../pages/pickMeat'
=======
import { TotalBagel } from '../providers/totalbagel';
import { Bagel } from '../pages/bagel/bagel';
import { PickBread } from '../pages/pick-bread/pick-bread';
import { PickCreamCheese } from '../pages/pick-cream-cheese/pick-cream-cheese';
import { PickDressing } from '../pages/pick-dressing/pick-dressing';
import { PickMeat } from '../pages/pick-meat/pick-meat';
>>>>>>> acbb1519cc5c04b3c612ac7a54d63b804bc9929c
import { PickSalad } from '../pages/pick-salad/pick-salad';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    bagel,
    pickBread,
    pickCreamCheese,
    pickDressing,
    pickMeat,
=======
    Bagel,
    PickBread,
    PickCreamCheese,
    PickDressing,
    PickMeat,
>>>>>>> acbb1519cc5c04b3c612ac7a54d63b804bc9929c
    PickSalad
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    pickBread,
    pickCreamCheese,
    pickDressing,
    pickMeat,
=======
    PickBread,
    PickCreamCheese,
    PickDressing,
    PickMeat,
>>>>>>> acbb1519cc5c04b3c612ac7a54d63b804bc9929c
    PickSalad
  ],
  providers: [Fillings, TotalBagel]
})
export class AppModule {}
