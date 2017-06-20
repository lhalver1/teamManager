import { Directive, ElementRef, Renderer, Input } from '@angular/core';

/*
  Generated class for the AnimateItemSliding directive.

  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[animateItemSliding]' // Attribute selector
})
export class AnimateItemSliding {

  @Input('animateItemSliding') shouldAnimate: boolean;

  constructor(public element: ElementRef, public renderer: Renderer) {
    
  }

  ngOnInit(){
 
    if(this.shouldAnimate){
 
      this.renderer.setElementClass(this.element.nativeElement, 'active-slide', true);
      this.renderer.setElementClass(this.element.nativeElement, 'active-options-right', true);
 
      // Wait to apply animation
      setTimeout(() => {
        this.renderer.setElementClass(this.element.nativeElement.firstElementChild, 'itemSlidingAnimation', true);
      }, 2000);
 
    }
 
  }

}
