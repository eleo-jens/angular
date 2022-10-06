import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css'],
})
export class Demo1Component implements OnInit {
  // plusieurs façons de déclarer des variables:
  maVariable1: string | undefined;
  // autre façon d'intégrer le undefined avec !: definite assignment assertion
  maVariable2!: string;
  maVariable3: string = 'Bonjour';
  maVariable4: number = 2;
  // ambient declaration | assez rare:
  declare maVariable5: boolean;

  maVariable6: null = null;
  maVariable7: undefined;
  maVariable8: any;
  maVariable9: any[] = [12, 'a', () => {}, true];

  constructor() {}

  ngOnInit(): void {
    this.maVariable1 = 'Coucou';
    this.maVariable2 = 'Hello';

    this.maVariable5 = true;

    this.maVariable8 = () => 'Hello';
  }
}
