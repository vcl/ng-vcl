import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ZoomBoxContainerComponent } from './zoom-box-container.component';

@Component({
    selector: 'vcl-zoom-box-magnifier',
    template: '<ng-content></ng-content>',
    standalone: false
})
export class ZoomBoxMagnifierComponent {
  parent: ZoomBoxContainerComponent;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    renderer.addClass(element.nativeElement, 'zoom-box-magnifier');
  }

  update(): void {
    const styles = {
      top: this.parent.y + 'px',
      left: this.parent.x + 'px',
      width: this.parent.width + 'px',
      height: this.parent.height + 'px',
      display: !this.parent.hiding && !this.parent.invisible ? 'block' : 'none',
      'pointer-events': 'none',
    };
    Object.keys(styles).forEach(style => {
      this.renderer.setStyle(this.element.nativeElement, style, styles[style]);
    });
  }
}
