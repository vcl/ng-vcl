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
  requiredIndicatorCharacter = '•';

  @Input()
  label: string | undefined;

  @Input()
  subLabel: string | undefined;

  @HostBinding('attr.for')
  @Input()
  for: string | undefined;

  // Whether the label wraps a control
  @Input()
  wrapping?: boolean;

  @HostBinding('class.vclFormControlLabelWrapping')
  get vclFormControlLabelWrapping() {
    if (typeof this.wrapping === 'boolean') {
      return this.wrapping;
    } else { // Auto-determine if wrapping label
      // Not wrapping if "for" is defined
      if (this.for || !this.content || !this.content.nativeElement) {
        return false;
      }
      // Wrapping if any ng-content is defined
      return hasContent(this.content.nativeElement);
    }
  }

  // Whether an indicator that an input in to the labeled control is required
  @Input()
  required = false;

  // Accessible label for the required indicator
  @Input()
  requiredIndLabel: string;
}

function hasContent(element: HTMLElement): boolean {
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
