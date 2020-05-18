import { Component, OnInit } from '@angular/core';
import {UsersService}from '../services/users.service'
import {User}from '../Models/User'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private usersService:UsersService) { }
name:string="";password:string="";
  ngOnInit() {
  }

  LogIn(){
    var user = new User;
    user.name=this.name;
    user.password=this.password;
    this.usersService.onGetUsuario(user).subscribe(res=>{console.log(res)})
  }
}
