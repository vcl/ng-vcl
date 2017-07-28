import { Directive, Input, Output, ElementRef, HostListener, EventEmitter, HostBinding } from '@angular/core';
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

  @Input()
  type: string = 'text';

  @Input()
  selectOnFocus: boolean = false;

  @HostBinding('class.vclDisabled')
  @Input()
  disabled: boolean = false;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    if (INPUT_INVALID_TYPES.includes(this.type)) {
      throw new Error('type not allowed for vcl-input: ' + this.type);
    }
  }

  get value() {
    return this.elRef ? this.elRef.nativeElement.value : '';
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.disabled ? true : null;
  }

  clear() {
    if (this.elRef) {
      this.elRef.nativeElement.value = '';
    }
  }

  focus() {
    if (this.elRef) {
      this.elRef.nativeElement.focus();
    }
  }

  // autoselect
  @HostListener('focus')
  onFocus() {
    if (this.selectOnFocus && this.elRef) {
      this.elRef.nativeElement.select();
    }
  }
}
