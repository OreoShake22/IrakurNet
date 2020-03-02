import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {

  constructor(public http: Http) { }

  callApi() {

    let url = "https://api.reddit.com/r/aww/.json";

    this.http.get(url).pipe(map(res => res.json())).subscribe(data => {

      console.log(data);

    });
  }


}
