import { Component, ChangeDetectionStrategy, HostBinding, Input, HostListener } from '@angular/core';

@Component({
  selector: 'button[vcl-button][label]:not(button[vcl-button][busy])',
  templateUrl: 'button.label.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonLabelComponent {

  @Input()
  title: string;

  @Input()
  label: string;

  @Input()
  prepIcon: string;

  @Input()
  appIcon: string;

  @Input()
  appIconSrc: string;

  @Input()
  prepIconSrc: string;

  @HostBinding('attr.aria-label')
  get ariaLabel() {
    return this.title || this.label;
  }
}
