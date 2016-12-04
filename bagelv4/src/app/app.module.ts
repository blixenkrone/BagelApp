import { LocationPage } from '../pages/location/location';

import { PickDrinks } from '../pages/pick-drinks/pick-drinks';
import { Bagel } from '../pages/bagel/bagel';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Fillings } from '../providers/fillings';
import { TotalBagel } from '../providers/totalbagel';
import { Drinks } from '../providers/drinks';
import { LocationTracker } from '../providers/location-tracker';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Bagel,
    PickDrinks,
    LocationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Bagel,
    PickDrinks,
    LocationPage
  ],

  
  providers: [Fillings, TotalBagel, Drinks, LocationTracker, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}