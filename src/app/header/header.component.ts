import { Component, OnInit } from '@angular/core';

import { GlobalService } from "src/app/global.service";
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public global: GlobalService, public storage: Storage, private router: Router) { }

  //globalId = this.global.globalId;
  //globalUsername = this.global.globalUsername;
  username;

  async ngOnInit() {
    this.username = await this.storage.get('name');
      console.log("HEADER",this.username);
  }

  IonViewWillEnter(){
    this.username =  this.storage.get('name');
    console.log("HEADER",this.username);

}

  logout(){
    this.storage.clear().then(() => {
      console.log('all keys cleared');
      location.reload();
      this.router.navigateByUrl('/home');
    });
  }

}
