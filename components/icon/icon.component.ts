import { Component, Input } from '@angular/core';
import template from './icon.component.html';

@Component({
  selector: 'vcl-icon',
  template
})
export class IconComponent {
  @Input() class: string;  // CSS classes, usually the class(es) of an icon from an icon font
  @Input() src: string;    // URL of a graphics resource
  @Input() svguse: string; // Generates an SVG `use` tag referencing the value
  @Input() icon: string;   // Icon generator lookup via icon provider registered in the meta facility
  // TODO: aria-label

  fontIconClass: string;

  ngOnInit() {
    if (this.icon) {
      // TODO: use vcl-icon-providers
      this.fontIconClass = this.icon.split(':').join(' fa-');
    }
  }
}
 