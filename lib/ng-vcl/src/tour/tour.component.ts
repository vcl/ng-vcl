import { Component, Input, OnInit, HostBinding, ElementRef, ViewChild } from '@angular/core';
import { AttachmentX, AttachmentY, PopoverComponent } from '../popover/index';
import { TourService } from './tour.service';

export const VCLTourStepTag = 'vcl-tour-step';

@Component({
  selector: VCLTourStepTag,
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  private static readonly Tag: string = 'TourComponent';
  private tag: string;

  @Input() public debug = false;
  @Input() public debugPopover = false;

  @ViewChild('popover') public readonly popover: PopoverComponent;

  @Input() public title: string;
  @Input() public order: number;

  @Input() public target: string | ElementRef | Element;

  @Input() public targetX: AttachmentX = AttachmentX.Center;
  @Input() public attachmentX: AttachmentX = AttachmentX.Center;
  @Input() public offsetAttachmentX: number;

  @Input() public targetY: AttachmentY = AttachmentY.Bottom;
  @Input() public attachmentY: AttachmentY = AttachmentY.Top;
  @Input() public offsetAttachmentY: number;

  public visible = false;

  public hasNext = false;
  public hasPrevious = false;

  constructor(public tour: TourService) {
    const tag = `${this.tag}.constructor()`;
    const debug: boolean = this.debug || false;
    if (debug) { console.log(tag, 'tour.options:', tour.options); }
  }

  public ngOnInit(): void {
    this.tag = `${TourComponent.Tag}.${this.target}`;

    const tag = `${this.tag}.ngOnInit()`;
    const debug: boolean = this.debug || false;
    this.tour.register(this);
  }

  public show(): void {
    const tag = `${this.tag}.show()`;
    const debug: boolean = this.debug || false;

    const el: HTMLElement = this.popover.targetElement as HTMLElement;
    if (debug) { console.log(tag, 'el:', el); }
    if (el) {

      el.style.zIndex = `${this.tour.options.zIndex}`;

      if (debug) { console.log(tag, 'tour.options.elementsDisabled:', this.tour.options.elementsDisabled); }
      if (this.tour.options.elementsDisabled) {
        this.disableClick(el);
      }

      if (debug) { console.log(tag, 'tour.options.applyRelative:', this.tour.options.applyRelative); }
      if (this.tour.options.applyRelative) {
        this.enableHighlight(el);
      }
    }

    this.visible = true;
    this.hasNext = this.tour.hasNext;
    this.hasPrevious = this.tour.hasPrevious;
    if (debug) { console.log(tag, 'this:', this); }
  }

  public hide(): void {
    const tag = `${this.tag}.hide()`;
    const debug: boolean = this.debug || false;

    const highlightedElement: HTMLElement = this.popover.targetElement as HTMLElement;
    if (debug) { console.log(tag, 'highlightedElement:', highlightedElement); }

    if (highlightedElement) {
      highlightedElement.style.zIndex = null;
      this.enableClick(highlightedElement);
      this.disableHighlight(highlightedElement);
    }

    this.visible = false;
    if (debug) { console.log(tag, 'this:', this); }
  }

  public previous(): void {
    const tag = `${this.tag}.previous()`;
    const debug: boolean = this.debug || false;
    if (debug) { console.log(tag); }
    this.tour.showPrevious();
  }

  public next(): void {
    const tag = `${this.tag}.next()`;
    const debug: boolean = this.debug || false;
    if (debug) { console.log(tag); }
    this.tour.showNext();
  }

  public exit(): void {
    const tag = `${this.tag}.exit()`;
    const debug: boolean = this.debug || false;
    if (debug) { console.log(tag); }
    this.tour.end();
  }

  private disableClick(element: HTMLElement): void {
    const tag = `${this.tag}.disableClick()`;
    const debug: boolean = this.debug || false;
    if (debug) { console.log(tag, 'element:', element); }
    element.style.cursor = 'default';
    element.style.pointerEvents = 'none';
  }

  private enableClick(element: HTMLElement): void {
    const tag = `${this.tag}.disableClick()`;
    const debug: boolean = this.debug || false;
    if (debug) { console.log(tag, 'element:', element); }
    element.style.cursor = 'auto';
    element.style.pointerEvents = 'visiblePainted';
  }

  private enableHighlight(element: HTMLElement): void {
    const tag = `${this.tag}.disableClick()`;
    const debug: boolean = this.debug || false;
    if (debug) { console.log(tag, 'element:', element); }
    element.setAttribute('position',  element.style.position as string);
    element.style.position = 'relative';
  }

  private disableHighlight(element: HTMLElement): void {
    const tag = `${this.tag}.disableClick()`;
    const debug: boolean = this.debug || false;
    if (debug) { console.log(tag, 'element:', element); }
    element.style.position = element.getAttribute('position');
  }
}
