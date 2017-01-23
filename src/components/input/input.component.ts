import { OnInit, OnDestroy, Directive, Input,
  EventEmitter, Output, HostListener,
  ElementRef, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { includes } from '../../utils';

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
export class InputComponent implements OnInit, OnDestroy {

  @Input('state') state: 'error' | 'warning' | 'success';
  @Input('type') type: string = 'text';
  @Input() selectOnFocus: boolean = false;

  @Input('value') value;
  _valueSubject = new BehaviorSubject<any>(this.value);
  @Output('typedValueChange') typedValueChange = this._valueSubject.asObservable();

  subs = [];

  constructor(private elRef: ElementRef) {
    if (includes(INPUT_INVALID_TYPES, this.type))
      throw new Error('type not allowed for vcl-input: ' + this.type);
  }

  ngOnInit() {
  }

  toType(value) {
    if (this.type === 'number') {
      let tValue = Number(value);
      return isNaN(tValue) ? 0 : tValue;
    } else return value;
  }

  @HostListener('input', ['$event.target.value'])
  onChange(value) {
    this._valueSubject.next(this.toType(value));
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    if (this.selectOnFocus) {
      if (this.elRef && this.elRef.nativeElement) {
        this.elRef.nativeElement.select();
      }
    }
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
