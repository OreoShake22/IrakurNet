import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/Rx'
import { map, tap } from 'rxjs/operators';
import { Product } from '../Models/model'
import { Kategoria } from '../Models/kategoria'
import { Post } from '../Models/Post'
import { User } from '../Models/User'

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl: string = "http://localhost:81/api";

  constructor(private httpClient: HttpClient) { }

  // Sending a GET request to /products

//#region products
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

//#endregion

//#region kategoriak

  // Sending a GET request to /kategoriak

  public getKategoriak(): Observable<Kategoria[]> {

    return this.httpClient

      .get<Kategoria[]>(this.baseUrl + '/kategoriak')

      .map(kategoriak => {

        return kategoriak.map((kategoria) => new Kategoria(kategoria));

      })
  }


  // Sending a POST request to /kategoriak

  addKategoria(data) {
    return this.httpClient.post(this.baseUrl + '/kategoriak',
      { name: data }).pipe(
        tap(res => {
          return res;
        }))
}

  // Sending a GET request to /kategoriak/:id

  public getKategoriaById(kategoriaId: number): Observable<Kategoria> {

    return this.httpClient

      .get(this.baseUrl + '/kategoriak/' + kategoriaId)

      .map(response => {

        return new Kategoria(response);

      })
  }

  // Sending a PUT request to /kategoriak/:id

  public updateKategoria(kategoria: Kategoria): Observable<Kategoria> {

    return this.httpClient

      .put(this.baseUrl + '/kategoriak/' + kategoria.id, kategoria)

      .map(response => {

        return new Kategoria(response);
      })
  }

  // Sending a DELETE request to /kategoriak/:id

  public deleteKategoriaById(kategoriaId: number) {
    return this.httpClient

      .delete(this.baseUrl + '/kategoriak/' + kategoriaId)
  }  
//#endregion kategoriak

//#region Posts

public getPost(): Observable<Post[]> {

  return this.httpClient

    .get<Post[]>(this.baseUrl + '/post')

    .map(post => {

      return post.map((post) => new Post(post));

    })
}



addPost(data:Post) {
  data.idAutor=1
  return this.httpClient.post(this.baseUrl + '/post',
    { idKategoria:data.idKategoria,idAutor:data.idAutor,title:data.title,imageUrl:data.imgurl }).pipe(
      tap(res => {
        return res;
      }))
}

public getPostById(postId: number): Observable<Post> {

  return this.httpClient

    .get(this.baseUrl + '/post/' + postId)

    .map(response => {

      return new Post(response);

    })
}


public updatePost(post: Post): Observable<Post> {

  return this.httpClient

    .put(this.baseUrl + '/post/' + post.id, post)

    .map(response => {

      return new Post(response);
    })
}


public deletePostById(PostId: number) {
  return this.httpClient

    .delete(this.baseUrl + '/post/' + PostId)
}  

//#endregion

//#region User

addUser(data:User) {
  return this.httpClient.post(this.baseUrl + '/user',
    { name:data.name,email:data.email,password:data.password }).pipe(
      tap(res => {
        return res;
      }))
}

//#endregion
}