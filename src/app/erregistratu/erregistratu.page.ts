import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import {UsersService}from '../services/users.service'
import {User}from '../Models/User'
@Component({
  selector: 'app-erregistratu',
  templateUrl: './erregistratu.page.html',
  styleUrls: ['./erregistratu.page.scss'],
})
export class ErregistratuPage implements OnInit {
name:string="";email:string="";password:string="";

  constructor(public navCtrl: NavController,
    private usersService:UsersService) {}

    addUser(){
      var user = new User;
      user.name=this.name;
      user.email=this.email;
      user.password=this.password;
      this.usersService.onCreateUsuario(user)
      console.log(user)
      
  }

  ngOnInit() {
  }

}
