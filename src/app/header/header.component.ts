import { Component, OnInit } from '@angular/core';

import { GlobalService } from "src/app/global.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public global: GlobalService) { }

  globalId = this.global.globalId;
  globalUsername = this.global.globalUsername;

  ngOnInit() {}

}
