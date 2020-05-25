import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/posts.service';
import { Post } from '../Models/Post';
import { KategoriakService } from '../services/kategoriak.service';
import { GlobalService } from '../global.service';
import { Kategoria } from '../Models/kategoria';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.page.html',
  styleUrls: ['./update-post.page.scss'],
})
export class UpdatePostPage implements OnInit {
  id
  userId;
  idAutor = 0;
  post:Post;
  
  titulo: string = "";idKategoria=0; media: string = "";
  constructor(private route: ActivatedRoute,private kategoriaservice: KategoriakService, private postService: PostService, private router: Router, public global: GlobalService, private storage: Storage) { }
  kategoriak: Kategoria[];
  async ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.userId = await this.storage.get('id')
    if (this.userId == null) {
      this.router.navigateByUrl('/home');
    }
    this.postService.onGetPost(this.id).subscribe(result => {
      this.post = result[0]
      console.log(this.post)
      this.idAutor = this.post.idAutor;
      this.titulo = this.post.title;
      this.media = result[0].imageUrl;
      this.idKategoria=this.post.idKategoria
      this.loadKategoriak()
    
    
    })

  }
  loadKategoriak() {
    var index=0
    this.kategoriaservice.onGetKategoriak().subscribe(res => {
      this.kategoriak = res;
        //this.updateKategoria(res[0])
        for (var i = 0; i < res.length; i++) {
          if(res[i].id == this.idKategoria){
            index=i
          }
          var selector = <HTMLFormElement>document.getElementById("fkat");
          var newoption = document.createElement("option");
          newoption.text = res[i].name;
          newoption.value = res[i].name;
          selector.add(newoption);
        }
        selector.selectedIndex = index;
      })
  }

  PostUpdate(){
    var selector = <HTMLFormElement>document.getElementById("fkat");
    this.post.idKategoria=this.kategoriak[selector.selectedIndex].id
    this.post.imageUrl=this.media;
    this.post.title=this.titulo;
    this.postService.onUpdatePost(this.post).subscribe(result=>{
      //location.reload();
      this.router.navigateByUrl('/home');
    })
  }

}
