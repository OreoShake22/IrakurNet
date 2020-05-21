import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './../services/posts.service';
import { Post } from './../Models/Post';
import { Location} from '@angular/common';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {

  constructor(private route: ActivatedRoute, 
    private postService: PostService, 
    private location: Location,
    public platform: Platform) { }

  post: Post ;  
  idKategoria = 0; name = ''; updated_at = ''; title = ''; imageUrl = '';
  getPost(): void {     
    const id = +this.route.snapshot.paramMap.get('id');       	
    this.postService.onGetPost(id)          		
      .subscribe(post => {
        this.idKategoria = post.idKategoria;
        this.name = post.name;
        this.updated_at = post.createdData;
        this.title = post.title;
        this.imageUrl = post.imgurl;

      },          					  				  error => console.log("Error :: " + error));  	
    }  

    goBack(): void { 
      this.location.back(); 
    }
    
  ngOnInit() {    
    
  }
  ionViewWillEnter(){
    this.getPost();  
  }

}
