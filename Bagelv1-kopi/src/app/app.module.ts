import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Fillings } from '../providers/fillings';
import { TotalBagel } from '../providers/totalbagel';
import { Bagel } from '../pages/bagel/bagel';
import { PickBread } from '../pages/pick-bread/pick-bread';
import { PickCreamCheese } from '../pages/pick-cream-cheese/pick-cream-cheese';
import { PickDressing } from '../pages/pick-dressing/pick-dressing';
import { PickMeat } from '../pages/pick-meat/pick-meat';
import { PickSalad } from '../pages/pick-salad/pick-salad';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Bagel,
    PickBread,
    PickCreamCheese,
    PickDressing,
    PickMeat,
    PickSalad
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PickBread,
    PickCreamCheese,
    PickDressing,
    PickMeat,
    PickSalad
  ],
  providers: [Fillings, TotalBagel]
})
export class AppModule {}