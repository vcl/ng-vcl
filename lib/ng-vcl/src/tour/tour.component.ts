import { Component, Input, OnInit, HostBinding, ElementRef, ViewChild } from '@angular/core';
import { PopoverComponent } from '../popover/index';
import { TourService } from './tour.service';
import { HorizontalConnectionPos, VerticalConnectionPos } from '@angular/cdk/overlay';

@Component({
  selector: 'vcl-tour-step',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  @ViewChild('popover') public readonly popover: PopoverComponent;

  @Input() public title: string;
  @Input() public order: number;

  @Input() public target: string | ElementRef | Element;

  @Input() public originX: HorizontalConnectionPos = 'center';
  @Input() public originY: VerticalConnectionPos = 'bottom';
  @Input() public overlayX: HorizontalConnectionPos = 'center';
  @Input() public overlayY: VerticalConnectionPos = 'top';
  @Input() public offsetX: number;

  @Input() public offsetY: number;

  public visible = false;

  public hasNext = false;
  public hasPrevious = false;

  constructor(public tour: TourService) {
  }

  public ngOnInit(): void {
    this.tour.register(this);
  }

  public show(): void {
    const el: HTMLElement = this.popover.target.nativeElement as HTMLElement;
    if (el) {

      el.style.zIndex = `${this.tour.options.zIndex}`;

      if (this.tour.options.elementsDisabled) {
        this.disableClick(el);
      }

      if (this.tour.options.applyRelative) {
        this.enableHighlight(el);
      }
    }

    this.visible = true;
    this.hasNext = this.tour.hasNext;
    this.hasPrevious = this.tour.hasPrevious;
  }

  public hide(): void {
    const highlightedElement: HTMLElement = this.popover.target.nativeElement as HTMLElement;

    if (highlightedElement) {
      highlightedElement.style.zIndex = null;
      this.enableClick(highlightedElement);
      this.disableHighlight(highlightedElement);
    }

    this.visible = false;
  }

  public previous(): void {
    this.tour.showPrevious();
  }

  public next(): void {
    this.tour.showNext();
  }

  public exit(): void {
    this.tour.end();
  }

  private disableClick(element: HTMLElement): void {
    element.style.cursor = 'default';
    element.style.pointerEvents = 'none';
  }

  private enableClick(element: HTMLElement): void {
    element.style.cursor = 'auto';
    element.style.pointerEvents = 'visiblePainted';
  }

  private enableHighlight(element: HTMLElement): void {
    element.setAttribute('position',  element.style.position as string);
    element.style.position = 'relative';
  }

  private disableHighlight(element: HTMLElement): void {
    element.style.position = element.getAttribute('position');
  }
}
