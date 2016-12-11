import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LocationPage } from '../pages/location/location';
import { PickDrinks } from '../pages/pick-drinks/pick-drinks';
import { Bagel } from '../pages/bagel/bagel';
import { HomePage } from '../pages/home/home';
import { CheckOut } from '../pages/check-out/check-out';

// import { Fillings } from '../providers/fillings';
import { TotalBagel } from '../providers/totalbagel';
// import { Drinks } from '../providers/drinks';
import { LocationTracker } from '../providers/location-tracker';
import { Cart } from '../providers/cart';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Bagel,
    PickDrinks,
    LocationPage,
    CheckOut
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
    LocationPage,
    CheckOut
  ],

  
  providers: [Cart, TotalBagel, LocationTracker, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}