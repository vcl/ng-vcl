import { Renderer, Component, OnInit, Directive, HostBinding, Input, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[vcl-input]',
  host: {
    '[class.vclInput]': 'true',
  },
})
export class InputComponent implements OnInit {

  @Input()
  valueType: string = null;

  @Input()
  typedValue: any = null;
  @Output() 
  typedValueChange = new EventEmitter<any>();              


  constructor(private renderer: Renderer) { }

  ngOnInit() { }

  @HostListener('input', ['$event.target.value'])
  onChange(value) {
    this.typedValueChange.emit(this.toType(value));
  }

  toType(value) {
    if (this.valueType==='number') {
      return value = Number(value);
      // if (isNaN(value)) {
      //   value = 0;
      // }
    }
    return value;
  }
}