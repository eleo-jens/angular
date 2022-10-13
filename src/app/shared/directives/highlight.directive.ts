import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // injection de dépendance
  constructor(
    private _element: ElementRef
  ) { }

  @HostListener('mouseenter')
  onMouseEnter () {
    this.hightlight("red");
  }

  @HostListener('mouseleave')
  onMouseLeave () {
    this.hightlight(null);
  }

  hightlight (color:string | null) {
    this._element.nativeElement.style.backgroundColor = color;
  }

}
