import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from  'rxjs/Observable';

import  'rxjs/add/operator/catch';
import 'rxjs/Rx'
import { map } from 'rxjs/operators';
import { Product } from '../Models/model'

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient, private product:Product) { }

  // Sending a GET request to /products

  // public  getProducts(): Observable<Product[]> {

  //   return  this.httpClient.get(this.baseUrl + '/products').pipe(map(products  => {})).subscribe(result => {});
  // }
}

  // Sending a POST request to /products

  public createProduct(product: Product) {

  }

  // Sending a GET request to /products/:id

  public getProductById(productId: number) {

  }

  // Sending a PUT request to /products/:id

  public updateProduct(product: Product) {

  }

  // Sending a DELETE request to /products/:id

  public deleteProductById(productId: number) {

  }

}