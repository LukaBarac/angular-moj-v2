import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  //Ovde managujes dodavanje i brisanje iz carta
  private prod: Array<any>;
  constructor() {}
  addProd(product) {
    this.prod.push(product);
  }
  removeProd(productId) {
    this.prod = this.prod.filter((x) => x.id !== productId);
  }
  getProd() {
    return this.prod;
  }
}
