import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import {UsersService}from '../services/users.service'
import {User}from '../Models/User'

import { Router } from '@angular/router';
import { GlobalService } from "../global.service";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-erregistratu',
  templateUrl: './erregistratu.page.html',
  styleUrls: ['./erregistratu.page.scss'],
})
export class ErregistratuPage implements OnInit {
name:string="";email:string="";password:string="";

  constructor(public navCtrl: NavController,
    private usersService:UsersService, private router: Router, public global: GlobalService, private storage: Storage) {}

    addUser(){
      var open : boolean = true
      var user = new User;
      user.name=this.name;
      user.email=this.email;
      user.password=this.password;
      this.usersService.onComprobarUsuarios().subscribe(names =>{
        names.forEach(name=>{
          if(user.name == name.name){
            open=false
            alert("Erabiltzaile hau jadanik existitzen da")
          }else if(user.email == name.email){
            open=false
            alert("Email hau jadanik erabiltzen da")
          }
        })
        if(open){
          this.usersService.onCreateUsuario(user).subscribe(result =>{
            this.usersService.onGetUsuario(user).subscribe(res =>{
          this.name
          this.password="";
          this.email="";
    
          setTimeout(function(){
            location.reload();
        }, 500);
            })
            
          })
        }
      })
      

      
      
  }

  async ngOnInit() {
    var username = await this.storage.get('name');
    if(username != null){
      this.router.navigateByUrl('/home');
    }
  }

}
