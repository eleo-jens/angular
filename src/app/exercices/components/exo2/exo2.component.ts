import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.css']
})
export class Exo2Component implements OnInit {

  article!: string;
  liste!: string[];

  constructor() { }

  ngOnInit(): void {
    this.article = "Un produit";
    this.liste = [ 'souris', 'clavier' ];
  }

  Ajouter() {
    this.liste.push(this.article);
    this.article = "";
  }

  Remove(index: number): void {
    this.liste.splice(index, 1);
  }

}
