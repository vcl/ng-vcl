import {
  Component, Input, ElementRef, ChangeDetectionStrategy,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('500ms', style({ opacity: 1 }))
        ]),
        transition(':leave', [
          style({ opacity: 1 }),
          animate('500ms', style({ opacity: 0 }))
        ])
      ]
    )
  ]
})
export class TooltipComponent implements AfterViewInit {
  show: boolean;
  content: string;
  placement: "top" | "bottom" | "left" | "right" = "top";
  tooltip: HTMLElement;
  public hostElement: HTMLElement;

  constructor(private element: ElementRef) {
    this.tooltip = element.nativeElement;
  }

  ngAfterViewInit(): void {
    this.show = true;
  }

  get tooltipPosition(): string {
    switch (this.placement) {
      case 'right':
        {
          return 'vclTooltip vclArrowPointerRight';
        }
      case 'left':
        {
          return 'vclTooltip vclArrowPointerLeft';
        }
      case 'bottom':
        {
          return 'vclTooltip vclArrowPointerTop ';
        }
      default:
        {
          return 'vclTooltip vclArrowPointerBottom';
        }
    }
  }

  get tooltipPlacement(): ICoordinate {

    if (!this.hostElement) {
      return { Top: 0, Left: 0 }; // ???
    }
    else {
      const tooltipPosition = tooltipService.positionElements(this.hostElement, this.element.nativeElement.children[0].children[0], this.placement);
      return {
        Top: tooltipPosition.Top,
        Left: tooltipPosition.Left
      };
    }

  }

}


