import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[test-directive]'
})

export class TestDirective {
  constructor(elr: ElementRef) {
    elr.nativeElement.style.background = 'red';
  }
}
