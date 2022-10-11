import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css'],
})
export class Demo2Component implements OnInit {
  inputValue!: string;
  numberValue!: number;
  bool!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.inputValue = 'Valeurs par défaut';
    this.numberValue = 42;
    this.bool = false; //rajouter this pour dire qu'on va chercher la propriété de l'instance de classe
  }
}
