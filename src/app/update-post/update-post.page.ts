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
  titulo:string="";skat:string="";media:string="";
  constructor(private route: ActivatedRoute,private postService: PostService) { }

  ngOnInit() {
    this.id= +this.route.snapshot.paramMap.get('id');
    this.postService.onGetPost(this.id).subscribe(result=>{
        this.post = result[0];
        console.log(result[0])
        this.idAutor=this.post.idAutor;
        this.titulo=this.post.title;
        this.media=this.post.imgurl;
        console.log(this.post.imgurl)
        console.log(this.media)
        var img = <HTMLInputElement>document.getElementById("fmedia");
        img.value = "";
    })

  }

}
