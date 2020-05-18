import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public globalId: string;
  public globalUsername: string;

  constructor() { }
}
