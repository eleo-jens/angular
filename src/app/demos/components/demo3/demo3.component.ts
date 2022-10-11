import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css'],
})
export class Demo3Component implements OnInit {
  variable: string = 'Hello';
  texte: string = 'Hello';

  constructor() {}

  ngOnInit(): void {}

  maMethode(texte: string): void {
    this.variable = texte;
  }

  changeValue(event: Event): void {
    console.log((event.target as HTMLInputElement).value);
    this.texte = (event.target as HTMLInputElement).value; //la target de l'event est un HTMLInputElement (c'est un casting) pour pouvoir récupérer la valeur
  }
}
