import { Component, Input, OnInit } from '@angular/core';
import { HintService } from './hint.service';
import { HintConfig, Placement } from './types';

@Component({
  selector: HintConfig.HINT_TAG,
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  private static readonly Tag: string = 'TourComponent';
  private readonly tag: string = TourComponent.Tag;
  private readonly debug: boolean = false;

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

  constructor(public hint: HintService) {
    const tag: string = `${this.tag}.constructor()`;
    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'hint.options:', hint.options);
  }

  ngOnInit(): void {
    this.hint.register(`${this.selector}_${Number(this.order || 0)}`, this);
  }

  showStep(): void {
    this.hint.showingStep$.next(this);
    this.position = this.position || this.hint.options.defaultPosition;
    this.order = +this.order || this.hint.options.defaultOrder;
    let highlightedElement = document.getElementById(this.selector);

    if (highlightedElement) {
      highlightedElement.style.zIndex = HintConfig.Z_INDEX;

      if (this.hint.options.elementsDisabled) {
        this.disableClick(highlightedElement);
      }

      if (this.hint.options.applyRelative) {
        this.enableHighlight(highlightedElement);
      }

      switch (this.position) {
        case Placement.Top:
          this.transformClass = 'transformX_50 transformY_100';
          this.topPos = highlightedElement.offsetTop - this.hint.options.defaultLayer;
          this.leftPos = highlightedElement.offsetLeft + highlightedElement.offsetWidth / 2;
          break;
        case Placement.Bottom:
          this.transformClass = 'transformX_50';
          this.topPos = highlightedElement.offsetTop + highlightedElement.offsetHeight + this.hint.options.defaultLayer;
          this.leftPos = highlightedElement.offsetLeft + highlightedElement.offsetWidth / 2;
          break;
        case Placement.Left:
          this.topPos = highlightedElement.offsetTop + highlightedElement.offsetHeight / 2;
          this.leftPos = highlightedElement.offsetLeft - this.hint.options.defaultLayer;
          this.transformClass = 'transformY_50 transformX_100';
          break;
        case Placement.Right:
          this.topPos = highlightedElement.offsetTop + highlightedElement.offsetHeight / 2;
          this.leftPos = highlightedElement.offsetLeft + highlightedElement.offsetWidth + this.hint.options.defaultLayer;
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
    this.hasNext = this.hint.hasNext();
    this.hasPrevious = this.hint.hasPrevious();
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
    this.hint.end();
  }

  next(): void {
    this.hideStep();
    this.hint.showNext();
  }

  previous(): void {
    this.hideStep();
    this.hint.showPrevious();
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