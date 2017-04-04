import { Directive, Input, Output, ElementRef, HostListener, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Invalid input type. Using one of these will throw an error
const INPUT_INVALID_TYPES = [
  'button',
  'checkbox',
  'color',
  'file',
  'hidden',
  'image',
  'radio',
  'range',
  'reset',
  'submit'
];

@Directive({
  selector: '[vcl-input]',
  host: {
    '[class.vclInput]': 'true',
  }
})
export class InputDirective {

  @Input('type')
  type: string = 'text';

  @Input()
  selectOnFocus: boolean = false;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    if (INPUT_INVALID_TYPES.includes(this.type))
      throw new Error('type not allowed for vcl-input: ' + this.type);
  }

  focus() {
    if (this.elRef.nativeElement) {
      this.elRef.nativeElement.focus();
    }
  }

  // autoselect
  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    if (
      this.selectOnFocus &&
      this.elRef &&
      this.elRef.nativeElement
    ) this.elRef.nativeElement.select();
  }
}
