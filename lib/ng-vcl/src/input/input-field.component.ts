import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  HostBinding,
  ContentChild,
  AfterContentInit,
  forwardRef,
  ChangeDetectorRef,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import {
  FORM_CONTROL_EMBEDDED_LABEL_INPUT,
  EmbeddedInputFieldLabelInput,
} from './embedded-label.directive';
import { InputDirective } from './input.directive';
import { TextareaDirective } from './textarea.directive';

@Component({
  selector: 'vcl-input-field',
  template: `
    <ng-content vclPrepend select="[vclPrepend]"></ng-content>
    <ng-content
      select="input[vclInput], textarea[vclInput], vcl-spinner"></ng-content>
    <ng-content vclAppend select="[vclAppend]"></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: FORM_CONTROL_EMBEDDED_LABEL_INPUT,
      useExisting: forwardRef(() => InputFieldComponent),
    },
  ],
})
export class InputFieldComponent
  implements AfterContentInit, OnDestroy, EmbeddedInputFieldLabelInput
{
  private stateChangedEmitter = new Subject<void>();

  stateChanged = this.stateChangedEmitter.asObservable();

  @HostBinding('class.input-field')
  hostClasses = true;

  @ContentChild(InputDirective)
  inputDirective?: InputDirective;

  @ContentChild(TextareaDirective)
  textareaDirective?: TextareaDirective;

  get input() {
    return this.inputDirective || this.textareaDirective;
  }

  @HostBinding('class.focused')
  isFocused = false;

  @HostBinding('class.disabled')
  isDisabled = false;

  @HostBinding('class.error')
  hasError = false;

  isLabelFloating = false;
  prependedElements = 0;

  private subscriptions: Subscription[] = [];

  constructor(private readonly cdRef: ChangeDetectorRef) {}

  ngAfterContentInit(): void {
    this.subscriptions.push(
      this.input?.stateChanged.subscribe(() => {
        this.updateState();
        this.cdRef.markForCheck();
        this.cdRef.detectChanges();
        this.stateChangedEmitter.next();
      })
    );
    this.updateState();
  }

  ngOnDestroy(): void {
    this.stateChangedEmitter.complete();
    this.subscriptions.forEach(s => s?.unsubscribe());
  }

  updateState() {
    if (this.input) {
      this.isFocused = this.input.isFocused;
      this.isDisabled = this.input.isDisabled;
      this.hasError = this.input.hasError;
      this.isLabelFloating = !this.isFocused && this.input.value.length === 0;

      let prependedElements = 0;
      let sibling: Element = this.input.elementRef.nativeElement;
      while ((sibling = sibling.previousElementSibling)) {
        prependedElements++;
      }
      this.prependedElements = prependedElements;
    }
  }
}
