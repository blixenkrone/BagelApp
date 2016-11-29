import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Drinks {

  public name: string;

  constructor(name: string) {

    this.name = name;
  }
}
