import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ContentChildren, QueryList, Output, EventEmitter, SimpleChanges, forwardRef, ChangeDetectorRef, HostListener, HostBinding, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Subscription ,  Observable ,  merge } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { RadioButtonComponent } from './radio-button.component';

export enum SelectionMode {
  Single,
  Multiple
}

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioGroupComponent),
  multi: true
};

@Component({
  selector: 'vcl-radio-group',
  template: `<ng-content></ng-content>`,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'attr.role': '"radiogroup"'
  }
})
export class RadioGroupComponent implements OnDestroy, OnChanges, ControlValueAccessor {

  changesSub: Subscription | undefined;
  checkedSub: Subscription | undefined;
  blurSub: Subscription | undefined;

  @Input()
  value: any;

  @Input()
  layout: 'horizontal' | 'vertical' = 'horizontal';

  @Output()
  change = new EventEmitter<any>();

  @ContentChildren(RadioButtonComponent)
  radioButtons?: QueryList<RadioButtonComponent> | undefined;

  @HostBinding('class.vclInputInlineControlGroup')
  get vclInputInlineControlGroup() {
    return this.layout === 'horizontal';
  }

  constructor(private cdRef: ChangeDetectorRef) { }

  private syncRadioButtons() {
    if (this.radioButtons) {
      this.radioButtons.forEach((rbtn, idx) => {
        const value = rbtn.value === undefined ? idx : rbtn.value;
        rbtn.setChecked(this.value === value);
      });
      this.cdRef.markForCheck();
    }
  }

  private triggerChange() {
    this.change.emit(this.value);
    this.onChange(this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('value' in changes) {
      this.syncRadioButtons();
    }
  }

  ngAfterContentInit() {
    // Subscribes to radio button change event
    this.changesSub = this.radioButtons && this.radioButtons.changes.pipe(startWith(null)).subscribe(() => {
      this.dispose();
      if (this.radioButtons) {
        // Sync inline property
        this.radioButtons && this.radioButtons.forEach((crbtn) => {
          crbtn.setInline(this.layout === 'horizontal');
        });

        // Subscribe last radio button to blur event
        this.blurSub = this.radioButtons.last.blur.subscribe(() => {
          this.onTouched();
        });

        // Subscribe to checked change event
        const checked$ = merge(...(this.radioButtons.map((source, idx) => source.checkedChange.pipe(map(() => ({ source, idx }))))));
        this.checkedSub = checked$.subscribe((c) => {
          // Use index as value if radio button value is undefined
          this.value = c.source.value === undefined ? c.idx : c.source.value;
          this.syncRadioButtons();
          this.triggerChange();
        });
        this.syncRadioButtons();
      }
    });
  }

  ngOnDestroy() {
    this.dispose();
    this.changesSub && this.changesSub.unsubscribe();
  }

  dispose() {
    this.blurSub && this.blurSub.unsubscribe();
    this.checkedSub && this.checkedSub.unsubscribe();
  }

   /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};
  writeValue(value: any): void {
    this.value = value;
    this.syncRadioButtons();
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this.radioButtons && this.radioButtons.forEach(rb => rb.setDisabledState(isDisabled));
  }
}
