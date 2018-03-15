import { EmbeddedInputGroupComponent } from './embedded-input-group.component';
import { Component, Output, EventEmitter, Input, AfterViewInit, ViewChild, HostBinding, Directive, ElementRef, SkipSelf, Optional, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgModel } from '@angular/forms';

@Directive({
  selector: 'input[vcl-embedded-input]',
  host: {
    '[class.vclInput]': 'true'
  }
})
export class EmbeddedInputDirective {
  constructor(
    @Optional() @SkipSelf() private inputGroup: EmbeddedInputGroupComponent
  ) {
    if (!inputGroup) {
      throw 'vcl-embedded-input must be used within a vcl-embedded-input-group';
    }
  }

  @Input()
  disabled: boolean = false;

  get isDisabled() {
    return this.disabled || this.inputGroup.disabled;
  }

  @HostBinding('class.vclDisabled')
  get classDisabled() {
    return this.isDisabled;
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.isDisabled ? true : null;
  }

  @HostBinding('class.vclPrepItem')
  get prepItem() {
    return !!this.inputGroup.prepIcon || !!this.inputGroup.prepButtonIcon;
  }

  @HostBinding('class.vclAppItem')
  get appItem() {
    return !!this.inputGroup.appButtonIcon;
  }
}
