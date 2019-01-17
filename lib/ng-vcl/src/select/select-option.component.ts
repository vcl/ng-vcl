
import { Directive, ViewChild, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: 'vcl-select-option'
})
export class SelectOptionDirective {

  @ViewChild(TemplateRef)
  content: TemplateRef<any>;

  @Input()
  value: any;

  @Input()
  sublabel: string;

  @Input()
  label: string;

  @Input()
  prepIcon?: string;

  @Input()
  appIcon?: string;

  @Input()
  appIconSrc?: string;

  @Input()
  prepIconSrc?: string;

  @Input()
  disabled = false;
}
