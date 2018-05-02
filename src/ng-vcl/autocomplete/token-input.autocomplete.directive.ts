import { Subscription } from 'rxjs';
import { Directive, ElementRef, Input, HostListener, OnDestroy, SkipSelf, HostBinding, Optional, EventEmitter, Output } from '@angular/core';
import { Autocomplete, AutocompleteOption } from './autocomplete.component';
import { ObservableComponent } from '../core/index';
import { TokenInputContainerComponent } from '../token/index';

@Directive({
  selector: 'input[vcl-token-input-autocomplete]',
  host: {
    '[class.vclInput]': 'true',
    '[attr.flex]': 'true'
  }
})
export class TokenInputAutocompleteDirective extends ObservableComponent implements OnDestroy  {

  constructor(
    private elementRef: ElementRef,
    @Optional() @SkipSelf() private tokenInputContainer: TokenInputContainerComponent
  ) {
    super();
    if (!tokenInputContainer) {
      throw 'vcl-token-input ,must be used within a vcl-token-input-container';
    }
  }

  @Output()
  autocompleteSelect = new EventEmitter<AutocompleteOption>();

  @Input()
  disabled: boolean = false;

  get isDisabled() {
    return this.disabled || this.tokenInputContainer.disabled;
  }

  @HostBinding('class.vclDisabled')
  get classDisabled() {
    return this.isDisabled;
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.disabled ? true : null;
  }

  @Input('vcl-token-input-autocomplete')
  _ac?: Autocomplete;
  get ac(): Autocomplete {
    if (!(this._ac instanceof Autocomplete)) {
      throw 'invalid vcl-token-input-autocomplete parameter';
    }
    return this._ac;
  }

  acSub?: Subscription;
  focused = false;

  @HostListener('input')
  @HostListener('focus')
  listenActivate() {
    this.focused = true;
    this.renderAutocomplete();
  }

  @HostListener('blur')
  onBlur() {
    this.focused = false;
    this.destroyAutocomplete();
  }

  renderAutocomplete() {
    if (this.acSub) {
      return;
    }

    this.acSub = this.ac.render(this.tokenInputContainer.elementRef).subscribe(selection => {
      this.tokenInputContainer.addToken(selection.label || String(selection.value), selection.value);
      this.elementRef.nativeElement.value = '';
      if (!this.focused) {
        this.destroyAutocomplete();
      }
      this.autocompleteSelect.emit(selection);
    });
  }

  destroyAutocomplete() {
    if (this.acSub) {
      this.acSub.unsubscribe();
      this.acSub = undefined;
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyPress(event) {
    const code = event.code || event.key;
    if (code === 'Tab') {
      this.destroyAutocomplete();
    }
  }

  private lastKey: string | undefined;

  @HostListener('keyup', ['$event'])
  onKeyUp(event) {
    const code = event && (event.code || event.key); // fallback for ie11
    const value = event.target.value;

    if (code === 'Escape') {
      this.destroyAutocomplete();
    } else if (code === 'ArrowUp') {
      this.ac && this.ac.highlightPrev();
      event.preventDefault();
      return false;
    } else if (code === 'ArrowDown') {
      if (!this.acSub) {
        this.renderAutocomplete();
      } else {
        this.ac && this.ac.highlightNext();
      }
      event.preventDefault();
      return false;
    } else if (code == 'Backspace' && this.lastKey == 'Backspace' && value  === '') {
      // remove last token
      this.tokenInputContainer.removeLastToken();
    } else if (code === 'Enter') {
      event.preventDefault();
      if (this.ac.isHighlighted) {
        this.ac && this.ac.selectHighlighted();
        this.elementRef.nativeElement.value = '';
      }
    } else if (code) {
      this.lastKey = code;
    }
  }

  ngOnDestroy() {
    this.destroyAutocomplete();
    super.ngOnDestroy();
  }
}


