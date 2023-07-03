import {
  Output,
  Input,
  EventEmitter,
  ElementRef,
  OnInit,
  AfterViewInit,
  Directive,
  HostBinding,
} from '@angular/core';

import { AlertOptions, AlertInput } from './types';

// TODO: support text, password, textarea, select, radio, checkbox file.
@Directive({
  selector: '[vclInputAlert]',
})
export class AlertInputDirective implements OnInit, AfterViewInit {
  constructor(private elementRef: ElementRef<HTMLInputElement>) {}

  get input() {
    return this.elementRef.nativeElement;
  }

  @Input()
  alert: AlertOptions = {};

  inputValue = '';

  @Output()
  valueChange = new EventEmitter<any>();

  ngOnInit() {
    if (this.control === 'input' && typeof this.alert.inputValue === 'string') {
      this.inputValue = this.alert.inputValue;
    }
  }

  ngAfterViewInit() {
    if (this.input) {
      setTimeout(() => this.input.focus(), 1);
    }
  }

  get control(): string | null {
    switch (this.alert.input) {
      case AlertInput.Text:
        return 'input';
    }
    return null;
  }

  @HostBinding('attr.placeholder')
  get placeholder() {
    return this.alert.inputPlaceholder || '';
  }

  inputValueChange(value: string) {
    this.valueChange.emit(value);
  }
}
