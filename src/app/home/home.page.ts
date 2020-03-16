import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Http } from '@angular/http';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public http: Http, public platform: Platform) {
    console.log(platform.is('android'));
  }

  posts;
  irudiaDa = true;
  bideoaDa = false;

  /*ionViewWillEnter() {

    let url = "https://api.reddit.com/r/IdiotsInCars/.json";

    this.http.get(url).pipe(map(res => res.json())).subscribe(data => {

      this.posts = data;
      console.log(data);
      for (var i = 0; i < data.data.children.length; i++) {
        var children = data.data.children[i];

        var primerPostTitle = children.data.title;
        try {
          var primerPostImg = children.data.media.oembed.thumbnail_url;
        }

        catch{
          try {
            var primerPostImg = children.data.url;
            
          }
          catch{
            var primerPostImg = children.data.thumbnail;
          }
        }


        console.log(primerPostImg);
        document.getElementById("post1").innerHTML += "<h2>" + primerPostTitle + "</h2>" + "<img src='" + primerPostImg + "'/>"


      }
    });
  }*/

  ionViewWillEnter() {
    
  }
  report(){
    var r = confirm("Haurreko posta reportatu nahi duzu?");
    if (r ) {
      alert("Posta reportatu duzu, gure administrariek ahal dutenean begiratuko dute");
    }
  }
}
