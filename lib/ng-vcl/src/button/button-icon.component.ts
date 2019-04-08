import { Component, ChangeDetectionStrategy, HostBinding, Input, HostListener, forwardRef } from '@angular/core';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'button[vcl-icon-button], a[vcl-icon-button]',
  exportAs: 'vclButton',
  templateUrl: 'button-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ButtonComponent,
      useExisting: forwardRef(() => ButtonIconComponent)
    }
  ]
})
export class ButtonIconComponent extends ButtonComponent {

  @HostBinding('class.vclSquare')
  vclSquare = true;

  @Input()
  icon: string;
}
