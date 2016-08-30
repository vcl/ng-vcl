import { Component, Input, Output, OnInit, HostBinding, HostListener, SimpleChanges, EventEmitter, ElementRef } from '@angular/core';

/**
Radio button.

## Usage

```html+hbs
<vcl-radio-button [(checked)]="checked"></vcl-radio-button>
```

@demo example
*/
@Component({
  selector: '[vcl-form-control-label]',
  templateUrl: 'form-control-label.component.html',
  host: {
    '[class.vclFormControlLabel]': 'true',
  }
})
export class FormControlLabelComponent implements OnInit {

  @Input()
  disabled = false;

  @Input()
  requiredIndicatorCharacter = '•';

  // The label
  @Input()
  label = null;

  // Optional sub-label
  @Input()
  subLabel = null;

  // Whether the label prepends the child content
  @Input()
  prepend = false;

  // Whether the label wraps the labelled control
  @Input()
  wrapping = false;

  // Whether an indicator that an input in to the labelled control is required
  @Input()
  required = false;

  // Accessible label for the required indicator
  @Input()
  requiredIndLabel = null;

  ngOnInit() { }

  @HostBinding('class.vclFormControlLabelWrapping') 
  get hbWrapping() { 
    return !!this.wrapping;
  }
  @HostBinding('class.vclDisabled') 
  get hbVclDisabled() { 
    return !!this.disabled;
  }
}


