import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Butik } from '../pages/butik/butik';
import { BestilOversigt } from '../pages/bestil-oversigt/bestil-oversigt';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Butik,
    BestilOversigt
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Butik,
    BestilOversigt
  ],
  providers: []
})
export class AppModule {}
