import { Component, OnInit } from '@angular/core';
import { KategoriakService } from '../services/kategoriak.service'
import { Kategoria } from '../Models/kategoria'
import { PostService } from '../services/posts.service'
import { Post } from '../Models/Post'

import { Router } from '@angular/router';
import { GlobalService } from "../global.service";
import { Storage } from '@ionic/storage';

import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-add-post-page',
  templateUrl: './add-post-page.page.html',
  styleUrls: ['./add-post-page.page.scss'],
})
export class AddPostPagePage implements OnInit {
  kategoriak: Kategoria[];
  posts: Post[];
  constructor(private kategoriaservice: KategoriakService, private postService: PostService, private router: Router,
    public global: GlobalService, private storage: Storage, public toastController: ToastController) {

  }

  myInput: string = "";
  idAutor = 0
  titulo: string = ""; skat: string = ""; media: string = "";
  async ngOnInit() {
    var username = await this.storage.get('name');
    this.idAutor = await this.storage.get('id')
    if (username == null) {
      this.router.navigateByUrl('/home');
    }
    console.log(this.global.globalId)
    this.loadKategoriak()
    //this.getKategoriabyId(1)
  }

  //añadir
  addKat() {
    this.kategoriaservice.onCreateKategoria(this.myInput)
    console.log(this.myInput);
    
    var izena = <HTMLInputElement>document.getElementById("fizena");
    izena.value = "";
    setTimeout(function(){
      location.reload()
  }, 2000);
  }
  //cargar todos
  loadKategoriak() {
    this.kategoriaservice.onGetKategoriak().subscribe(res => {
    this.kategoriak = res;
      //this.updateKategoria(res[0])
      for (var i = 0; i < res.length; i++) {
        var selector = <HTMLFormElement>document.getElementById("fkat");
        var newoption = document.createElement("option");
        newoption.text = res[i].name;
        newoption.value = res[i].name;
        selector.add(newoption);
      }

    })
  }
  //actualizar
  updateKategoria(kategoria: Kategoria, name: string) {
    console.log(kategoria.name)
    kategoria.name = name
    this.kategoriaservice.onUpdateProduct(kategoria)
  }
  //obetener la linea indicada
  getKategoriabyId(id) {
    this.kategoriaservice.onGetKategoria(id).subscribe(res => { console.log(res) })
  }

  //añadir Post
  addPost() {
    var post = new Post;

    var e = <HTMLSelectElement>document.getElementById("fkat");
    this.kategoriak.forEach(kategoria => {
      if (e.options[e.selectedIndex].value == kategoria.name) {
        post.idKategoria = kategoria.id;
      }
    });


    post.title = this.titulo;

    post.imageUrl = this.media;
    post.idAutor = this.idAutor
    try{
    this.postService.onCreatePost(post)
    console.log(post);
    this.presentToast("Posta sortuta");
    setTimeout(function(){
      this.router.navigateByUrl('/home');
  }, 1000);
}catch(error){
  console.log(error)
}


    var titulo = <HTMLInputElement>document.getElementById("ftitulo");
    titulo.value = "";
    var media = <HTMLInputElement>document.getElementById("fmedia");
    media.value = "";
  }
  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }
}
