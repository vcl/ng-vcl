import { Component, Input, OnInit } from '@angular/core';
import { HintService } from './hint.service';
import { HintConfig, Placement } from './types';

@Component({
  selector: HintConfig.HINT_TAG,
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  @Input() title: string;
  @Input() selector: string;
  @Input() order: number;
  @Input() position: string;
  showMe: boolean;
  hasNext: boolean;
  hasPrevious: boolean;
  topPos: number;
  leftPos: number;
  transformClass: string;
  transformY: boolean;
  transformX: boolean;
  constructor(public hintService: HintService) {
  }

  ngOnInit(): void {
    this.hintService.register(`${this.selector}_${Number(this.order || 0)}`, this);
  }

  showStep(): void {
    this.hintService.showingStep$.next(this);
    this.position = this.position || this.hintService.hintOptions.defaultPosition;
    this.order = +this.order || this.hintService.hintOptions.defaultOrder;
    let highlightedElement = document.getElementById(this.selector);

    if (highlightedElement) {
      highlightedElement.style.zIndex = HintConfig.Z_INDEX;

      if (this.hintService.hintOptions.elementsDisabled) {
        this.disableClick(highlightedElement);
      }

      if (this.hintService.hintOptions.applyRelative) {
        this.enableHighlight(highlightedElement);
      }

      switch (this.position) {
        case Placement.Top:
          this.transformClass = 'transformX_50 transformY_100';
          this.topPos = highlightedElement.offsetTop - this.hintService.hintOptions.defaultLayer;
          this.leftPos = highlightedElement.offsetLeft + highlightedElement.offsetWidth / 2;
          break;
        case Placement.Bottom:
          this.transformClass = 'transformX_50';
          this.topPos = highlightedElement.offsetTop + highlightedElement.offsetHeight + this.hintService.hintOptions.defaultLayer;
          this.leftPos = highlightedElement.offsetLeft + highlightedElement.offsetWidth / 2;
          break;
        case Placement.Left:
          this.topPos = highlightedElement.offsetTop + highlightedElement.offsetHeight / 2;
          this.leftPos = highlightedElement.offsetLeft - this.hintService.hintOptions.defaultLayer;
          this.transformClass = 'transformY_50 transformX_100';
          break;
        case Placement.Right:
          this.topPos = highlightedElement.offsetTop + highlightedElement.offsetHeight / 2;
          this.leftPos = highlightedElement.offsetLeft + highlightedElement.offsetWidth + this.hintService.hintOptions.defaultLayer;
          this.transformClass = 'transformY_50';
          break;
        default:
          throw 'Invalid hint position: ' + this.position;
      }
    } else {
      this.topPos = 0;
      this.leftPos = 0;
    }

    this.showMe = true;
    this.hasNext = this.hintService.hasNext();
    this.hasPrevious = this.hintService.hasPrevious();

  }

  hideStep(): void {
    let highlightedElement = document.getElementById(this.selector);

    if (highlightedElement) {
      highlightedElement.style.zIndex = null;
      this.enableClick(highlightedElement);
      this.disableHighlight(highlightedElement);
    }

    this.showMe = false;
  }

  exit(): void {
    this.hintService.end();
  }

  next(): void {
    this.hideStep();
    this.hintService.showNext();
  }

  previous(): void {
    this.hideStep();
    this.hintService.showPrevious();
  }

  private disableClick(element: HTMLElement): void {
    element.style.cursor = 'default';
    element.style.pointerEvents = 'none';
  }
  private enableClick(element: HTMLElement): void {
    element.style.cursor = null;
    element.style.pointerEvents = null;
  }

  private enableHighlight(element: HTMLElement): void {
    element.style.position = 'relative';
  }

  private disableHighlight(element: HTMLElement): void {
    element.style.position = null;
  }
}