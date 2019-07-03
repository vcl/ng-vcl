import { MaterialMode, FormControlGroupMaterialConfig } from './types';
import { Directive, forwardRef, Input } from '@angular/core';

@Directive({
  selector: 'form[vclMaterial]',
  exportAs: 'vclMaterial',
  providers: [
    {
      provide: FormControlGroupMaterialConfig,
      useExisting: forwardRef(() => FormControlGroupMaterialConfigDirective)
    }
  ]
})
export class FormControlGroupMaterialConfigDirective extends FormControlGroupMaterialConfig {

  constructor() {
    super();
  }

  // tslint:disable-next-line:no-input-rename
  @Input('vclMaterial')
  set vclMaterial(mode: MaterialMode | undefined) {
    this.setMode(mode);
  }
}
