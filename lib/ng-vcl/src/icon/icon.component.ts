import {
  Component,
  Input,
  HostBinding,
  SimpleChanges,
  OnChanges,
  ChangeDetectionStrategy,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { HostIconRendererService } from './host-icon-renderer.service';

@Component({
    selector: 'vcl-icon',
    providers: [HostIconRendererService],
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class IconComponent implements OnChanges, AfterViewInit {
  constructor(
    private hostIcon: HostIconRendererService,
    private elementRef: ElementRef
  ) {}

  @Input()
  role?: string;

  @HostBinding('class.icon')
  vclIcon = true;

  @HostBinding('attr.role')
  get attrRole() {
    return this.role || 'img';
  }

  @Input()
  icon?: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.icon && !changes.icon.isFirstChange()) {
      this.hostIcon.setIcon(this.elementRef, changes.icon.currentValue);
    }
  }

  ngAfterViewInit() {
    if (this.icon) {
      this.hostIcon.setIcon(this.elementRef, this.icon);
    }
  }
}
