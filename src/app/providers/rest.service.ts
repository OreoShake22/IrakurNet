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
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl: string = "http://localhost:81/api";

  constructor(private httpClient: HttpClient, public global: GlobalService, private storage: Storage,
    public toastController: ToastController) { }

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
        tap(res => {try{
          this.presentToast("Kategoria sortuta")
          return res;
        }catch(error){
          console.log("Error",error)
        }
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
    { idKategoria:data.idKategoria,idAutor:data.idAutor,title:data.title,imageUrl:data.imageUrl }).pipe(
      tap(res => {try{
        this.presentToast("Posta sortuta")
        return res;
      }catch(error){
        console.log(error);
      }
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
console.log(post)
  return this.httpClient

    .put(this.baseUrl + '/post/' + post.id, post)

    .map(response => {

      return new Post(response);
    })
}


public deletePostById(post:Post) {
  return this.httpClient

    .delete(this.baseUrl + '/post/' + post)
}  

//#endregion

//#region User

addUser(data:User) {
  
  return this.httpClient.post(this.baseUrl + '/user',
    { name:data.name,email:data.email,password:data.password }).pipe(
      tap(res => {try{
        //this.global.globalId = data.id.toString();
        //this.global.globalUsername = data.name;
        return res;
      } catch (error) {
        this.presentToast("Sartutako datuak gaizki daude");
        return error;
      }
      }))
}

getUsuarioLogIn(data:User): Observable<User> {
  let urlSearchParams  = {
    'name': data.name,
    'password': data.password
};
  return this.httpClient

    .get<User>(this.baseUrl + '/user/login/' + data.name+'/'+data.password)

    .map(user => {try{
      console.log(user[0])
      console.log(user[0].id)
      console.log(user[0].name)
      this.storage.set('name', user[0].name);
      this.storage.set('id', user[0].id);
      //this.global.globalId = data.id.toString();
      //this.global.globalUsername = data.name;
      return new User(user);
} catch (error) {
    this.presentToast("Sartutako datuak gaizki daude");
    return error;
  }
    })
  
}

public getUserName(): Observable<User[]> {

  return this.httpClient

    .get<Post[]>(this.baseUrl + '/user/names')

    .map(user => {
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

async presentToast(text) {
  const toast = await this.toastController.create({
    message: text,
    duration: 2000,
    position: 'middle'
  });
  toast.present();
}
}