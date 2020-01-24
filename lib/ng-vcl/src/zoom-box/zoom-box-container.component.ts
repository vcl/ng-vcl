import {Component, Input, ElementRef, ContentChild, AfterContentInit, Renderer2} from '@angular/core';
import {ZoomBoxMagnifierComponent} from './zoom-box-magnifier.component';

@Component({
  selector: 'vcl-zoom-box-container',
  template: '<div><ng-content></ng-content></div>'
})
export class ZoomBoxContainerComponent implements AfterContentInit {

  @Input()
  x = 0;

  @Input()
  y = 0;

  @Input()
  width: number;

  @Input()
  height: number;

  @Input()
  resetOnOut = false;

  @Input()
  hidden = false;

  @Input()
  hiding = false;

  @Input()
  invisible = false;

  private startX = -1;
  private startY = -1;

  private imgContent: any;

  @ContentChild(ZoomBoxMagnifierComponent)
  private magnifier: ZoomBoxMagnifierComponent;

  constructor(private element: ElementRef, renderer: Renderer2) {
    renderer.setStyle(element.nativeElement, 'position', 'relative');
  }

  ngAfterContentInit() {
    this.magnifier.parent = this;
    this.magnifier.update();
    this.imgContent = this.element.nativeElement.querySelector('img');
    this.imgContent.onmousemove = (event) => this.onMove(event);
    this.imgContent.onmouseover = () => this.onOver();
    this.imgContent.onmouseout = () => this.onOut();
  }

  onMove(event: MouseEvent): void {
    if (this.startX === -1) {
      this.startX = this.x;
      this.startY = this.y;
    }

    const minX = this.width / 2;
    const maxX = this.imgContent.width - (this.width / 2);

    const minY = this.height / 2;
    const maxY = this.imgContent.height - (this.height / 2);

    this.x = Math.max(minX, Math.min(maxX, event['layerX'])) - (this.width / 2);
    this.y = Math.max(minY, Math.min(maxY, event['layerY'])) - (this.height / 2);

    this.magnifier.update();
  }

  onOver(): void {
    if (this.hidden || this.hiding) {
      this.hiding = false;
    }

    this.magnifier.update();
  }

  onOut(): void {
    if (this.resetOnOut) {
      this.x = this.startX;
      this.y = this.startY;
    }

    if (this.hidden) {
      this.hiding = true;
    }

    this.magnifier.update();
  }

  get image() {
    return this.imgContent.getAttribute('src');
  }

}
