import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import {KategoriakService}from '../services/kategoriak.service'
import {Kategoria}from '../Models/kategoria'
import {PostService}from '../services/posts.service'
import {Post}from '../Models/Post'
import {UsersService}from '../services/users.service'
import {User}from '../Models/User'

import { LoadingController } from '@ionic/angular';

import { GlobalService } from "../global.service";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public http: Http, public platform: Platform, private kategoriaservice:KategoriakService, private postService:PostService
    , public loadingController: LoadingController, public global: GlobalService, public storage: Storage, private userService:UsersService) {
    console.log(platform.is('android'));
  }

  posts;
  kategoriak;
  users;
  irudiaDa = true;
  bideoaDa = false;

  /*ionViewWillEnter() {

    let url = "https://api.reddit.com/r/IdiotsInCars/.json";

    this.http.get(url).pipe(map(res => res.json())).subscribe(data => {

      this.posts = data;
      console.log(data);
      for (var i = 0; i < data.data.children.length; i++) {
        var children = data.data.children[i];

        var primerPostTitle = children.data.title;
        try {
          var primerPostImg = children.data.media.oembed.thumbnail_url;
        }

        catch{
          try {
            var primerPostImg = children.data.url;
            
          }
          catch{
            var primerPostImg = children.data.thumbnail;
          }
        }


        console.log(primerPostImg);
        document.getElementById("post1").innerHTML += "<h2>" + primerPostTitle + "</h2>" + "<img src='" + primerPostImg + "'/>"


      }
    });
  }*/

  async ionViewWillEnter() {
    setTimeout(() => { this.getKategoriak();
      this.getPostak();  }, 500);
      var searchValue = <HTMLInputElement>document.getElementById("searchBar");
    //searchValue.value = "Cambiado";
    console.log("id:", await this.storage.get("id"));
    console.log("name:", await this.storage.get("name"));
    
    
  }
  ionicViewDidEnter() {
    setTimeout(() => {   }, 500);
    
}
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  report(){
    var r = confirm("Haurreko posta reportatu nahi duzu?");
    if (r ) {
      alert("Posta reportatu duzu, gure administrariek ahal dutenean begiratuko dute");
    }
  }
  getPostak(){
    this.postService.onGetPosts().subscribe(res=>{
      this.posts = res;
    })
  }
  getKategoriak(){
    this.kategoriaservice.onGetKategoriak().subscribe(res=>{
      this.kategoriak = res;
    })
  }
  getKategoriabyId(id){
    this.kategoriaservice.onGetKategoria(id).subscribe(res=>{console.log(res)})
  }

  getUsers(){
    this.userService.onGetUsuarios().subscribe(res=>{
      this.users = res;
    })
  }
}
