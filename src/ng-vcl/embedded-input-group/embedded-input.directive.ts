import { EmbeddedInputGroupComponent } from './embedded-input-group.component';
import { Component, Output, EventEmitter, Input, AfterViewInit, ViewChild, HostBinding, Directive, ElementRef, SkipSelf, Optional, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgModel } from '@angular/forms';

@Directive({
  selector: 'input[vcl-embedded-input]',
})
export class EmbeddedInputDirective implements OnDestroy {
  constructor(
    @Optional() @SkipSelf() private inputGroup?: EmbeddedInputGroupComponent
  ) { }

  // Listen to property changes in the input group
  changesSub = this.inputGroup && this.inputGroup.change$.subscribe(() => {
    if (this.inputGroup) {
      this.vclPrepItem = !!this.inputGroup.prepIcon || !!this.inputGroup.prepIcon;
      this.vclAppItem = !!this.inputGroup.appButtonIcon;
    }
  });


  @HostBinding('class.vclAppItem')
  vclAppItem: boolean = false;

  @HostBinding('class.vclPrepItem')
  vclPrepItem: boolean = false;

  ngOnDestroy(): void {
    this.changesSub && this.changesSub.unsubscribe();
  }

}
