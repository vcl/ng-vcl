import { Component, OnInit, Input, ChangeDetectionStrategy, HostBinding, ElementRef } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

/**
Combination of icon and text of which both are optional and can be permuted.
Icons can be prepended or appended to a textual label and can be sourced from icon
fonts or directly from file based imagery.
The component takes care of accessibility aspects such rendering appropriate aria
attributes.
It also renders accessability labels for icons if no label for the icogram is
provided.
Note: the optionally generated anchor elemt's default action (follow the link)
is _not_ supressed when using the `href` property.
Us the vcl-link component if you want to have a fully fledged anchor tag.
## Usage
```html
<vcl-icogram label="some label" prepIcon="fa fa-chevron-right" flexLabel=true></vcl-icogram>
<vcl-icogram label="some label" prepIconSrc="..." href="http://example.org"></vcl-icogram>
<vcl-icogram label="some label" use="..."></vcl-icogram>
<vcl-icogram>
  <vcl-icon icon="fa:close"></vcl-icon>
</vcl-icogram>
```
@param    label           optional      textual label
@param    href            optional      if an href is given an accessible link is generated
@param    flexLabel       optional      the label gets a `vclLayoutFlex` class if true
@param    prepIcon        optional      Icon as defined by the icon component
@param    appIcon         optional      Same as `prepIcon` but appended
@demo example
*/
@Component({
  selector: 'vcl-icogram, [vcl-icogram]',
  templateUrl: 'icogram.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IcogramComponent implements OnInit {

  @Input() label: string;
  @Input() href: string;
  @Input() flexLabel: boolean;
  @Input() prepIcon: string;
  @Input() appIcon: string;
  private el: HTMLElement;

  // TODO prepIconSrc not implemented but used in example
  // @Input() prepIconSrc: string;

  constructor(elRef:ElementRef) {
    this.el = elRef.nativeElement;
   }

  ngOnInit() { }

  @HostBinding('attr.role') 
  get ariaRole() {
    return (this.el && this.el.tagName.toLowerCase()!=='a' && this.href) ? 'link' : null;
  }

  // TODO: Not necessary: icon is always hidden
  // If a textual label is given, the icons can be
  // hidden in terms of a11ly.
  // get a11IconHidden() {
  //  return !!this.label;
  // }
}
