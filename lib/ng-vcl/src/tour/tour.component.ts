import {
  HorizontalConnectionPos,
  VerticalConnectionPos,
  ConnectedPosition,
} from '@angular/cdk/overlay';
import {
  Component,
  Input,
  OnInit,
  ElementRef,
  ViewChild,
  OnChanges,
} from '@angular/core';

import { PopoverDirective } from '../popover/index';

import { TourService } from './tour.service';

@Component({
  selector: 'vcl-tour-step',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss'],
})
export class TourComponent implements OnInit, OnChanges {
  @ViewChild('popover')
  public popover: PopoverDirective;

  @Input() public title: string;
  @Input() public order: number;

  @Input() public target: string | ElementRef | Element;

  @Input() public originX: HorizontalConnectionPos = 'center';
  @Input() public originY: VerticalConnectionPos = 'bottom';
  @Input() public overlayX: HorizontalConnectionPos = 'center';
  @Input() public overlayY: VerticalConnectionPos = 'top';
  @Input() public offsetX: number;

  @Input() public offsetY: number;

  public positions: ConnectedPosition[];

  public visible = false;

  public hasNext = false;
  public hasPrevious = false;

  constructor(public tour: TourService) {}

  public ngOnInit(): void {
    this.tour.register(this);
  }

  public ngOnChanges(): void {
    this.positions = [
      {
        originX: this.originX,
        originY: this.originY,
        overlayX: this.overlayX,
        overlayY: this.overlayY,
        offsetX: this.offsetX,
        offsetY: this.offsetY,
      },
    ];
  }

  public show(): void {
    const target = this.popover.target;
    const el = target instanceof ElementRef ? target.nativeElement : target;
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
    const target = this.popover.target;
    const highlightedElement =
      target instanceof ElementRef ? target.nativeElement : target;

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
    element.setAttribute('position', element.style.position as string);
    element.style.position = 'relative';
  }

  private disableHighlight(element: HTMLElement): void {
    element.style.position = element.getAttribute('position');
  }
}
