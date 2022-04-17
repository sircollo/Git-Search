import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }
  @HostListener("mouseenter")onMouseEnter(){
    this.textDeco("1px solid rgb(255, 255, 255)")
  }

  @HostListener("mouseleave")onMouseLeave(){
    this.textDeco("")
  }
 
  private textDeco(action:any){
    this.elem.nativeElement.style.border=action;
  }

}
