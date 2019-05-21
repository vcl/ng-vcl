import { Component, Input, HostBinding, Self, SimpleChanges, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';
import { IconService } from './icon.service';

@Component({
  selector: 'vcl-icon',
  providers: [ NgClass ],
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnChanges {

  constructor(
    @Self() private ngClass: NgClass,
    private iconService: IconService
  ) { }

  @Input()
  role?: string;

  @HostBinding('class.vclIcon')
  vclIcon = true;

  @HostBinding('attr.role')
  get attrRole() {
    return this.role || 'img';
  }

  @Input()
  icon?: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.icon) {
      const icon = changes.icon.currentValue;

      let fontIconClass: string | string[];

      if (!icon) {
        fontIconClass = [];
      } else {
        fontIconClass = this.iconService.resolve(icon);
      }

      this.ngClass.ngClass = fontIconClass;
      this.ngClass.ngDoCheck();
    }
  }
}
