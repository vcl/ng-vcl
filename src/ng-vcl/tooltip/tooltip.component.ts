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
    trigger('enterAnimation', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('.2s'))
    ])
  ]
})
export class TooltipComponent implements AfterViewInit {
  animationState: 'shown' | 'hidden' = 'hidden';
  content: string;
  placement: "top" | "bottom" | "left" | "right" = "top";
  public hostElement: HTMLElement;
  // Initial position should out of screen
  tooltipPlacement: ICoordinate = { Top: -1000, Left: -1000 };

  constructor(private element: ElementRef) { }

  ngAfterViewInit(): void {
    if (this.hostElement) {
      const tooltipOffset = tooltipService.positionElements(this.hostElement, this.element.nativeElement.children[0].children[0], this.placement);
      const context = this;
      // to avoid from ExpressionChangedAfterItHasBeenCheckedError
      setTimeout(() => {
        context.tooltipPlacement = {
          Top: tooltipOffset.Top,
          Left: tooltipOffset.Left
        };
        context.animationState = 'shown';
      });
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


