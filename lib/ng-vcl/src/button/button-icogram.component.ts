import { Component, ChangeDetectionStrategy, Input, forwardRef } from '@angular/core';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'button[vcl-icogram-button]',
  exportAs: 'vclIcogramButton',
  templateUrl: 'button-icogram.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ButtonComponent,
      useExisting: forwardRef(() => ButtonIcogramComponent)
    }
  ]
})
export class ButtonIcogramComponent extends ButtonComponent {

  @Input()
  prepIcon: string;

  @Input()
  appIcon?: string;
}
