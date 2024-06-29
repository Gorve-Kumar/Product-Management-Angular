import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Bags } from './types/product';

@Injectable({
  providedIn: 'root'
})
// Injectable means it can be used in other components.
// Provide it in app.config.ts

export class ProductService {
  httpClient = inject(HttpClient); // External Service in Angular Core
  // bags = []

  constructor() { 

  }

  getProducts(){ // Calls HTTP API
    return this.httpClient.get<Bags[]>("http://localhost:3000/Bags")
  };

  getProductsByID(id: number){
    return this.httpClient.get<Bags>("http://localhost:3000/Bags/"+id);
  }
}
