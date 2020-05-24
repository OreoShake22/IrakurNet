import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/posts.service';
import { Post } from '../Models/Post';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.page.html',
  styleUrls: ['./update-post.page.scss'],
})
export class UpdatePostPage implements OnInit {
  id 
  idAutor=0
  titulo:string="";skat:string="";media:string="";
  constructor(private route: ActivatedRoute,private postService: PostService) { }

  ngOnInit() {
    this.id= +this.route.snapshot.paramMap.get('id');
    this.postService.onGetPost(this.id).subscribe(result=>{
        var post:Post = result[0]
        console.log(post)
        this.idAutor=post.idAutor;
        this.titulo=post.title;
        this.media=post.imgurl;
        console.log(post.imgurl)
        console.log(this.media)
    })

  }

}
