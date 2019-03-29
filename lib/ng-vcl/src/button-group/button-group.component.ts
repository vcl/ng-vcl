import { Component, OnDestroy, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter,
         forwardRef, SkipSelf, HostBinding, HostListener, Inject, ChangeDetectorRef, AfterContentInit, ElementRef } from '@angular/core';
import { Subscription, merge } from 'rxjs';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { ButtonComponent } from '../button';

@Component({
  selector: 'button[vcl-button-group]',
  template: '<ng-content></ng-content>'
})
export class ButtonGroupButtonComponent extends ButtonComponent  {

  constructor(
    elementRef: ElementRef,
    @SkipSelf()
    @Inject(forwardRef(() => ButtonGroupComponent))
    private buttonGroupContainer
  ) {
    super(elementRef);
   }

  @HostBinding('class.vclDisabled')
  @HostBinding('attr.disabled')
  get isDisabled(): boolean | null {
    return this.disabled || this.buttonGroupContainer.disabled ? true : null;
  }

  @Input()
  value: any;

  @HostBinding('class.vclSelected')
  selected = false;

  select = new EventEmitter<boolean>();

  @HostListener('click')
  onClick() {
    this.selected = !this.selected;
    this.select.emit(this.selected);
  }
}

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ButtonGroupComponent),
  multi: true
};

@Component({
  selector: 'vcl-button-group',
  host: {
    '[class.vclButtonGroup]': 'true',
  },
  template: `<ng-content select="button[vcl-button-group]"></ng-content>`,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent implements OnDestroy, ControlValueAccessor, AfterContentInit {

  constructor(private cdRef: ChangeDetectorRef) { }

  private clickSub?: Subscription;

  @ContentChildren(ButtonGroupButtonComponent)
  buttons?: QueryList<ButtonGroupButtonComponent>;

  @Input()
  disabled = false;

  // If `single`, a single item can be selected
  // If `multiple` multiple items can be selected
  @Input()
  mode: 'multiple' | 'single' = 'single';

  @Output()
  selectionChange = new EventEmitter<any | any[]>();

  selectedValue: any | any[];

  private toggle(btn: ButtonGroupButtonComponent) {
    if (this.mode === 'multiple') {
      if (Array.isArray(this.selectedValue)) {
        const selectedValue = this.selectedValue = [...this.selectedValue];
        const idx = this.selectedValue.indexOf(btn.value);

        if (idx >= 0) {
          selectedValue.splice(idx, 1);
          this.selectedValue = selectedValue;
        } else {
          this.selectedValue = [...this.selectedValue, btn.value];
        }
      } else {
        this.selectedValue = [btn.value];
      }
    } else {
      this.selectedValue = btn.value;
    }
  }

  private syncButtons() {
    const selectedValue = this.selectedValue;
    if (this.buttons && this.mode === 'multiple' && Array.isArray(selectedValue)) {
      this.buttons.forEach((btn) => {
        btn.selected = selectedValue.includes(btn.value);
      });
    } else if (this.buttons && this.mode === 'single') {
      this.buttons.forEach((btn) => {
        btn.selected = selectedValue === btn.value;
      });
    }
  }

  private triggerChange() {
    this.selectionChange.emit(this.selectedValue);
    this.onChange(this.selectedValue);
  }

  ngAfterContentInit() {
    this.buttons && this.buttons.changes.pipe(startWith(null)).subscribe(() => {
      if (!this.buttons) {
        return;
      }

      this.dispose();
      // Subscribes to button click events
      const click$ = merge(...(this.buttons.map((source) => source.select.pipe(map(() => source)))));
      this.clickSub =  click$.subscribe(source => {
        this.toggle(source);
        this.syncButtons();
        this.triggerChange();
        this.onTouched();
      });
      this.syncButtons();
    });
  }

  ngOnDestroy() {
    this.dispose();
  }

  dispose() {
    this.clickSub && this.clickSub.unsubscribe();
  }

    /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};
  writeValue(value: any): void {
    this.selectedValue = value;
    this.syncButtons();
    this.cdRef.markForCheck();
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
