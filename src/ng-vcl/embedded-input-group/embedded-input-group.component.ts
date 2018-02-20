import { Component, Output, EventEmitter, Input, AfterViewInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'vcl-embedded-input-group, [vcl-embedded-input-group]',
  templateUrl: 'embedded-input-group.component.html'
})
export class EmbeddedInputGroup {

  @Input() placeholder: string = '';

  @Input() prependIcon: boolean = false;
  @Input() prependedIconClasses: string;

  @Input() prependButton: boolean = false;
  @Input() prependedButtonIconClasses: string;
  @Output() prependedButtonEventListner: EventEmitter<any> = new EventEmitter();

  @Input() appendIcon: boolean = false;
  @Input() appendedIconClasses: string;

  @Input() appendButton: boolean = false;
  @Input() appendedButtonIconClasses: string;
  @Output() appendedButtonEventListner: EventEmitter<any> = new EventEmitter();

  @Input() outSideAppendButton: boolean = false;
  @Input() outSideAppendedButtonIconClasses: string;
  @Input() outSideAppendedButtonLabel: string;
  @Output() outSideAppendedButtonEventListner: EventEmitter<any> = new EventEmitter();

  appendedButtonEventTrigger(event: Event): void {
    this.appendedButtonEventListner.emit(event);
  }

  prependedButtonEventTrigger(event: Event): void {
    this.prependedButtonEventListner.emit(event);
  }

  outSideAppendedButtonEventTrigger(event: Event): void {
    this.outSideAppendedButtonEventListner.emit(event);
  }

}
