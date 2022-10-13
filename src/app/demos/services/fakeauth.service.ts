import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  isConnected: boolean = false;

  constructor() { }

  connect(){
    this.isConnected = true;
  }

  disconnect(){
    this.isConnected = false;
  }
}
