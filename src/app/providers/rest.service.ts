import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/Rx'
import { map, tap } from 'rxjs/operators';
import { Product } from '../Models/model'
import { Kategoria } from '../Models/kategoria'
import { Post } from '../Models/Post'
import { User } from '../Models/User'
import { Comment } from '../Models/comment'

import { GlobalService } from "../global.service";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl: string = "http://localhost:81/api";

  constructor(private httpClient: HttpClient, public global: GlobalService, private storage: Storage) { }

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


public getPostByKategoria(idKategoria): Observable<Post[]> {

  return this.httpClient

    .get<Post[]>(this.baseUrl + '/post/'+idKategoria+'/kategoria')

    .map(post => {
      return post.map((post) => new Post(post));

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
        //this.global.globalId = data.id.toString();
        //this.global.globalUsername = data.name;
        return res;
      }))
}

getUsuarioLogIn(data:User) {
  console.log(data)
  let urlSearchParams  = {
    'name': data.name,
    'password': data.password
};
  return this.httpClient

    .get(this.baseUrl + '/user/' + {name:data.name,password:data.password})

    .map(response => {
      //this.global.globalId = data.id.toString();
      //this.global.globalUsername = data.name;

      return new User(response);

    })
}

public getUserName(): Observable<User[]> {

  return this.httpClient

    .get<Post[]>(this.baseUrl + '/user')

    .map(user => {
      return user.map((user) => new User(user));

    })
}

public getUsers(data): Observable<User[]> {

  return this.httpClient

    .get<User[]>(this.baseUrl + '/user')

    .map(user => {
      user.forEach(u => {
        if(u.name == data.name && u.password == data.password){
          this.storage.set('name', u.name);
          this.storage.set('id', u.id);
        }
      });
      return user.map((user) => new User(user));

    })
}





//#endregion

//#region Comments

public getComment(): Observable<Comment[]> {

  return this.httpClient

    .get<Comment[]>(this.baseUrl + '/comment')

    .map(comment => {
      return comment.map((comment) => new Comment(comment));

    })
}



addComment(data:Comment) {
  return this.httpClient.post(this.baseUrl + '/comment',
    { idPost:data.idPost,idAutor:data.idAutor,texto:data.texto}).pipe(
      tap(res => {
        return res;
      }))
}

public getCommentById(commentId: number): Observable<Comment[]> {

  return this.httpClient

    .get<Comment[]>(this.baseUrl + '/comment/' + commentId)

    .map(response => {

      return response.map((response) => new Comment(response));

    })
}


public updateComment(comment: Comment): Observable<Comment> {

  return this.httpClient

    .put(this.baseUrl + '/comment/' + comment.id, comment)

    .map(response => {

      return new Comment(response);
    })
}


public deleteCommentById(commentId: number) {
  return this.httpClient

    .delete(this.baseUrl + '/comment/' + commentId)
}  

//#endregion
}