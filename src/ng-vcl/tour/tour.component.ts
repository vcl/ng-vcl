import { Component, Input, OnInit, HostBinding, ElementRef, ViewChild } from '@angular/core';
import { AttachmentX, AttachmentY, PopoverComponent } from '@ng-vcl/ng-vcl';
import { HintService } from './hint.service';
import { HintConfig } from './types';

@Component({
  selector: HintConfig.HINT_TAG,
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  private static readonly Tag: string = 'TourComponent';
  private readonly tag: string = TourComponent.Tag;

  @Input() readonly debug: boolean = true;
  @Input() readonly debugPopover: boolean = true;

  @ViewChild('popover') readonly popover: PopoverComponent;

  @HostBinding('class') get classes(): string {
    return `vclTourContainer step${this.order}`;
  }

  @Input() title: string;
  @Input() order: number;

  @Input() target: string | ElementRef | Element;
  @Input() targetX: AttachmentX = AttachmentX.Left;
  @Input() attachmentX: AttachmentX = AttachmentX.Right;
  @Input() targetY: AttachmentY = AttachmentY.Center;
  @Input() attachmentY: AttachmentY = AttachmentY.Center;

  visible: boolean;

  hasNext: boolean;
  hasPrevious: boolean;

  constructor(public hint: HintService) {
    const tag: string = `${this.tag}.constructor()`;
    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'hint.options:', hint.options);
  }

  ngOnInit(): void {
    // this.order = Number(typeof this.order === 'number' ? this.order : this.hint.options.defaultOrder);
    this.hint.register(`${this.target}_${Number(this.order || 0)}`, this);
  }

  showStep(): void {
    this.hint.showingStep$.next(this);
    this.order = +this.order || this.hint.options.defaultOrder;

    const highlightedElement: HTMLElement = this.popover.targetElement as HTMLElement;
    if (highlightedElement) {
      highlightedElement.style.zIndex = HintConfig.Z_INDEX;

      if (this.hint.options.elementsDisabled) {
        this.disableClick(highlightedElement);
      }

      if (this.hint.options.applyRelative) {
        this.enableHighlight(highlightedElement);
      }
    }

    this.visible = true;
    this.hasNext = this.hint.hasNext();
    this.hasPrevious = this.hint.hasPrevious();
  }

  hideStep(): void {
    const highlightedElement: HTMLElement = this.popover.targetElement as HTMLElement;
    if (highlightedElement) {
      highlightedElement.style.zIndex = null;
      this.enableClick(highlightedElement);
      this.disableHighlight(highlightedElement);
    }

    this.visible = false;
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