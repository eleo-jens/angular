import { Component, OnInit } from '@angular/core';
import { FakeauthService } from '../../services/fakeauth.service';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.css']
})
export class Demo9Component implements OnInit {

  isConnected!: boolean;

  constructor(
    private _AuthService: FakeauthService
  ) { }

  ngOnInit(): void {
    this.isConnected = this._AuthService.isConnected;
  }

  login(){
    this._AuthService.connect();
    this.isConnected = this._AuthService.isConnected;
  }

  logout(){
    this._AuthService.disconnect();
    this.isConnected = this._AuthService.isConnected;
  }

}
