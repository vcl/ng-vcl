
import { Directive, ViewChild, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'vcl-select-option'
})
export class SelectOption {

  @ViewChild(TemplateRef)
  content: TemplateRef<any>;

  @Input()
  value: any;

  @Input()
  sublabel: string;

  @Input()
  label: string;

  @Input()
  disabled: boolean = false;
}
