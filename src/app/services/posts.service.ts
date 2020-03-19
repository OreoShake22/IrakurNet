import { Injectable } from '@angular/core';
import { RestService } from  './../providers/rest.service';
import { NavController } from '@ionic/angular';
import { Post } from '../Models/Post'
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private  posts : Post[] = [];
  constructor(public  navCtrl: NavController, public  restProvider: RestService) { 
    this.restProvider.getPost().subscribe((posts : Post[])=>{

      this.posts = posts;
      
      });
  }
  onGetKategoriak(){

    return this.restProvider.getKategoriak()
  }

  onGetKategoria(id){

    return this.restProvider.getKategoriaById(id)
  }

  onCreateKategoria(data) {

    this.restProvider.addKategoria(data).subscribe();
  }

  onUpdateProduct(post) {
    this.restProvider.updateKategoria(post).subscribe((updatedPost) => {
      
    });
  }

  onRemoveProduct(post) {
    this.restProvider.deleteKategoriaById(post.id).subscribe(() => {
      this.posts = this.posts.filter((e) =>  e.id !== post.id);
    });
  }
}
