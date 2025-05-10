import {
  Component,
  OnDestroy,
  Input,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  Output,
  EventEmitter,
  forwardRef,
  ChangeDetectorRef,
  AfterContentInit,
  HostBinding,
  Injector,
} from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { startWith } from 'rxjs/operators';
import {
  BUTTON_HOST_TOKEN,
  ButtonHost,
  ButtonComponent,
} from '../button/index';
import {
  FormControlGroupInputState,
  FORM_CONTROL_GROUP_INPUT_STATE,
} from '../form-control-group/index';

let UNIQUE_ID = 0;

@Component({
  selector: 'vcl-button-group',
  template: `<ng-content select="button"></ng-content>`,
  providers: [
    {
      provide: BUTTON_HOST_TOKEN,
      useExisting: forwardRef(() => ButtonGroupComponent),
    },
    {
      provide: FORM_CONTROL_GROUP_INPUT_STATE,
      useExisting: forwardRef(() => ButtonGroupComponent),
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonGroupComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent
  implements
    OnDestroy,
    ControlValueAccessor,
    AfterContentInit,
    ButtonHost,
    FormControlGroupInputState
{
  constructor(
    private cdRef: ChangeDetectorRef,
    private injector: Injector
  ) {}

  private buttonsSub?: Subscription;
  private _generatedId = 'vcl_button_group_' + UNIQUE_ID++;
  private stateChangedEmitter = new Subject<void>();

  stateChanged = this.stateChangedEmitter.asObservable();
  controlType = 'button-group';

  @Input()
  id?: string;

  @Input()
  value: any | any[];

  @Output()
  valueChange = new EventEmitter<any | any[]>();

  @HostBinding('class.button-group')
  _hostClasses = true;

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this._generatedId;
  }

  get ngControl() {
    return this.injector.get(NgControl, null);
  }

  @ContentChildren(ButtonComponent)
  buttons?: QueryList<ButtonComponent>;

  private _disabled = false;

  @Input()
  set disabled(disabled: boolean) {
    this._disabled = disabled;
    this.syncButtons();
    this.stateChangedEmitter.next();
  }

  get disabled(): boolean {
    return this._disabled;
  }

  // If `single`, a single item can be selected
  // If `multiple` multiple items can be selected
  @Input()
  selectionMode: 'multiple' | 'single' = 'single';

  formDisabled = false;

  get isDisabled(): boolean {
    return this.formDisabled || this.disabled;
  }

  get isFocused(): boolean {
    return this.buttons.some(b => b.isFocused);
  }

  private toggle(btn: ButtonComponent) {
    if (this.selectionMode === 'multiple') {
      if (Array.isArray(this.value)) {
        const selectedValue = (this.value = [...this.value]);
        const idx = this.value.indexOf(btn.value);

        if (idx >= 0) {
          selectedValue.splice(idx, 1);
          this.value = selectedValue;
        } else {
          this.value = [...this.value, btn.value];
        }
      } else {
        this.value = [btn.value];
      }
    } else {
      this.value = btn.value;
    }
  }

  private syncButtons() {
    const value = this.value;
    if (
      this.buttons &&
      this.selectionMode === 'multiple' &&
      Array.isArray(value)
    ) {
      this.buttons.forEach(btn => {
        btn.setSelected(value.includes(btn.value));
      });
    } else if (this.buttons && this.selectionMode === 'single') {
      this.buttons.forEach(btn => {
        btn.setSelected(value === btn.value);
      });
    }
    if (this.buttons) {
      this.buttons.forEach(btn => {
        btn.selectable = true;
      });
    }
  }

  notifyButtonClick(btn: ButtonComponent) {
    this.toggle(btn);
    this.syncButtons();
    this.triggerChange();
    this.onTouched();
  }

  notifyButtonBlur(btn: any) {
    if (this.buttons.last === btn) {
      this.onTouched();
    }
    this.stateChangedEmitter.next();
  }

  notifyButtonFocus(btn: any) {
    this.stateChangedEmitter.next();
  }

  private triggerChange() {
    this.valueChange.emit(this.value);
    this.onChange(this.value);
  }

  @HostBinding('class.error')
  hasError = false;

  setErrorState(error: boolean): void {
    this.hasError = error;
  }

  ngAfterContentInit() {
    // Syncs changed buttons checked state to be in line with the current group value
    // tslint:disable-next-line:deprecation
    this.buttonsSub = this.buttons.changes
      .pipe(startWith(null))
      .subscribe(() => {
        if (!this.buttons) {
          return;
        }
        this.syncButtons();
      });
  }

  ngOnDestroy() {
    this.buttonsSub && this.buttonsSub.unsubscribe();
    this.stateChangedEmitter && this.stateChangedEmitter.complete();
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onChange: (_: any) => void = () => {};
  private onTouched: () => any = () => {};
  writeValue(value: any): void {
    this.value = value;
    this.syncButtons();
    this.cdRef.markForCheck();
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean) {
    this.formDisabled = disabled;
    this.cdRef.markForCheck();
  }
}
