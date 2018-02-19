import { Component, Input, OnInit, HostBinding, ViewChild, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: 'label[vcl-form-control-label]',
  templateUrl: 'form-control-label.component.html',
  host: {
    '[class.vclFormControlLabel]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlLabelComponent {

  @ViewChild('content')
  content: ElementRef;

  @Input()
  @HostBinding('class.vclDisabled')
  disabled = false;

  @Input()
  requiredIndicatorCharacter: string = '•';

  @Input()
  label: string | undefined;

  @Input()
  subLabel: string | undefined;

  // Whether the label wraps a control
  @Input()
  wrapping?: boolean;

  @HostBinding('class.vclFormControlLabelWrapping')
  get vclFormControlLabelWrapping() {
    if (typeof this.wrapping === 'boolean') {
      return this.wrapping;
    } else {
      if (!this.label && !this.subLabel) {
        // TODO reactivate when it is possible to determine ng-content with no sub-element
        // If no label is provided wrap when content is defined
        // This triggers only when content has at least one child element or is text
        // return this.content && this.content.nativeElement && !isEmpty(this.content.nativeElement);
        return true;
      }
      return false;
    }
  }

  // Whether an indicator that an input in to the labeled control is required
  @Input()
  required: boolean = false;

  // Accessible label for the required indicator
  @Input()
  requiredIndLabel: string;
}

function isEmpty(element: HTMLElement): boolean {
  const nodes = Array.from(element.childNodes);
  return nodes.every(node => {
    if (node.nodeType === 3 && node.textContent && node.textContent.trim().length === 0) {
      return true;
    }
    if (node.nodeType === 8) {
      return true;
    }
    return false;
  });
}
