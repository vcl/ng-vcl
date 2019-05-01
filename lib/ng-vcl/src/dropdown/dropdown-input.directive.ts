import { Subscription } from 'rxjs';
import { Directive, ElementRef, Input, HostListener, OnDestroy, Output, EventEmitter, HostBinding, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { InputDirective } from '../input';
import { DropdownComponent } from './dropdown.component';
import { DOWN_ARROW, UP_ARROW, ESCAPE, TAB, ENTER } from '@angular/cdk/keycodes';

@Directive({
  selector: 'input[vclDropdown]',
})
export class DropdownInputDirective extends InputDirective implements OnDestroy, OnChanges  {

  constructor(elementRef: ElementRef<HTMLInputElement>) {
    super(elementRef);
  }

  private _deactiveFocusTrigger = false;

  dropdownCloseSub?: Subscription;

  // tslint:disable-next-line:no-input-rename
  @Input('vclDropdown')
  dropdown?: DropdownComponent;

  // tslint:disable-next-line:no-input-rename
  @Input('vclDropdownMapViewValue')
  mapViewValue: 'value' | 'label' | 'void' | ((value: any) => string) = 'value';

  // tslint:disable-next-line:no-input-rename
  @Input('vclDropdownDisabled')
  ddDisabled: false;

  // tslint:disable-next-line:no-output-rename
  @Output('vclDropdownSelectionChange')
  selectionChange = new EventEmitter();

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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.ddDisabled || changes.dropdown) {
      this.openDropdown();
    }
  }

  private openDropdown() {
    if (this.ddDisabled || this.isDisabled || !this.focused || !this.dropdown) {
      this.dropdown.close();
      return;
    }

    this.dropdown.open({
      target: this.elementRef,
      selectionMode: 'single',
      value: this.elementRef.nativeElement.value
    }).subscribe((action) => {
      if (!action || action.type !== 'select') {
        return;
      }

      const item = action.item;
      let value = item.value;

      if (typeof this.mapViewValue === 'function') {
        value = this.mapViewValue(value);
      } else if (this.mapViewValue === 'void') {
        value = '';
      } else if (this.mapViewValue === 'label') {
        value = item.label;
      }
      if (value !== undefined) {
        this.elementRef.nativeElement.value = value;
        this._deactiveFocusTrigger = true;
        this.elementRef.nativeElement.focus();
        this._deactiveFocusTrigger = false;
      }

      this.selectionChange.emit(item.value);

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
    const keyCode = event.keyCode;
    if (this.dropdown && keyCode === ENTER) {
      event.preventDefault();
      this.dropdown.selectItem(this.dropdown.getHighlightedItem());
    }
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.dropdownCloseSub) {
      this.dropdownCloseSub.unsubscribe();
      this.dropdownCloseSub = undefined;
    }
    this.closeDropdown();
  }
}
