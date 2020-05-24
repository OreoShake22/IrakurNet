import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './../services/posts.service';
import { Post } from './../Models/Post';
import { CommentService } from './../services/comment.service';
import { Comment } from './../Models/comment';
import { Location } from '@angular/common';

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
    public platform: Platform,
    private commentService: CommentService) { }

  testua: string = "";
  irudiaDa = true;
  bideoaDa = false;
  comments: Comment[] = [{ id: 0, idAutor: 0, idPost: 0, texto: '', createdData: '' }];
  post: Post = {
    id: 0,
    idAutor: 0,
    idKategoria: 0,
    kategoria: '',
    name: '',
    createdData: '',
    title: '',
    imgurl: ''
  };
  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.onGetPost(id).subscribe(post => {
      console.log(post);
      this.post = post[0];
      document.getElementsByClassName("irudia")[0].setAttribute("src", post.imgurl);

      this.getComment();

    }, error => console.log("Error :: " + error));
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.getPost();
  }

  //añadir Post
  addComment() {
    var comment = new Comment();



    comment.texto = this.testua;

    comment.idAutor = this.post.idAutor;
    comment.idPost = this.post.id;
    this.commentService.onCreateComment(comment)
    console.log(comment);



    var testua = <HTMLInputElement>document.getElementById("ltestua");
    testua.value = "";
    location.reload();
  }

  getComment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.commentService.onGetComment(this.post.id).subscribe(comment => {
      console.log("COMMENTS", comment);
      var coms = [];
      for (var i = 0; i < comment.length; i++) {
        coms.push(comment[i]);
      }
      this.comments = coms;
      console.log(this.comments);

    }, error => console.log("Error :: " + error));
  }

}
