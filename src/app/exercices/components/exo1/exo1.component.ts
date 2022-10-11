import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.css']
})
export class Exo1Component implements OnInit {

  time!: number;
  isClickable!: boolean;
  timer!:any;

  constructor() { }

  ngOnInit(): void {
    this.time = 0;

  }

  start(){
    console.log("Start");
    this.timer = setInterval(() => {
      this.time++;
    },1000);
  }

  pause(){
    console.log("Pause");
    clearInterval(this.timer);
    this.timer = null;
  }

  reset(){
    console.log("Stop");
    this.time = 0;
    this.pause();
  }

}
