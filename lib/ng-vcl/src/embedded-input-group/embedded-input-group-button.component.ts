import { ElementRef, Inject, HostBinding, Component, Directive, Self, forwardRef, ChangeDetectorRef, Optional, SkipSelf } from '@angular/core';
import { ButtonComponent, ButtonIconComponent, ButtonObserver, BUTTON_OBSERVER_TOKEN } from '../button';
import { EMBEDDED_INPUT_GROUP_TOKEN, EmbeddedInputGroup } from './interfaces';

@Component({
  selector: 'button[vcl-embedded-input-group]',
  templateUrl: '../button/button-icon.component.html',
  exportAs: 'vclButton',
  providers: [
    {
      provide: ButtonComponent,
      useExisting: forwardRef(() => EmbeddedInputGroupButtonComponent)
    }
  ]
})
export class EmbeddedInputGroupButtonComponent extends ButtonIconComponent {

  constructor(
    @Inject(EMBEDDED_INPUT_GROUP_TOKEN)
    private group: EmbeddedInputGroup,
    elementRef: ElementRef,
    cdRef: ChangeDetectorRef,
    @SkipSelf()
    @Optional()
    @Inject(BUTTON_OBSERVER_TOKEN)
    observer?: ButtonObserver,
  ) {
    super(cdRef, elementRef, observer) ;
   }

  @HostBinding('class.vclTransparent')
  classVCLTransparent = true;

  @HostBinding('class.vclAppended')
  classVCLAppended = true;

  @HostBinding('class.vclDisabled')
  @HostBinding('attr.disabled')
  get isDisabled(): boolean | null {
    return (this.getDisabled() || this.group.disabled) ? true : null;
  }
}
