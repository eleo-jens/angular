import { Component, OnInit } from '@angular/core';
import { Link } from './Link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

LinkList!: Link[];
DemoList!: Link[];
ExoList!: Link[];

  constructor() { }

  ngOnInit(): void {
    this.DemoList = [
      { title: "One-Way Binding", url: "demos/demo1" },
        { title: "Two-Way Binding", url: "demos/demo2" },
        { title: "Event Binding", url: "demos/demo3" },
        { title: "Attribute Binding", url: "demos/demo4" },
        { title: "Pipes", url: "demos/demo5" },
        { title: "Component Directives", url: "demos/demo6" },
        { title: "Structural Directives", url: "demos/demo7" },
        { title: "@Input/ @Output", url: "demos/demo8" },
        { title: "Services et dépendances", url: "demos/demo9" },
    ]

    this.ExoList = [
        { title: "Chronomètre", url: "exo/exo1" },
        { title: "Shopping List", url: "exo/exo2" },
  ]

    this.LinkList = [
      { title: "Accueil", url: "home" },
      { title: "A propos", url: "about" },
      { title: "Demos", url: "demos", children: this.DemoList, isVisible: false },
      { title: "Exercices", url: "exo", children: this.ExoList, isVisible: false },
    ]
  }

  toggleVisible(index: number) {
    this.LinkList[index].isVisible = !this.LinkList[index].isVisible; 
  }
}
