import { Component, ChangeDetectionStrategy, HostBinding, Input, HostListener } from '@angular/core';

@Component({
  selector: 'button[vcl-button][icon]:not(button[vcl-button][busy]), button[vcl-button][iconSrc]:not(button[vcl-button][busy])',
  templateUrl: 'button.icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.vclSquare]': 'true'
  }
})
export class ButtonIconComponent {

  @HostBinding('attr.aria-label')
  @Input()
  title: string;

  @Input()
  icon: string;

  @Input()
  iconSrc: string;
}
