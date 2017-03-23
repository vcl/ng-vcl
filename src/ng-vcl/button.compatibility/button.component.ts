import { Component, Directive, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, HostBinding, HostListener, ElementRef, ContentChild, ContentChildren, TemplateRef, ViewContainerRef, QueryList, EmbeddedViewRef, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publishBehavior';
import { ObservableComponent } from '../core/index';
import { ButtonStateContentDirective } from './button-state-content.directive';

@Component({
  selector: 'button[vcl-button]',
  host: {
    '[class.vclButton]': 'true',
  },
  templateUrl: 'button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends ObservableComponent {

  pressed: boolean = false; // `true` if a pointer device is conducting a `down` gesture on the button
  focused: boolean = false; // `true` if the element is focused  (CSS' :focus)

  @HostBinding('class.vclHovered')
  hovered: boolean = false; // `true` if a pointer device is hovering the button (CSS' :hover)

  @HostBinding('attr.disabled')
  get isDisabled(): boolean | null {
    return this.disabled || this.busy ? true : null;
  }

  @Input()
  @HostBinding('class.vclSelected')
  selected: boolean = false;

  @HostBinding('attr.aria-label')
  @Input()
  title: string;

  @Input()
  disabled: boolean = false;

  @Input()
  disableA11yClick: boolean = false;

  @Input()
  busy: boolean = false;

  @Input()
  flexLabel: boolean = false;

  @Input()
  label: string;

  @Input()
  prepIcon: string;

  @Input()
  autoBlur: boolean = true;

  @Input()
  appIcon: string;

  private pressEvent = new EventEmitter<any>();
  @Output()
  get press(): Observable<any> {
    return this.pressEvent.asObservable();
  }

  @Output()
  stateChange = Observable.merge(this.observeChange('disabled'), this.observeChange('busy'))
                          .map(() => this.state)
                          .distinctUntilChanged()
                          .publishBehavior(this.state)
                          .refCount();

  get state(): 'busy' | 'disabled' | 'enabled' {
    return this.busy ? 'busy' : (this.disabled ? 'disabled' : 'enabled' );
  }

  @ContentChildren(ButtonStateContentDirective)
  buttonContent: QueryList<ButtonStateContentDirective>;

  pressSub: Subscription = this.press.subscribe(() => {
    if (this.autoBlur) {
      if (this.elementRef.nativeElement && this.elementRef.nativeElement.blur) {
        this.elementRef.nativeElement.blur();
      }
    }
  });

  stateSub: Subscription = this.stateChange.subscribe(state => {
    if (this.buttonContent) {
      this.buttonContent.forEach(bc => bc.updateState(state));
    }
  });

  constructor(private elementRef: ElementRef) {
    super();
  }

  @HostListener('keypress', ['$event'])
  onKeypress(ev: KeyboardEvent) {
    // Trigger a11yClick
    if (!this.disableA11yClick &&
        this.elementRef.nativeElement &&
        (
          ev.code === 'Space' ||
          ev.code === 'NumpadEnter' ||
          ev.code === 'Enter'
        )) {
      ev.preventDefault();
      this.elementRef.nativeElement.click();
    }
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(e) { this.hovered = true; }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(e) { this.hovered = false; }

  @HostListener('mouseup', ['$event'])
  onMouseUp(e) { this.pressed = false; }

  @HostListener('mousedown', ['$event'])
  onMouseDown(e) { this.pressed = true; }

  @HostListener('onfocus', ['$event'])
  onFocus(e) { this.focused = true; }

  @HostListener('onblur', ['$event'])
  onBlur(e) { this.focused = false; }

  @HostListener('click', ['$event'])
  onClick(e) {
    this.pressEvent.emit(e);
  }

  ngAfterViewInit() {
    this.buttonContent.forEach(bc => bc.updateState(this.state));
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.stateSub && this.stateSub.unsubscribe();
    this.pressSub && this.pressSub.unsubscribe();
  }
}
