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
  onGetPosts(){

    return this.restProvider.getPost()
  }

  onGetPost(id){

    return this.restProvider.getPostById(id)
  }

  onGetPostbyKategoria(id){

    return this.restProvider.getPostByKategoria(id)
  }

  onCreatePost(data) {

    this.restProvider.addPost(data).subscribe();
  }

  onUpdatePost(post) {
    this.restProvider.updatePost(post).subscribe((updatedPost) => {
      
    });
  }

  onRemovePost(post:Post) {
    this.restProvider.deletePostById(post).subscribe(() => {
      this.posts = this.posts.filter((e) =>  e.id !== post.id);
    });
  }
}
