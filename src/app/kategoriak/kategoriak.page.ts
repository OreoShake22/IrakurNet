import { Component, OnInit } from '@angular/core';

import {KategoriakService}from '../services/kategoriak.service'
import {Kategoria}from '../Models/kategoria'
import {PostService}from '../services/posts.service'
import {Post}from '../Models/Post'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kategoriak',
  templateUrl: './kategoriak.page.html',
  styleUrls: ['./kategoriak.page.scss'],
})
export class KategoriakPage implements OnInit {

  constructor(private route: ActivatedRoute, private kategoriaservice:KategoriakService, private postService:PostService) { }

  ngOnInit() {
  }

  posts: Post[] = [{id : 0,
    idAutor: 0,
    idKategoria : 0,
    kategoria : '',
    name : '',
    createdData : '',
    title : '',
    imgurl : ''}
  ];
  textoBuscar = '';
  kategoriak;

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


  getPostsByKategoria(){
    const id = +this.route.snapshot.paramMap.get('id');   
    //this.postService.onGetPostsByKat().subscribe(res=>{
    //  this.posts = res;
    //})
  }
}
