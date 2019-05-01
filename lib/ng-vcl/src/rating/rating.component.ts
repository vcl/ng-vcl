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
  ElementRef,
  Optional,
  Inject,
  OnDestroy,
  OnChanges,
  AfterViewInit,
  AfterContentInit
} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';
import { RatingItemComponent, Rating, RATING_TOKEN } from './rating-item.component';
import { FormControlInput, FORM_CONTROL_HOST, FormControlHost, FORM_CONTROL_ERROR_STATE_AGENT, FormControlErrorStateAgent } from '../form-control-group/index';
import { Subject } from 'rxjs';

let UNIQUE_ID = 0;

@Component({
  selector: 'vcl-rating',
  templateUrl: './rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: RATING_TOKEN,
      useExisting: forwardRef(() => RatingComponent)
    }
  ],
  styles: [
    `
      :host.vclRatingVertical {
        flex-direction: column;
      }
    `
  ]
})
export class RatingComponent implements ControlValueAccessor, OnDestroy, OnChanges, AfterContentInit, AfterViewInit, Rating, FormControlInput {

  constructor(
    private cdRef: ChangeDetectorRef,
    @Optional()
    public ngControl?: NgControl,
    @Optional()
    @Inject(FORM_CONTROL_HOST)
    private formControlHost?: FormControlHost,
    @Optional()
    @Inject(FORM_CONTROL_ERROR_STATE_AGENT)
    private _errorStateAgent?: FormControlErrorStateAgent,
  ) {
    // Set valueAccessor instead of providing it to avoid circular dependency of NgControl
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  private cvaDisabled = false;
  private generatedId = 'vcl_rating_' + UNIQUE_ID++;
  private stateChangeEmitter = new Subject<void>();

  controlType = 'rating';

  stateChange = this.stateChangeEmitter.asObservable();

  @HostBinding('attr.id')
  get elementId() {
    return this.id || this.generatedId;
  }

  @HostBinding('class.vclRating')
  classVclRating = true;

  @HostBinding('attr.role')
  attrRole = 'slider';

  @HostBinding('attr.aria-valuemax')
  get attrAriaValuemax() {
    return this.ratingItems.length;
  }

  @HostBinding('attr.aria-valuemin')
  attrAriaValuemin = 0;

  @HostBinding('class.vclRatingVertical')
  get classVclRatingVertical() {
    return this.type === 'vertical';
  }

  @HostBinding('style.height')
  get styleHeight() {
    return this.type === 'vertical' ? 'unset' : null;
  }

  @HostBinding('class.vclError')
  get hasError() {
    const errorStateAgent = this.errorStateAgent || this._errorStateAgent;
    return errorStateAgent ? errorStateAgent(this.formControlHost, this) : false;
  }

  @ViewChildren(RatingItemComponent)
  ratingItemViewChildren: QueryList<RatingItemComponent>;

  @ContentChildren(RatingItemComponent)
  ratingItemContentChildren: QueryList<RatingItemComponent>;

  get hasContent() {
    return this.ratingItemContentChildren && this.ratingItemContentChildren.length > 0;
  }

  get ratingItems() {
    if (this.hasContent) {
      return this.ratingItemContentChildren.toArray();
    } else {
      return this.ratingItemViewChildren ? this.ratingItemViewChildren.toArray() : [];
    }
  }

  @Input()
  id?: string;

  @Input()
  errorStateAgent?: FormControlErrorStateAgent;

  @Input()
  type: 'horizontal' | 'vertical' | 'small' = 'horizontal';

  @Input()
  fullStar = 'vcl:star';

  @Input()
  halfStar = 'vcl:star-half';

  @Input()
  emptyStar = 'vcl:star-empty';

  @Input()
  starCount = 5;

  @Input()
  halves = true;

  @HostBinding('attr.aria-valuenow')
  @Input()
  value = 0;

  @Input()
  readonly = false;

  @Input()
  disabled = false;

  @Output()
  valueChange = new EventEmitter<number>();

  @HostBinding('class.vclDisabled')
  get isDisabled() {
    return this.cvaDisabled || this.disabled;
  }

  get isFocused() {
    return this.ratingItems.some(ri => ri.focused);
  }

  onLabelClick(event: Event): void {

  }

  onRatingItemClick(item: RatingItemComponent) {
    if (this.disabled || this.readonly) {
      return;
    }

    this.value = this.ratingItems.indexOf(item) + 1;
    this.sync();
    this.valueChange.emit(this.value);
    this.onChangeCallback && this.onChangeCallback(this.value);
  }

  isHalfStar(star: number): boolean {
    return this.halves ? (Math.round(this.value * 2) / 2) === star - 0.5 : false;
  }

  round(x: number): number {
    return Math.round(x);
  }

  sync() {
    this.ratingItems.forEach((ri, idx) => {
      const stars = idx + 1;
      if (this.round(this.value) >= stars && !this.isHalfStar(stars)) {
        ri.setState('full');
      } else if (this.isHalfStar(stars)) {
        ri.setState('half');
      } else {
        ri.setState('empty');
      }
    });
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
    this.stateChangeEmitter.complete();
  }

  onRatingItemBlur(item: RatingItemComponent): void {
    if (this.ratingItems.pop() === item) {
      this.onTouchedCallback();
      this.stateChangeEmitter.next();
    }
  }

  get starArray() {
    return this.starCount === undefined ? undefined : Array(this.starCount).fill(0).map((x, i) => i + 1);
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
  }
}
