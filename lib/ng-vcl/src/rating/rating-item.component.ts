import { Component, ChangeDetectionStrategy, HostBinding, Input, InjectionToken, Inject, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { ENTER } from '@angular/cdk/keycodes';
import { IconService } from '../icon/index';

export interface Rating {
  fullStar: string;
  halfStar: string;
  emptyStar: string;
  onRatingItemClick(item: RatingItemComponent): void;
  onRatingItemBlur(item: RatingItemComponent): void;
}

export const RATING_TOKEN = new InjectionToken<Rating>('vcl_rating');

@Component({
  selector: 'vcl-rating-item',
  templateUrl: 'rating-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgClass],
})
export class RatingItemComponent {

  constructor(
    @Inject(RATING_TOKEN)
    private _rating: Rating,
    private ngClass: NgClass,
    private iconService: IconService
  ) {
    this.setState(this.state);
  }

  focused = false;

  @HostBinding('class.vclRatingItem')
  vclRatingItem = true;

  @HostBinding('class.vclRatingItem')
  vclIcon = true;

  @HostBinding('attr.tabindex')
  attrTabindex = 0;

  state: 'empty' | 'half' | 'full';

  setState(state: 'empty' | 'half' | 'full') {
    this.state = state;
    let icon;
    if (this.state === 'empty') {
      icon = this._rating.emptyStar;
    } else if (this.state === 'half') {
      icon = this._rating.halfStar;
    } else {
      icon = this._rating.fullStar;
    }
    this.ngClass.ngClass = this.iconService.resolve(icon);
    this.ngClass.ngDoCheck();
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

  @HostListener('focus')
  onFocus() {
    this.focused = true;
  }

  @HostListener('blur')
  onBlur() {
    this.focused = false;
    this._rating.onRatingItemBlur(this);
  }
}
