import { Component, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vcl-tooltip-container',
  templateUrl: './tooltip.component.html',
  host: {
    '[class.vclTooltip]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {

  paddingOffset: number = 20;
  content: string;
  position: string;
  targetElement: HTMLElement;
  tooltip: HTMLElement;



  constructor(private element: ElementRef) {
    this.tooltip = element.nativeElement;
  }

  ngAfterViewInit() {
  }

  get tooltipPosiiton(): string {
    switch (this.position) {
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

  get tooltipOffsetHorizontal(): string {

    switch (this.position) {
      case 'right':
        {
          return 0 + 'px';
        }
      case 'left':
        {
          return 0 + 'px';
        }
      case 'bottom':
        {
          return 0 + 'px';
        }
      default:
        {
          let targetElementCenter = this.targetElement.offsetWidth / 2;
          let tooltipCetner = this.tooltip.offsetWidth / 2;
          return -(targetElementCenter + tooltipCetner + this.paddingOffset) + 'px';
        }
    }

  }

  get tooltipOffsetVertical(): string {
    switch (this.position) {
      case 'right':
        {
          return 0 + 'px';
        }
      case 'left':
        {
          return 0 + 'px';
        }
      case 'bottom':
        {
          return 0 + 'px';
        }
      default:
        {
          return '-40px';
        }

    }

  }
}
