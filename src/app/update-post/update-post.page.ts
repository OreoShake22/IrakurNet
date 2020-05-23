import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.page.html',
  styleUrls: ['./update-post.page.scss'],
})
export class UpdatePostPage implements OnInit {
  id 
  idAutor=0
  titulo:string="";skat:string="";testua:string="";media:string="";
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.id= +this.route.snapshot.paramMap.get('id');  
  }

}
