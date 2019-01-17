import { Subscription } from 'rxjs';
import { Directive, ElementRef, Input, HostListener, OnDestroy, Output, EventEmitter, HostBinding } from '@angular/core';
import { AutocompleteComponent, AutocompleteOptionDirective } from './autocomplete.component';
import { ObservableComponent } from '../core/index';

@Directive({
  selector: 'input[vcl-input-autocomplete]',
})
export class InputAutocompleteDirective extends ObservableComponent implements OnDestroy  {

  constructor(public elementRef: ElementRef) {
    super();
  }

  @Output()
  autocompleteSelect = new EventEmitter<AutocompleteOptionDirective>();

  @Input()
  autocompleteAfterSelectAction: 'label' | 'sublabel' | 'value' | ((option: AutocompleteOptionDirective) => string) | 'clear' = 'value';

  // tslint:disable-next-line:no-input-rename
  @Input('vcl-input-autocomplete')
  _ac?: AutocompleteComponent;
  get ac(): AutocompleteComponent {
    if (!(this._ac instanceof AutocompleteComponent)) {
      throw new Error('invalid vcl-input-autocomplete parameter');
    }
    return this._ac;
  }

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
    this.acSub = this.ac.open(this.elementRef).subscribe(selection => {
      if (this.autocompleteAfterSelectAction === 'value') {
        this.elementRef.nativeElement.value = String(selection.value);
      } else if (this.autocompleteAfterSelectAction === 'label') {
        this.elementRef.nativeElement.value = selection.label;
      } else if (this.autocompleteAfterSelectAction === 'sublabel') {
        this.elementRef.nativeElement.value = selection.sublabel;
      } else if (typeof this.autocompleteAfterSelectAction === 'function') {
        this.elementRef.nativeElement.value = this.autocompleteAfterSelectAction(selection);
      } else {
        this.elementRef.nativeElement.value = '';
      }
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
      if (this.ac.isHighlighted) {
        this.ac.selectHighlighted();
      }
    }
  }

  ngOnDestroy() {
    this.destroyAutocomplete();
    super.ngOnDestroy();
  }
}
