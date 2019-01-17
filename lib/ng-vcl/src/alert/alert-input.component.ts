import { Component, ChangeDetectionStrategy, ViewChild, Output, Input, EventEmitter, ElementRef, OnInit, AfterViewInit } from '@angular/core';

import { AlertOptions, AlertInput } from './types';

// TODO: support text, password, textarea, select, radio, checkbox file.
@Component({
  templateUrl: 'alert-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'alert-input'
})
export class AlertInputComponent implements OnInit, AfterViewInit {

  @ViewChild('input')
  input: ElementRef;

  @Input()
  alert: AlertOptions = {};

  @Output()

  inputValue = '';

  valueChange = new EventEmitter<any>();

  ngOnInit() {
    if (this.control === 'input' && typeof this.alert.inputValue === 'string') {
      this.inputValue = this.alert.inputValue;
    }
  }

  ngAfterViewInit() {
    if (this.input && this.input.nativeElement && this.input.nativeElement.focus) {
      setTimeout(() => this.input.nativeElement.focus(), 1);
    }
  }

  get control(): string | null {
    switch (this.alert.input) {
      case AlertInput.Text: return 'input';
    }
    return null;
  }

  get placeholder() {
    return this.alert.inputPlaceholder || '';
  }


  inputValueChange(value: string) {
    this.valueChange.emit(value);
  }

}
