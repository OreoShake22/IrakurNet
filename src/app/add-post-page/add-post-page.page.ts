import { Component, OnInit } from '@angular/core';
import {KategoriakService}from '../services/kategoriak.service'
import {Kategoria}from '../Models/kategoria'
@Component({
  selector: 'app-add-post-page',
  templateUrl: './add-post-page.page.html',
  styleUrls: ['./add-post-page.page.scss'],
})
export class AddPostPagePage implements OnInit {
kategoriak:Kategoria[]
  constructor(private kategoriaservice:KategoriakService) { 
    
  }

  myInput:string=""
  ngOnInit() {
    this.loadKategoriak()
    //this.getKategoriabyId(1)
  }

  //añadir
  addKat(){
    this.kategoriaservice.onCreateKategoria(this.myInput)
    console.log(this.myInput)
  }
  //cargar todos
  loadKategoriak(){
    this.kategoriaservice.onGetKategoriak().subscribe(res=>{this.kategoriak=res;
      //this.updateKategoria(res[0])

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
}
