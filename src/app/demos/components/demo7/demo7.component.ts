import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.css']
})
export class Demo7Component implements OnInit {

  isToggled!: boolean;
  liste!: string[];
  inputValue!: string;

  constructor() { }

  ngOnInit(): void {
    this.isToggled = true;
    this.liste = [
      "pomme","poire","ananas","fraise"
    ]
    this.inputValue = "";
  }

  toggle() {
    this.isToggled = !this.isToggled;
  }

}
