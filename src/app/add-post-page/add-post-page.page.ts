import { Component, OnInit } from '@angular/core';
import {KategoriakService}from '../services/kategoriak.service'
import {Kategoria}from '../Models/kategoria'
import {PostService}from '../services/posts.service'
import {Post}from '../Models/Post'

import { GlobalService } from "../global.service";
@Component({
  selector: 'app-add-post-page',
  templateUrl: './add-post-page.page.html',
  styleUrls: ['./add-post-page.page.scss'],
})
export class AddPostPagePage implements OnInit {
kategoriak:Kategoria[];
posts:Post[];
  constructor(private kategoriaservice:KategoriakService, private postService:PostService, public global: GlobalService) { 
    
  }

  myInput:string="";
  titulo:string="";skat:string="";testua:string="";media:string="";
  ngOnInit() {
    console.log(  this.global.myGlobalVar)
    this.loadKategoriak()
    //this.getKategoriabyId(1)
  }

  //añadir
  addKat(){
    this.kategoriaservice.onCreateKategoria(this.myInput)
    console.log(this.myInput)

    var izena = <HTMLInputElement>document.getElementById("fizena");
      izena.value = "";
  }
  //cargar todos
  loadKategoriak(){
    this.kategoriaservice.onGetKategoriak().subscribe(res=>{this.kategoriak=res;
      //this.updateKategoria(res[0])
      for(var i=0; i<res.length; i++){
        var selector = <HTMLFormElement> document.getElementById("fkat");
        var newoption = document.createElement("option");
        newoption.text = res[i].name;
        newoption.value = res[i].name;
        selector.add(newoption);
      }

    })
  }
  //actualizar
  updateKategoria(kategoria:Kategoria,name:string){
    console.log(kategoria.name)
    kategoria.name=name
    this.kategoriaservice.onUpdateProduct(kategoria)
  }
//obetener la linea indicada
  getKategoriabyId(id){
    this.kategoriaservice.onGetKategoria(id).subscribe(res=>{console.log(res)})
  }

    //añadir Post
    addPost(){
      var post = new Post;
      post.title = this.titulo;
      post.idKategoria = 1;
      post.imgurl = this.media;

      this.postService.onCreatePost(post)
      console.log(post);

      

      var titulo = <HTMLInputElement>document.getElementById("ftitulo");
      titulo.value = "";
      var testua = <HTMLInputElement>document.getElementById("ltestua");
      testua.value = "";
      var media = <HTMLInputElement>document.getElementById("fmedia");
      media.value = "";
    }
}
