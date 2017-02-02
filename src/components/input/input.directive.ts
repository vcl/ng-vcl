import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Directive, Input, Output, ElementRef, HostListener, EventEmitter } from '@angular/core';

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

  @Input('state')
  state: 'error' | 'warning' | 'success';

  @Input('type')
  type: string = 'text';

  @Input()
  selectOnFocus: boolean = false;

  @Input()
  set value(value: any) {
    this.typedValue = this.toType(value);
  }
  get value() {
    return this.typedValue;
  }

  private typedValue: any;

  private valueChangeEvent = new EventEmitter<any>();
  @Output()
  valueChange = this.valueChangeEvent.asObservable();

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    if (INPUT_INVALID_TYPES.includes(this.type))
      throw new Error('type not allowed for vcl-input: ' + this.type);
  }

  toType(value) {
    if (this.type === 'number') {
      let tValue = Number(value);
      return isNaN(tValue) ? 0 : tValue;
    } else {
      return value;
    }
  }

  @HostListener('input', ['$event.target.value'])
  onChange(value) {
    this.valueChangeEvent.next(this.toType(value));
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    if (this.selectOnFocus && this.elRef && this.elRef.nativeElement) {
      this.elRef.nativeElement.select();
    }
  }
}
