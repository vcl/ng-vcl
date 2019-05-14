import { Subscription } from 'rxjs';
import { Directive, ElementRef, Input, HostListener, OnDestroy, Output, EventEmitter, SimpleChanges, OnChanges, HostBinding } from '@angular/core';
import { InputDirective } from '../input/index';
import { AutocompleteComponent } from './autocomplete.component';
import { DOWN_ARROW, UP_ARROW, ESCAPE, TAB, ENTER } from '@angular/cdk/keycodes';

@Directive({
  selector: 'input[vclAutocomplete]',
})
export class AutocompleteInputDirective extends InputDirective implements OnDestroy, OnChanges  {

  constructor(elementRef: ElementRef<HTMLInputElement>) {
    super(elementRef);
  }

  private deactivateFocusTrigger = false;
  private afterCloseSub?: Subscription;

  // tslint:disable-next-line:no-input-rename
  @Input('vclAutocomplete')
  autocomplete?: AutocompleteComponent;

  // tslint:disable-next-line:no-input-rename
  @Input('vclAutocompleteMapInputValue')
  mapInputValue: 'value' | 'void' | ((value: any) => string) = 'value';

  // tslint:disable-next-line:no-input-rename
  @Input('vclAutocompleteDisabled')
  ddDisabled: false;

  // tslint:disable-next-line:no-output-rename
  @Output('vclAutocompleteSelectionChange')
  selectionChange = new EventEmitter();

  focused = false;

  @HostBinding('attr.autocomplete')
  // tslint:disable-next-line:variable-name
  _hostAutocomplete = 'off';

  @HostListener('focus')
  onFocus() {
    this.focused = true;
    if (!this.deactivateFocusTrigger) {
      this.triggerAutocomplete();
    }
  }

  @HostListener('input')
  onFocusOrInput() {
    this.triggerAutocomplete();
  }

  @HostListener('blur')
  onBlur() {
    this.focused = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.ddDisabled || changes.dropdown) {
      this.triggerAutocomplete();
    }
  }

  private triggerAutocomplete() {
    if (this.ddDisabled || this.isDisabled || !this.focused || !this.autocomplete) {
      this.autocomplete.close();
      return;
    }

    this.autocomplete.open(this.elementRef, this.elementRef.nativeElement.value);

    this.afterCloseSub && this.afterCloseSub.unsubscribe();
    this.afterCloseSub = this.autocomplete.afterClose.subscribe((value: any) => {
      if (value === undefined) {
        return;
      }

      let inputValue: string;
      if (typeof this.mapInputValue === 'function') {
        inputValue = this.mapInputValue(value);
      } else if (this.mapInputValue === 'void') {
        inputValue = '';
      } else {
        inputValue = String(value);
      }

      if (value !== undefined) {
        this.elementRef.nativeElement.value = inputValue;
        this.deactivateFocusTrigger = true;
        this.elementRef.nativeElement.focus();
        this.deactivateFocusTrigger = false;
      }

      this.selectionChange.emit(value);

      this.closeAutocomplete();
    });
  }

  private closeAutocomplete() {
    this.autocomplete.close();
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    const code = event.keyCode;
    if (code === ESCAPE) {
      this.closeAutocomplete();
      this.elementRef.nativeElement.blur();
    } else if (code === UP_ARROW) {
      this.autocomplete && this.autocomplete.selectList.highlightPrev();
      event.preventDefault();
      return false;
    } else if (code === DOWN_ARROW) {
      if (this.autocomplete.isOpen) {
        this.autocomplete && this.autocomplete.selectList.highlightNext();
      } else {
        this.triggerAutocomplete();
      }
      event.preventDefault();
      return false;
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const code = event.keyCode;
    if (code === TAB) {
      this.closeAutocomplete();
    }
  }

  @HostListener('keypress', ['$event'])
  async handleKeyPressEvent(event: KeyboardEvent) {
    const keyCode = event.keyCode;
    if (this.autocomplete && keyCode === ENTER) {
      event.preventDefault();
      this.autocomplete.selectList.selectHighlighted();
    }
  }

  ngOnDestroy() {
    if (this.afterCloseSub) {
      this.afterCloseSub.unsubscribe();
      this.afterCloseSub = undefined;
    }
    super.ngOnDestroy();
    this.closeAutocomplete();
  }
}
