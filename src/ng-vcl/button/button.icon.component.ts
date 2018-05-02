import { Component, ChangeDetectionStrategy, HostBinding, Input, HostListener } from '@angular/core';

@Component({
  selector: 'button[vcl-button][icon], button[vcl-button][iconSrc]',
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
