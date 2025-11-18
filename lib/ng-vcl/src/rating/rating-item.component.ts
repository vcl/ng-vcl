import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  Input,
  InjectionToken,
  Inject,
  HostListener,
  ViewChild,
  TemplateRef,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';
import { HostIconRendererService } from '../icon/index';
import { NgTemplateOutlet } from '@angular/common';

export interface Rating {
  ratingFullIcon: string;
  ratingHalfIcon: string;
  ratingEmptyIcon: string;
  isDisabled: boolean;
  onRatingItemClick(item: VCLRatingItemComponent): void;
  onRatingItemHover(item: VCLRatingItemComponent): void;
  onRatingItemBlur(item: VCLRatingItemComponent): void;
  onRatingItemFocus(item: VCLRatingItemComponent): void;
}

export const RATING_TOKEN = new InjectionToken<Rating>('vcl_rating');

@Component({
  selector: 'vcl-rating-item',
  templateUrl: 'rating-item.component.html',
  exportAs: 'vclRatingItem',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HostIconRendererService],
  imports: [NgTemplateOutlet],
})
export class VCLRatingItemComponent implements AfterViewInit {
  constructor(
    @Inject(RATING_TOKEN)
    private _rating: Rating,
    private elementRef: ElementRef,
    private hostIconRenderer: HostIconRendererService
  ) {}

  @ViewChild('labelTemplate', { read: TemplateRef })
  labelTemplateRef?: TemplateRef<any>;

  @ViewChild('label', { read: ElementRef })
  labelElementRef?: ElementRef<HTMLElement>;

  focused = false;

  @Input()
  disabled = false;

  // tslint:disable-next-line:no-input-rename
  @Input('label')
  _label?: string;

  @HostBinding('class.rating-item')
  classVclRatingItem = true;

  @HostBinding('class.icon')
  classVclIcon = true;

  @HostBinding('attr.tabindex')
  attrTabindex = 0;

  state: 'empty' | 'half' | 'full';

  get label() {
    return this._label || this.labelElementRef.nativeElement.innerText;
  }

  setState(state: 'empty' | 'half' | 'full') {
    this.state = state;
    this.updateFontIconClass();
  }

  get isDisabled() {
    return this._rating.isDisabled || this.disabled;
  }

  @HostListener('click')
  onClick() {
    this._rating.onRatingItemClick(this);
  }

  @HostListener('keypress', ['$event'])
  async handleKeyPressEvent(event: KeyboardEvent) {
    const keyCode = event.keyCode;
    if (keyCode === ENTER) {
      event.preventDefault();
      this._rating.onRatingItemClick(this);
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this._rating.onRatingItemHover(this);
  }

  @HostListener('focus')
  onFocus() {
    this.focused = true;
    this._rating.onRatingItemFocus(this);
  }

  @HostListener('blur')
  onBlur() {
    this.focused = false;
    this._rating.onRatingItemBlur(this);
  }

  ngAfterViewInit() {
    this.updateFontIconClass();
  }

  // Remove old and set new icon classes on host
  private updateFontIconClass() {
    let icon: string;
    if (this.state === 'empty') {
      icon = this._rating.ratingEmptyIcon;
    } else if (this.state === 'half') {
      icon = this._rating.ratingHalfIcon;
    } else {
      icon = this._rating.ratingFullIcon;
    }
    this.hostIconRenderer.setIcon(this.elementRef, icon);
  }
}
