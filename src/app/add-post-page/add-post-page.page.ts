import { Component, OnInit } from '@angular/core';
import {KategoriakService}from '../services/kategoriak.service'
@Component({
  selector: 'app-add-post-page',
  templateUrl: './add-post-page.page.html',
  styleUrls: ['./add-post-page.page.scss'],
})
export class AddPostPagePage implements OnInit {

  constructor(private kategoriaservice:KategoriakService) { }

  ngOnInit() {
    
  }

  addKat(){
    this.kategoriaservice.onCreateKategoria()
  }
}
