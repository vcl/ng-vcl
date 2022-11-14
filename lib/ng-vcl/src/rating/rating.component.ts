import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  Output,
  ViewChildren,
  QueryList,
  ContentChildren,
  SimpleChanges,
  Optional,
  Inject,
  OnDestroy,
  OnChanges,
  AfterViewInit,
  AfterContentInit,
  HostListener,
  Injector,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  RatingItemComponent,
  Rating,
  RATING_TOKEN,
} from './rating-item.component';
import {
  FormControlGroupInputState,
  FORM_CONTROL_GROUP_INPUT_STATE,
} from '../form-control-group/index';
import { Subject } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

let UNIQUE_ID = 0;

@Component({
  selector: 'vcl-rating',
  templateUrl: './rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'vclRating',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true,
    },
    {
      provide: RATING_TOKEN,
      useExisting: forwardRef(() => RatingComponent),
    },
    {
      provide: FORM_CONTROL_GROUP_INPUT_STATE,
      useExisting: forwardRef(() => RatingComponent),
    },
  ],
  styles: [
    `
      :host.rating-vertical {
        flex-direction: column;
      }
    `,
  ],
})
export class RatingComponent
  implements
    ControlValueAccessor,
    OnDestroy,
    OnChanges,
    AfterContentInit,
    AfterViewInit,
    Rating,
    FormControlGroupInputState
{
  constructor(private cdRef: ChangeDetectorRef, private injector: Injector) {}

  private cvaDisabled = false;
  private generatedId = 'vcl_rating_' + UNIQUE_ID++;
  private stateChangedEmitter = new Subject<void>();
  private labelChangeEmitter = new Subject<void>();

  stateChanged = this.stateChangedEmitter.asObservable();

  labelChange = this.labelChangeEmitter.pipe(
    debounceTime(10), // TODO: use scheduler to avoid change detection probs
    map(() => {
      return this.label;
    })
  );

  labelTemplateChange = this.labelChangeEmitter.pipe(
    map(() => {
      const item = this.currentHoveredItem || this.currentItem;
      return item && item.labelTemplateRef;
    })
  );

  get label() {
    const item = this.currentHoveredItem || this.currentItem;
    return item && item.label;
  }

  controlType = 'rating';

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.generatedId;
  }

  @HostBinding('class.rating')
  classVclRating = true;

  @HostBinding('attr.role')
  attrRole = 'slider';

  @HostBinding('attr.aria-valuemax')
  get attrAriaValuemax() {
    return this.ratingItems.length;
  }

  @HostBinding('attr.aria-valuemin')
  attrAriaValuemin = 0;

  @HostBinding('class.rating-vertical')
  get classVclRatingVertical() {
    return this.type === 'vertical';
  }

  @HostBinding('style.height')
  get styleHeight() {
    return this.type === 'vertical' ? 'unset' : null;
  }

  get ngControl() {
    return this.injector.get(NgControl, null);
  }

  @ViewChildren(RatingItemComponent)
  ratingItemViewChildren: QueryList<RatingItemComponent>;

  @ContentChildren(RatingItemComponent)
  ratingItemContentChildren: QueryList<RatingItemComponent>;

  get hasContent() {
    return (
      this.ratingItemContentChildren &&
      this.ratingItemContentChildren.length > 0
    );
  }

  get ratingItems() {
    if (this.hasContent) {
      return this.ratingItemContentChildren.toArray();
    } else {
      return this.ratingItemViewChildren
        ? this.ratingItemViewChildren.toArray()
        : [];
    }
  }

  @Input()
  id?: string;

  @Input()
  type: 'horizontal' | 'vertical' | 'small' = 'horizontal';

  @Input()
  ratingFullIcon = 'vcl:star';

  @Input()
  ratingHalfIcon = 'vcl:star-half';

  @Input()
  ratingEmptyIcon = 'vcl:star-empty';

  @Input()
  ratingItemCount = 5;

  @HostBinding('attr.aria-valuenow')
  @Input()
  value = 0;

  _hoveredValue?: number;

  @Input()
  readonly = false;

  @Input()
  disabled = false;

  @Output()
  valueChange = new EventEmitter<number>();

  @HostBinding('class.disabled')
  get isDisabled() {
    return this.cvaDisabled || this.disabled;
  }

  get isFocused() {
    return this.ratingItems.some(ri => ri.focused);
  }

  get currentItem() {
    const idx = Math.floor(this.value) - 1;
    return this.ratingItems[idx];
  }

  get currentHoveredItem() {
    if (this._hoveredValue === undefined) {
      return undefined;
    }
    const idx = Math.floor(this._hoveredValue) - 1;
    return this.ratingItems[idx];
  }

  @HostBinding('class.error')
  hasError = false;

  setErrorState(error: boolean): void {
    this.hasError = error;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this._hoveredValue = undefined;
    this.sync();
  }

  onRatingItemHover(item: RatingItemComponent) {
    if (this.isDisabled || this.readonly) {
      return;
    }

    this._hoveredValue = this.ratingItems.indexOf(item) + 1;
    this.sync();
  }

  onRatingItemClick(item: RatingItemComponent) {
    if (this.isDisabled || this.readonly) {
      return;
    }

    this.value = this.ratingItems.indexOf(item) + 1;
    this.sync();
    this.valueChange.emit(this.value);
    this.onTouchedCallback();
    this.onChangeCallback && this.onChangeCallback(this.value);
  }

  isHalf(item: number, value: number): boolean {
    return Math.round(value * 2) / 2 === item - 0.5;
  }

  round(x: number): number {
    return Math.round(x);
  }

  sync() {
    this.ratingItems.forEach((ri, idx) => {
      const current = idx + 1;
      const value =
        this._hoveredValue === undefined ? this.value : this._hoveredValue;
      const isHalf = Math.round(value * 2) / 2 === current - 0.5;

      if (this.round(value) >= current && !isHalf) {
        ri.setState('full');
      } else if (isHalf) {
        ri.setState('half');
      } else {
        ri.setState('empty');
      }
    });
    this.labelChangeEmitter.next();
    this.stateChangedEmitter.next();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value) {
      this.sync();
    }
  }

  ngAfterViewInit() {
    this.sync();
    this.cdRef.detectChanges();
  }

  ngAfterContentInit() {
    this.sync();
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    this.stateChangedEmitter.complete();
    this.labelChangeEmitter.complete();
  }

  onRatingItemFocus(item: RatingItemComponent): void {
    this.stateChangedEmitter.next();
  }

  onRatingItemBlur(item: RatingItemComponent): void {
    if (this.ratingItems.pop() === item) {
      this.onTouchedCallback();
    }
    this.stateChangedEmitter.next();
  }

  get ratingItemsArray() {
    return this.ratingItemCount === undefined
      ? undefined
      : Array(this.ratingItemCount)
          .fill(0)
          .map((x, i) => i + 1);
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  writeValue(value: number): void {
    this.value = value;
    this.sync();
    this.cdRef.markForCheck();
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.cvaDisabled = isDisabled;
    this.cdRef.markForCheck();
    this.cdRef.detectChanges();
  }
}
