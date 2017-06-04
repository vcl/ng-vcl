import {
  Component, Input, ElementRef,
  trigger, state, transition, animate,
  style, AfterViewInit, Inject, Renderer, OnDestroy, OnChanges, SimpleChanges
} from '@angular/core';
import { ICoordinate } from "./ICoordinate";
import { TooltipService } from './tooltip.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'vcl-tooltip',
  templateUrl: './tooltip.component.html',
  host: {
    '[class.vclTooltip]': 'true',
  },
  styles: [`:host{ top: 0; left: 0 }`],
  animations: [
    trigger('enterAnimation', [
      state('shown', style({ opacity: 1, 'z-index': 'initial' })),
      state('hidden', style({ opacity: 0, 'z-index': '-1' })),
      state('none', style({ opacity: 0 })),
      transition('hidden => shown', animate('0.2s')),
    ])
  ]
})
export class TooltipComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() content: string;
  @Input() placement: "top" | "bottom" | "left" | "right" = "top";
  @Input() hostElement: HTMLElement;

  animationState: 'shown' | 'hidden' | 'none' = 'none';
  // Initial position should out of screen
  tooltipPlacement: ICoordinate = { Top: -1000, Left: -1000 };
  tooltipPosition: string = 'vclTooltip vclArrowPointerTop';
  // true if initialized by directive
  showOnInit: boolean = false;

  constructor(private element: ElementRef,
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer,
    private tooltipService: TooltipService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.placement || changes.content) {
      this.ShowTooltip()();
    }
  }

  ngAfterViewInit(): void {
    const context = this;
    // behavior being handled by directive
    if (context.showOnInit) {
      setTimeout(() => {
        context.ShowTooltip()();
      });
    } else {
      context.animationState = 'none';
      context.renderer.listen(context.hostElement, 'mouseenter', context.ShowTooltip(context));
      context.renderer.listen(context.hostElement, 'focusin', context.ShowTooltip(context));
      context.renderer.listen(context.hostElement, 'focusout', () => { context.animationState = 'hidden'; });
      context.renderer.listen(context.hostElement, 'mouseleave', () => { context.animationState = 'hidden'; });
    }
  }

  ShowTooltip(context: this = this): Function {
    return () => {
      if (context.hostElement) {
        const tooltipOffset = context.tooltipService.positionElements(context.hostElement,
          context.element.nativeElement.children[0].children[0], context.placement);
        context.tooltipPlacement = {
          Top: tooltipOffset.Top,
          Left: tooltipOffset.Left
        };
        context.animationState = 'shown';
        context.tooltipPosition = context.TooltipPosition();
        context.document.querySelector('body').appendChild(context.element.nativeElement);
        return true;
      } else {
        console.error('Host element not specified');
        return false;
      }
    };
  }

  TooltipPosition(): string {
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

  ngOnDestroy() {
    if (!this.showOnInit) {
      this.element.nativeElement.parentNode.removeChild(this.element.nativeElement);
    }
  }
}


