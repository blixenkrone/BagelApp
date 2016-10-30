import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Fillings } from '../providers/fillings';
import { TotalBagels } from '../providers/totalbagels';
import { bagel } from '../pages/bagel'
import { pickBread } from '../pages/pickBread'
import { pickCreamCheese } from '../pages/pickCreamCheese'
import { pickDressing } from '../pages/pickDressing'
import { pickMeat } from '../pages/pickMeat'
import { PickSalad } from '../pages/pick-salad/pick-salad';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    bagel,
    pickBread,
    pickCreamCheese,
    pickDressing,
    pickMeat,
    PickSalad
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    pickBread,
    pickCreamCheese,
    pickDressing,
    pickMeat,
    PickSalad
  ],
  providers: [Fillings, TotalBagels]
})
export class AppModule {}
