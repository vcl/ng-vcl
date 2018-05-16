import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter, SimpleChanges, forwardRef, Optional, SkipSelf, Directive, HostBinding, ElementRef, HostListener, Inject } from '@angular/core';
import { Subscription, merge } from 'rxjs';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgModel } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { ButtonDirective } from '../button/index';


@Directive({
  selector: 'button[vcl-button][vcl-button-group]',
})
export class GroupButtonDirective  {

  constructor(
    @SkipSelf()
    @Inject(forwardRef(() => ButtonGroupComponent))
    private buttonGroupContainer,
    private host: ButtonDirective
  ) { }

  @HostBinding('class.vclDisabled')
  @HostBinding('attr.disabled')
  get isDisabled(): boolean | null {
    return this.host.disabled || this.buttonGroupContainer.disabled ? true : null;
  }

  @HostBinding('class.vclSelected')
  selected: boolean = false;

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
  template: `<ng-content></ng-content>`,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent implements OnDestroy, ControlValueAccessor {

  private pressSubscription: Subscription | undefined;

  @ContentChildren(GroupButtonDirective)
  buttons?: QueryList<GroupButtonDirective>;

  @Input()
  disabled = false;

  // If `single`, a single item can be selected
  // If `multiple` multiple items can be selected
  @Input()
  mode: 'multiple' | 'single' = 'single';

  @Output()
  selectionChange = new EventEmitter<number | number[]>();

  selectedIndex: number | number[];

  private select(idx: number) {
    if (this.mode === 'multiple') {
      if (!Array.isArray(this.selectedIndex)) {
        this.selectedIndex = [];
      }
      if (this.selectedIndex.includes(idx)) {
        this.selectedIndex = this.selectedIndex.filter(thisIdx => thisIdx !== idx);
      } else {
        this.selectedIndex = [...this.selectedIndex, idx];
      }
    } else {
      this.selectedIndex = idx;
    }
  }

  private syncButtons() {
    const selectedIndex = this.selectedIndex;
    if (this.buttons && this.mode === 'multiple' && Array.isArray(selectedIndex)) {
      this.buttons.forEach((btn, idx) => {
        btn.selected = selectedIndex.includes(idx);
      });
    } else if (this.buttons && this.mode === 'single' && typeof selectedIndex === 'number') {
      this.buttons.forEach((btn, idx) => {
        btn.selected = selectedIndex === idx;
      });
    }
  }

  private triggerChange() {
    this.selectionChange.emit(this.selectedIndex);
    this.onChange(this.selectedIndex);
  }

  ngAfterContentInit() {
    this.buttons && this.buttons.changes.pipe(startWith(null)).subscribe(() => {
      if (!this.buttons) {
        return;
      }

      this.dispose();
      // Subscribes to button click events
      const click$ = merge(...(this.buttons.map((source, idx) => source.select.pipe(map(() => idx)))));
      this.pressSubscription =  click$.subscribe(idx => {
        this.select(idx);
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
    this.pressSubscription && this.pressSubscription.unsubscribe();
  }

    /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};
  writeValue(value: any): void {
    this.selectedIndex = value;
    this.syncButtons();
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
