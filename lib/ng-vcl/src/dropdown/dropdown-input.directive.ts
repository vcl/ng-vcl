import { Subscription } from 'rxjs';
import { Directive, ElementRef, Input, HostListener, OnDestroy, Output, EventEmitter, HostBinding, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { InputDirective } from '../input';
import { DropdownComponent } from './dropdown.component';
import { DOWN_ARROW, UP_ARROW, ESCAPE, TAB } from '@angular/cdk/keycodes';
import { DropdownItem } from './types';

@Directive({
  selector: 'input[vclDropdown]',
})
export class DropdownInputDirective extends InputDirective implements OnDestroy  {

  constructor(private elementRef: ElementRef<HTMLInputElement>) {
    super(elementRef);
  }

  private _deactiveFocusTrigger = false;

  dropdownCloseSub?: Subscription;

  // tslint:disable-next-line:no-input-rename
  @Input('vclDropdown')
  dropdown?: DropdownComponent;

  // tslint:disable-next-line:no-input-rename
  @Input('vclDropdownMapValue')
  mapValue: 'value' | 'label' | 'void' | ((value: any) => string) = 'value';

  // tslint:disable-next-line:no-input-rename
  @Input('vclDropdownDisabled')
  ddDisabled: false;

  // tslint:disable-next-line:no-output-rename
  @Output('vclDropdownSelect')
  select = new EventEmitter();

  focused = false;

  @HostListener('focus')
  onfocus() {
    this.focused = true;
    if (!this._deactiveFocusTrigger) {
      this.openDropdown();
    }
  }

  @HostListener('input')
  onFocusOrInput() {
    this.openDropdown();
  }

  @HostListener('blur')
  onBlur() {
    this.focused = false;
  }

  private openDropdown() {
    if (this.ddDisabled || this.isDisabled || !this.focused || !this.dropdown || this.dropdown.isOpen) {
      this.dropdown.close();
      return;
    }

    this.dropdown.open({
      target: this.elementRef,
    }).subscribe((action) => {
      if (!action || action.type !== 'select') {
        return;
      }

      const item = action.item;
      let value = item.value;

      if (typeof this.mapValue === 'function') {
        value = this.mapValue(value);
      } else if (this.mapValue === 'void') {
        value = '';
      } else if (this.mapValue === 'label') {
        value = item.label;
      }
      if (value !== undefined) {
        this.elementRef.nativeElement.value = value;
        this._deactiveFocusTrigger = true;
        this.elementRef.nativeElement.focus();
        this._deactiveFocusTrigger = false;
      }

      this.select.emit(value);

      this.closeDropdown();
    });
  }

  private closeDropdown() {
    this.dropdown.close();
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    const code = event.keyCode;
    if (code === ESCAPE) {
      this.closeDropdown();
      this.elementRef.nativeElement.blur();
    } else if (code === UP_ARROW) {
      this.dropdown && this.dropdown.highlightPrev();
      event.preventDefault();
      return false;
    } else if (code === DOWN_ARROW) {
      if (this.dropdown.isOpen) {
        this.dropdown && this.dropdown.highlightNext();
      } else {
        this.openDropdown();
      }
      event.preventDefault();
      return false;
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const code = event.keyCode;
    if (code === TAB) {
      this.closeDropdown();
    }
  }

  @HostListener('keypress', ['$event'])
  async handleKeyPressEvent(event: KeyboardEvent) {
    const code = event.code || event.key;
    if (this.dropdown && code === 'Enter') {
      event.preventDefault();
      this.dropdown.selectItem(this.dropdown.getHighlightedItem());
    }
  }

  ngOnDestroy() {
    if (this.dropdownCloseSub) {
      this.dropdownCloseSub.unsubscribe();
      this.dropdownCloseSub = undefined;
    }
    this.closeDropdown();
  }
}
