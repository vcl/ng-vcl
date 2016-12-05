import { OnInit, Directive, Input, EventEmitter, Output, HostListener, ElementRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Directive({
  selector: '[vcl-input]',
  host: {
    '[class.vclInput]': 'true',
  },
})
export class InputDirective implements OnInit {

  @Input()
  valueType: string = null;

  @Input()
  typedValue: any = null;

  _typedValueChange = new EventEmitter<any>();
  @Output()
  get typedValueChange(): Observable<any> {
    return this._typedValueChange.asObservable();
  }

  @Input()
  selectAllOnFocus: boolean = false;

  constructor(private elRef: ElementRef) { }

  ngOnInit() { }

  @HostListener('input', ['$event.target.value'])
  onChange(value) {
    this._typedValueChange.emit(this.toType(value));
  }

  toType(value) {
    if (this.valueType === 'number') {
      let tValue = Number(value);
      return isNaN(tValue) ? 0 : tValue;
    } else {
      return value;
    }
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    if (this.selectAllOnFocus) {
      if (this.elRef && this.elRef.nativeElement) {
        this.elRef.nativeElement.select();
      }
    }
  }
}
