import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'
import { User } from '../Models/User'

import { Router } from '@angular/router';
import { GlobalService } from "../global.service";
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private usersService: UsersService, private router: Router, public global: GlobalService, private storage: Storage) { }
  name: string = ""; password: string = "";
  user;
  async ngOnInit() {
    var username = await this.storage.get('name');
    if (username != null) {
      this.router.navigateByUrl('/home');
    }
  }

  LogIn() {
    if (this.name == "" || this.password == "") {
      alert("porfavor rellene los datos")
    } else {
      var user = new User;
      user.name = this.name;
      user.password = this.password;
      this.usersService.onGetUsuario(user).subscribe(response => {
        if (response[0].id != null) {
          this.name = "";
          this.password = "";
          location.reload();
        }

      });
    }
  }

  
}
