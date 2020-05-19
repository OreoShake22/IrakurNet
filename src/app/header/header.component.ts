import { Component, OnInit } from '@angular/core';

import { GlobalService } from "src/app/global.service";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public global: GlobalService, public storage: Storage) { }

  //globalId = this.global.globalId;
  //globalUsername = this.global.globalUsername;
  username;

  ngOnInit() {}

  IonViewWillEnter(){
    (async () => {
      this.username = await this.storage.get('name');
  
  })();
  }
  logout(){
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
  }

}
