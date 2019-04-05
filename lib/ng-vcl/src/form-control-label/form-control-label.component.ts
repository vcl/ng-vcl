import { Component, Input, HostBinding, ChangeDetectionStrategy, EventEmitter, ContentChildren, QueryList, HostListener, forwardRef, ElementRef, OnDestroy } from '@angular/core';
import { FORM_CONTROL_LABEL_MEMBER_TOKEN, FormControlLabelMember } from './interfaces';
@Component({
  selector: 'label[vcl-form-control-label]',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlLabelComponent {

  @Input()
  target?: FormControlLabelMember;

  @Input()
  for?: string;

  @HostBinding('attr.for')
  get attrFor() {
    if (this.for) {
      return this.for;
    } else if (this.target && this.target.elementId) {
      return this.target && this.target.elementId;
    }
    return null;
  }

  @HostBinding('class.vclFormControlLabelWrapping')
  get classVCLFormControlLabelWrapping() {
    return this.children && this.children.length > 0;
  }

  @ContentChildren(FORM_CONTROL_LABEL_MEMBER_TOKEN as any, {
    read: FORM_CONTROL_LABEL_MEMBER_TOKEN,
    descendants: true
  })
  children: QueryList<FormControlLabelMember>;

  @HostBinding('class.vclFormControlLabel')
  classVCLFormControlLabel = true;

  @HostBinding('class.vclDisabled')
  get isDisabled() {
    return this.targets.every(t => t.isDisabled);
  }

  private get targets() {
    return [this.target, ...this.children.toArray()].filter(c => !!c);
  }

  @HostListener('click', ['$event'])
  onclick(event: Event) {
    this.targets.forEach(t => t.notifyFormControlLabelClick(event));
  }
}
