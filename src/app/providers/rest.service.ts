import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/Rx'
import { map } from 'rxjs/operators';
import { Product } from '../Models/model'

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  // Sending a GET request to /products

  public getProducts(): Observable<Product[]> {

    return this.httpClient

      .get<Product[]>(this.baseUrl + '/products')

      .map(products => {

        return products.map((product) => new Product(product));

      })
  }


  // Sending a POST request to /products

  public createProduct(product: Product): Observable<Product> {
    return this.httpClient

      .post(this.baseUrl + '/products', product)

      .map(response => {

        return new Product(response);

      })
  }

  // Sending a GET request to /products/:id

  public getProductById(productId: number): Observable<Product> {

    return this.httpClient

      .get(this.baseUrl + '/products/' + productId)

      .map(response => {

        return new Product(response);

      })
  }

  // Sending a PUT request to /products/:id

  public updateProduct(product: Product): Observable<Product> {

    return this.httpClient

      .put(this.baseUrl + '/products/' + product.id, product)

      .map(response => {

        return new Product(response);
      })
  }

  // Sending a DELETE request to /products/:id

  public deleteProductById(productId: number) {
    return this.httpClient

      .delete(this.baseUrl + '/products/' + productId)
  }

}