import { Component, ChangeDetectionStrategy, HostBinding, Input, HostListener } from '@angular/core';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'button[vcl-icon-button]',
  exportAs: 'vclIconButton',
  templateUrl: 'button-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonIconComponent extends ButtonComponent {

  @HostBinding('class.vclSquare')
  vclSquare = true;

  @Input()
  icon: string;
}
