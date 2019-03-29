import { Component, ChangeDetectionStrategy, HostBinding, Input, HostListener } from '@angular/core';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'button[vcl-icogram-button]',
  exportAs: 'vclIcogramButton',
  templateUrl: 'button-icogram.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonIcogramComponent extends ButtonComponent {

  @Input()
  prepIcon: string;

  @Input()
  appIcon?: string;
}
