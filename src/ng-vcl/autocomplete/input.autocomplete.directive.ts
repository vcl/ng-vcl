import { Observable } from 'rxjs/Observable';
import { Directive, ElementRef, Input, HostListener, OnDestroy, Output, EventEmitter, HostBinding } from '@angular/core';
import { Autocomplete, AutocompleteOption } from './autocomplete.component';
import { ObservableComponent } from '../core/index';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: 'input[vcl-input-autocomplete]',
})
export class InputAutocompleteDirective extends ObservableComponent implements OnDestroy  {

  constructor(public elementRef: ElementRef) {
    super();
  }

  @Output()
  autocompleteSelect = new EventEmitter<AutocompleteOption>();

  @Input()
  autocompleteOnSelect?: 'label' | 'sublabel' | 'value' | {(option: AutocompleteOption): string} | 'clear' = 'value';

  @Input('vcl-input-autocomplete')
  _ac?: Autocomplete;
  get ac(): Autocomplete {
    if (!(this._ac instanceof Autocomplete)) {
      throw 'invalid vcl-input-autocomplete parameter';
    }
    return this._ac;
  }

  acSub?: Subscription;

  @HostBinding('class.vclDisabled')
  @Input()
  disabled: boolean = false;

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.disabled ? true : null;
  }

  @HostListener('focus')
  @HostListener('input')
  listenActivate() {
    this.activate();
  }

  activate() {
    if (this.acSub) {
      return;
    }
    this.acSub = this.ac.open(this.elementRef).subscribe(selection => {
      if (this.autocompleteOnSelect === 'value') {
        this.elementRef.nativeElement.value = String(selection.value);
      } else if (this.autocompleteOnSelect === 'label') {
        this.elementRef.nativeElement.value = selection.label;
      } else if (this.autocompleteOnSelect === 'sublabel') {
        this.elementRef.nativeElement.value = selection.sublabel;
      } else if (typeof this.autocompleteOnSelect === 'function') {
        this.elementRef.nativeElement.value = this.autocompleteOnSelect(selection);
      } else {
        this.elementRef.nativeElement.value = '';
      }
      this.deactivate();
      this.autocompleteSelect.emit(selection);
    }, undefined, () => this.deactivate());
  }

  deactivate() {
    if (this.acSub) {
      this.acSub.unsubscribe();
      this.acSub = undefined;
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyPress(event) {
    const code = event.code || event.key;
    if (code === 'Tab') {
      this.deactivate();
    }
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event) {
    const code = event.code || event.key;
    if (code === 'ArrowUp') {
      this.ac && this.ac.highlightPrev();
      event.preventDefault();
      return false;
    } else if (event.code === 'ArrowDown') {
      if (!this.acSub) {
        this.activate();
      } else {
        this.ac && this.ac.highlightNext();
      }
      event.preventDefault();
      return false;
    }
  }

  @HostListener('keypress', ['$event'])
  async handleKeyPressEvent(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      event.preventDefault();
      this.ac && this.ac.selectHighlighted();
    }
  }

  ngOnDestroy() {
    this.deactivate();
    super.ngOnDestroy();
  }
}
