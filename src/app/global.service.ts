import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public globalId: string = "-1";
  public globalUsername: string;

  constructor() { }
}
