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

    irudiaDa = true;
    bideoaDa = false;
  post: Post ={
    id : 0,
    idAutor: 0,
    idKategoria : 0,
    kategoria : '',
    name : '',
    createdData : '',
    title : '',
    imgurl : ''
  };  
  getPost(): void {     
    const id = +this.route.snapshot.paramMap.get('id');       	
    this.postService.onGetPost(id).subscribe(post => {
      console.log(post);
        this.post = post[0];
        document.getElementsByClassName("irudia")[0].setAttribute("src", post.imgurl);

      }, error => console.log("Error :: " + error));  	
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
