import {
  Component, Input, ElementRef,
  trigger, state, transition, animate,
  style, AfterViewInit, Inject
} from '@angular/core';
import { ICoordinate } from "./ICoordinate";
import { tooltipService } from './tooltip.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'vcl-tooltip',
  templateUrl: './tooltip.component.html',
  host: {
    '[class.vclTooltip]': 'true',
  },
  styles: [`:host{ top: 0; left: 0}`],
  animations: [
    trigger('enterAnimation', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('shown <=> hidden', animate('.2s'))
    ])
  ]
})
export class TooltipComponent implements AfterViewInit {
  @Input() content: string;
  @Input() placement: "top" | "bottom" | "left" | "right" = "top";
  @Input() hostElement: HTMLElement;
  animationState: 'shown' | 'hidden' = 'hidden';
  // Initial position should out of screen
  tooltipPlacement: ICoordinate = { Top: -1000, Left: -1000 };
  tooltipPosition: string = '';

  constructor(private element: ElementRef,
    @Inject(DOCUMENT) private document: any) { }

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
        context.tooltipPosition = context.GetTooltipPosition();
        //context.document.querySelector('body').appendChild(context.element.nativeElement);
        context.document.querySelector('body').appendChild(context.hostElement);
      });
    } else {
      console.error('Host element not specified');
    }
  }

  GetTooltipPosition(): string {
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


