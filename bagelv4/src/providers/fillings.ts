import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Fillings {

  public name: string;
  public price: number;
  
  
  constructor(name: string, price: number) {

    this.name = name;
    this.price = price;
  }
}
