import { Component, Input, OnInit, HostBinding, ViewChild, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'label[vcl-form-control-label]',
  templateUrl: 'form-control-label.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlLabelComponent {

  @ViewChild('content')
  content: ElementRef<HTMLElement>;

  @HostBinding('class.vclFormControlLabel')
  classVCLFormControlLabel = true;

  @Input()
  @HostBinding('class.vclDisabled')
  disabled = false;

  @Input()
  requiredIndicatorCharacter = '•';

  @Input()
  label?: string;

  @Input()
  subLabel?: string;

  @HostBinding('attr.for')
  @Input()
  for?: string;

  // Whether an indicator that an input in to the labeled control is required
  @Input()
  required = false;

  // Accessible label for the required indicator
  @Input()
  requiredIndLabel: string;

  @HostBinding('class.vclFormControlLabelWrapping')
  get vclFormControlLabelWrapping() {
    // Not wrapping if "for" is defined
    if (this.for || !this.content || !this.content.nativeElement) {
      return false;
    }
    // Wrapping if any ng-content is defined
    return this.hasContent;
  }

  get hasContent() {
    const element = this.content.nativeElement;

    const nodes = Array.from(element.childNodes);
    return nodes.some(node => {
      // Ignore empty text
      if (node.nodeType === 3 && node.textContent && node.textContent.trim().length === 0) {
        return false;
      }
      // Ignore comments
      if (node.nodeType === 8) {
        return false;
      }
      return true;
    });
  }
}
