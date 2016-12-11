import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class Filling {

  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

}
