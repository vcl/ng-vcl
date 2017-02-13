import { ViewContainerRef, Directive, TemplateRef, Input, EmbeddedViewRef } from '@angular/core';

@Directive({
  selector: '[vclButtonStateContent]'
})
export class ButtonStateContentDirective {
  constructor(private viewContainerRef: ViewContainerRef, private tempRef: TemplateRef<any>) { }

  @Input('vclButtonStateContent')
  set state(value: string | string[]) {
    this.states = (typeof value === 'string' ? [value] : value) || [];
  }
  states: string[] = ['enabled'];

  viewRef: EmbeddedViewRef<any> | null;

  updateState(state: string) {
    if (this.states.includes(state)) {
      if (!this.viewRef) {
        this.viewContainerRef.clear();
        this.viewRef = this.viewContainerRef.createEmbeddedView(this.tempRef);
        this.viewRef.detectChanges();
      }
    } else {
      this.viewContainerRef.clear();
      this.viewRef = null;
    }
  }
}
