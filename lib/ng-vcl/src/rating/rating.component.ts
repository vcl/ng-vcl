import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  Output,
  HostListener
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RatingComponent),
  multi: true
};

@Component({
  selector: 'vcl-rating',
  templateUrl: 'rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  styles: [
    `
      .vclRatingVertical {
        flex-direction: column;
      }
    `
  ]
})
export class RatingComponent implements ControlValueAccessor {

  @HostBinding()
  tabindex = 0;

  @Input()
  type: 'horizontal' | 'vertical' | 'small' = 'horizontal';

  @Input()
  fullStar = 'fas fa-star';

  @Input()
  halfStar = 'fas fa-star-half-alt';

  @Input()
  emptyStar = 'fas fa-star';

  @Input()
  starCount = 5;

  @Input()
  halves = true;

  @Input()
  value = 0;

  @Input()
  readonly = false;

  @Input()
  iconSize?: string = undefined;

  @Input()
  textSize?: string = undefined;

  @Input()
  showText = true;

  @HostBinding('class.vclDisabled')
  @Input()
  disabled = false;

  @Output()
  valueChange = new EventEmitter<number>();

  constructor(private cdRef: ChangeDetectorRef) { }

  @HostListener('blur')
  onBlur() {
    this.onTouchedCallback();
  }


  clickStar(star) {
    if (this.disabled || this.readonly) {
      return;
    }

    this.value = star;
    this.valueChange.emit(this.value);
    this.onChangeCallback && this.onChangeCallback(this.value);
  }

  isHalfStar(star: number): boolean {
    return this.halves ? (Math.round(this.value * 2) / 2) === star - 0.5 : false;
  }

  round(x: number): number {
    return Math.round(x);
  }

  getIcon(stars: number, small: boolean = false) {
    const classes = [
      'vclRatingItem',
      'vclIcon'
    ];

    if (small) {
      if (this.value >= this.starCount) {
        classes.push(...this.fullStar.split(' '));
      } else if (this.value >= this.starCount / 2 && this.value < this.starCount) {
        classes.push(...this.halfStar.split(' '));
      } else {
        classes.push(...this.emptyStar.split(' '));
      }
    } else {
      if (this.round(this.value) >= stars && !this.isHalfStar(stars)) {
        classes.push(...this.fullStar.split(' '));
      } else if (this.isHalfStar(stars)) {
        classes.push(...this.halfStar.split(' '));
      } else {
        classes.push(...this.emptyStar.split(' '));
      }
    }

    return classes;
  }

  get starArray() {
    return Array(this.starCount).fill(0).map((x, i) => i + 1);
  }

  /**
   * things needed for ControlValueAccessor-Interface
   */
  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  writeValue(value: number): void {
    this.value = value;
    this.cdRef.markForCheck();
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.cdRef.markForCheck();
  }
}
