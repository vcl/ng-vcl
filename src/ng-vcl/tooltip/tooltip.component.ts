import {
  Component, Input, ElementRef,
  trigger, state, transition, animate, style, AfterViewInit
} from '@angular/core';
import { ICoordinate } from "./ICoordinate";
import { tooltipService } from './tooltip.service';

@Component({
  selector: 'vcl-tooltip-container',
  templateUrl: './tooltip.component.html',
  host: {
    '[class.vclTooltip]': 'true',
  },
  styles: [`:host{ top: 0; left: 0}`],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('300ms ease', style({ opacity: 1 }))
        ]),
        transition(':leave', [
          style({ opacity: 1 }),
          animate('200ms', style({ opacity: 0 }))
        ])
      ]
    )
  ]
})
export class TooltipComponent implements AfterViewInit {

  show: boolean = true;
  content: string;
  placement: "top" | "bottom" | "left" | "right" = "top";
  tooltip: HTMLElement;
  public hostElement: HTMLElement;

  tooltipPlacement: ICoordinate = { Top: -1000, Left: -1000 };

  constructor(private element: ElementRef) {
    this.tooltip = element.nativeElement;
  }

  nfAfterContentInit(): void {
    debugger;
  }

  ngAfterViewInit(): void {
    if (this.hostElement) {
      const tooltipOffset = tooltipService.positionElements(this.hostElement, this.element.nativeElement.children[0].children[0], this.placement);
      this.tooltipPlacement = {
        Top: tooltipOffset.Top,
        Left: tooltipOffset.Left
      };
      this.show = true;
    } else {
      console.error('Host element not specified');
    }
  }

  get tooltipPosition(): string {
    switch (this.placement) {
      case 'right':
        {
          return 'vclTooltip vclArrowPointerLeft';
        }
      case 'left':
        {
          return 'vclTooltip vclArrowPointerRight';
        }
      case 'bottom':
        {
          return 'vclTooltip vclArrowPointerTop';
        }
      default:
        {
          return 'vclTooltip vclArrowPointerBottom';
        }
    }
  }



}


