import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[ttClass]'
})
export class TtclassDirective {

  @Input() ttClass: string = ''; 

  constructor(private el: ElementRef) { }

  ngOnInit(){
    this.el.nativeElement.classList.add(this.ttClass)
  }

}
