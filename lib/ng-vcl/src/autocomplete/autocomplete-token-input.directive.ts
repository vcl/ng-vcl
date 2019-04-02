// import { Subscription } from 'rxjs';
// import { Directive, ElementRef, Input, HostListener, OnDestroy, SkipSelf, HostBinding, Optional, EventEmitter, Output } from '@angular/core';
// import { ObservableComponent } from '../core/index';
// import { TokenInputContainerComponent } from '../token/index';
// import { AutocompleteSelect, AutocompleteHost } from './interfaces';

// @Directive({
//   selector: 'input[vclAutocompleteTokenInput]',
//   host: {
//     '[class.vclInput]': 'true',
//     '[attr.flex]': 'true'
//   }
// })
// export class AutocompleteTokenInputDirective extends ObservableComponent implements OnDestroy  {

//   constructor(
//     private elementRef: ElementRef,
//     @Optional() @SkipSelf() private tokenInputContainer: TokenInputContainerComponent
//   ) {
//     super();
//     if (!tokenInputContainer) {
//       throw new Error('vcl-token-input ,must be used within a vcl-token-input-container');
//     }
//   }

//   get isDisabled() {
//     return this.disabled || this.tokenInputContainer.disabled;
//   }

//   @HostBinding('class.vclDisabled')
//   get classDisabled() {
//     return this.isDisabled;
//   }

//   @HostBinding('attr.disabled')
//   get attrDisabled() {
//     return this.disabled ? true : null;
//   }

//   @Output()
//   select = new EventEmitter<AutocompleteSelect>();

//   @Input()
//   disabled = false;

//   // tslint:disable-next-line:no-input-rename
//   @Input('vclTokenInputAutocomplete')
//   ac: AutocompleteHost;

//   acSub?: Subscription;
//   focused = false;

//   private lastKey: string | undefined;
//   private wasEmpty = true;

//   @HostListener('input')
//   @HostListener('focus')
//   listenActivate() {
//     this.focused = true;
//     this.renderAutocomplete();
//   }

//   @HostListener('blur')
//   onBlur() {
//     this.focused = false;
//     this.destroyAutocomplete();
//   }

//   renderAutocomplete() {
//     if (this.acSub) {
//       return;
//     }

//     this.acSub = this.ac.render(this.tokenInputContainer.elementRef).subscribe(selection => {
//       this.tokenInputContainer.addToken({
//         label: selection.label || String(selection.value),
//         value: selection.value,
//         selected: true
//       });
//       this.elementRef.nativeElement.value = '';
//       if (!this.focused) {
//         this.destroyAutocomplete();
//       }
//       this.select.emit(selection);
//     });
//   }

//   destroyAutocomplete() {
//     if (this.acSub) {
//       this.acSub.unsubscribe();
//       this.acSub = undefined;
//     }
//   }

//   @HostListener('keydown', ['$event'])
//   onKeyPress(event) {
//     const code = event.code || event.key;
//     if (code === 'Tab') {
//       this.destroyAutocomplete();
//     }
//   }

//   @HostListener('keydown', ['$event'])
//   onKeyDown(event) {
//     const value = event.target.value;
//     this.wasEmpty = value === '';
//   }

//   @HostListener('keyup', ['$event'])
//   onKeyUp(event) {
//     const code = event && (event.code || event.key); // fallback for ie11
//     const value = event.target.value;

//     if (code === 'Escape') {
//       this.destroyAutocomplete();
//     } else if (code === 'ArrowUp') {
//       this.ac && this.ac.highlightPrev();
//       event.preventDefault();
//       return false;
//     } else if (code === 'ArrowDown') {
//       if (!this.acSub) {
//         this.renderAutocomplete();
//       } else {
//         this.ac && this.ac.highlightNext();
//       }
//       event.preventDefault();
//       return false;
//     } else if (code === 'Backspace' && this.lastKey === 'Backspace' && value  === '' && this.wasEmpty) {
//       // remove last token
//       this.tokenInputContainer.removeLastToken();
//     } else if (code === 'Enter') {
//       event.preventDefault();
//       if (this.ac.highlightedItem) {
//         this.ac && this.ac.selectHighlighted();
//         this.elementRef.nativeElement.value = '';
//       }
//     } else if (code) {
//       this.lastKey = code;
//     }
//   }

//   ngOnDestroy() {
//     this.destroyAutocomplete();
//     super.ngOnDestroy();
//   }
// }
