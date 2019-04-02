import { Subscription } from 'rxjs';
import { Directive, ElementRef, Input, HostListener, OnDestroy, Output, EventEmitter, HostBinding } from '@angular/core';
import { InputDirective } from '../input';
import { AutocompleteComponent } from './autocomplete.component';

@Directive({
  selector: 'input[vclAutocomplete]',
})
export class AutocompleteInputDirective extends InputDirective implements OnDestroy  {

  constructor(private elementRef: ElementRef) {
    super(elementRef);
  }

  acSub?: Subscription;

  // tslint:disable-next-line:no-input-rename
  @Input('vclAutocomplete')
  ac?: AutocompleteComponent;

  // tslint:disable-next-line:no-input-rename
  @Input('vclAutocompleteDisabled')
  acDisabled = false;

  // tslint:disable-next-line:no-input-rename
  @Input('vclAutocompleteSelect')
  select: 'value' | 'void' | ((value: any) => string) = 'value';

  focused = false;

  @HostListener('focus')
  onfocus() {
    this.focused = true;
    this.update();
  }

  @HostListener('input')
  onFocusOrInput() {
    this.update();
  }

  @HostListener('blur')
  onBlur() {
    this.focused = false;
    this.update();
  }

  private update() {
    if (this.disabled || this.acDisabled || !this.focused || !this.ac) {
      this.close();
      return;
    }

    this.acSub = this.ac.render(this.elementRef).subscribe(value => {
      if (typeof this.select === 'function') {
        value = this.select(value);
      } else if (this.select === 'void') {
        value = '';
      }
      this.elementRef.nativeElement.value = value;
      this.elementRef.nativeElement.focus();
      this.close();
    });
  }

  private close() {
    if (this.acSub) {
      this.acSub.unsubscribe();
      this.acSub = undefined;
    }
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    const code = event.code || event.key;
    if (code === 'Escape') {
      this.close();
    } else if (code === 'ArrowUp') {
      this.ac && this.ac.highlightPrev();
      event.preventDefault();
      return false;
    } else if (event.code === 'ArrowDown') {
      if (!this.acSub) {
        this.close();
      } else {
        this.ac && this.ac.highlightNext();
      }
      event.preventDefault();
      return false;
    }
  }

  @HostListener('keypress', ['$event'])
  async handleKeyPressEvent(event: KeyboardEvent) {
    const code = event.code || event.key;
    if (this.ac && code === 'Enter') {
      event.preventDefault();
      this.ac.selectHighlighted();
    }
  }

  ngOnDestroy() {
    this.close();
  }
}
