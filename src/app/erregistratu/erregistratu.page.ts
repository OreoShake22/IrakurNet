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
      var user = new User;
      user.name=this.name;
      user.email=this.email;
      user.password=this.password;
      this.usersService.onCreateUsuario(user).subscribe(result =>{
        this.usersService.onGetUsuario(user).subscribe(res =>{
          var name = <HTMLInputElement>document.getElementById("name");
      name.value = "";
      var password = <HTMLInputElement>document.getElementById("password");
      password.value = "";
      var email = <HTMLInputElement>document.getElementById("email");
      email.value = "";

      location.reload();
        })
        
      })

      
      
  }

  async ngOnInit() {
    var username = await this.storage.get('name');
    if(username != null){
      this.router.navigateByUrl('/home');
    }
  }

}
