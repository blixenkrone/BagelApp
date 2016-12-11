import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class Drink {

  name: string;
  pris: number;

  constructor(name: string, pris: number) {
    this.name = name;
    this.pris = pris;
  }
}
