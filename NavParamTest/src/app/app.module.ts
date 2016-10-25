import { AddOrder } from '../pages/add-order/add-order';
//import { Bagel } from '../models/bagel';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Animation } from '../pages/animation/animation';
//import { Bagel } from '../../models/bagel';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Animation,
    AddOrder
    // Bagel dee
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Animation,
    AddOrder
    //Bagel
  ],
  providers: []
})
export class AppModule {}
