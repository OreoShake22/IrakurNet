import { Component, OnInit } from '@angular/core';
import {UsersService}from '../services/users.service'
import {User}from '../Models/User'

import { Router } from '@angular/router';
import { GlobalService } from "../global.service";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private usersService:UsersService, private router: Router, public global: GlobalService, private storage: Storage) { }
  name:string="";password:string="";
  user;
  ngOnInit() {
  }

  LogIn(){
    var user = new User;
    user.name=this.name;
    user.password=this.password;
    this.usersService.onGetUsuario(user).subscribe(res=>{
      this.user = res;
      console.log(res);
      //this.global.globalId = (res.id).toString();
      this.storage.set('id', res.id);
      //this.global.globalUsername = res.name;
      this.storage.set('name', this.name);
      this.storage.set('name', this.name);

    })

    var name = <HTMLInputElement>document.getElementById("name");
      name.value = "";
      var password = <HTMLInputElement>document.getElementById("password");
      password.value = "";

      
      setTimeout(function(){
    }, 2000);
      this.router.navigate(['/home'])
  }
}
