import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { Bagel } from '../pages/bagel/bagel';
import { PickDrinks } from '../pages/pick-drinks/pick-drinks';

import { Fillings } from '../providers/fillings';
import { TotalBagel } from '../providers/totalbagel';
import { Drinks } from '../providers/drinks';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Bagel,
    PickDrinks
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Bagel,
    PickDrinks
  ],
  providers: [Fillings, TotalBagel, Drinks]
})
export class AppModule {}
