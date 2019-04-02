import { Subscription } from 'rxjs';
import { Directive, ElementRef, Input, HostListener, OnDestroy, Output, EventEmitter, HostBinding } from '@angular/core';
import { AutocompleteResult, AutocompleteHost } from './interfaces';

@Directive({
  selector: 'input[vclInputAutocomplete]',
})
export class InputAutocompleteDirective implements OnDestroy  {

  constructor(public elementRef: ElementRef) { }

  @Output()
  autocompleteSelect = new EventEmitter<AutocompleteResult>();

  // tslint:disable-next-line:no-input-rename
  @Input('vclInputAutocomplete')
  ac: AutocompleteHost;

  acSub?: Subscription;

  @HostBinding('class.vclDisabled')
  @Input()
  disabled = false;

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.disabled ? true : null;
  }

  @HostListener('focus')
  @HostListener('input')
  onFocusOrInput() {
    this.renderAutocomplete();
  }

  @HostListener('blur')
  onBlur() {
    if (this.acSub) {
      this.acSub.unsubscribe();
      this.acSub = undefined;
    }
  }

  renderAutocomplete() {
    if (this.acSub) {
      return;
    }
    this.acSub = this.ac.render(this.elementRef).subscribe(selection => {
      this.elementRef.nativeElement.value = typeof selection.value === 'string' ? selection.value : selection.label;
      this.elementRef.nativeElement.focus();
      this.destroyAutocomplete();
      this.autocompleteSelect.emit(selection);
    });
  }

  destroyAutocomplete() {
    if (this.acSub) {
      this.acSub.unsubscribe();
      this.acSub = undefined;
    }
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event) {
    const code = event.code || event.key;
    if (code === 'Escape') {
      this.destroyAutocomplete();
    } else if (code === 'ArrowUp') {
      this.ac && this.ac.highlightPrev();
      event.preventDefault();
      return false;
    } else if (event.code === 'ArrowDown') {
      if (!this.acSub) {
        this.renderAutocomplete();
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
      // if (this.ac.isHighlighted) {
      // }
      this.ac.selectHighlighted();
    }
  }

  ngOnDestroy() {
    this.destroyAutocomplete();
  }
}
