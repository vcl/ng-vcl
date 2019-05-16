import { HostListener, Injector, ElementRef, Input, InjectionToken, ViewContainerRef, Directive, Injectable } from '@angular/core';
import { LayerBase } from '../layer/index';
import { Overlay, ConnectedPosition } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Subject, interval, EMPTY } from 'rxjs';
import { debounce, take } from 'rxjs/operators';
import { TooltipComponent } from './tooltip.component';
import { TooltipInlineComponent } from './tooltip-inline.component';
import { TOOLTIP_TOKEN, Tooltip, TooltipPosition } from './types';

const calcPos = (position: TooltipPosition, offset: number): ConnectedPosition => {
  if (position === 'right') {
    return {
      originX: 'end',
      originY: 'center',
      overlayX: 'start',
      overlayY: 'center',
      offsetX: offset
    };
  } else if (position === 'left') {
    return {

      originX: 'start',
      originY: 'center',
      overlayX: 'end',
      overlayY: 'center',
      offsetX: -offset
    };
  } else if (position === 'top') {
    return {

      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom',
      offsetY: -offset
    };
  } else if (position === 'bottom') {
    return {

      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top',
      offsetY: offset
    };
  } else {
    throw new Error('Invalid tooltip position');
  }
};

@Directive({
  selector: '[vclTooltip]',
})
export class TooltipDirective extends LayerBase {

  constructor(
    injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef,
    private overlay: Overlay
  ) {
    super(injector);
  }

  private mouseOverEmitter = new Subject<boolean>();

  tooltipTrigger = this.mouseOverEmitter.asObservable().pipe(
      debounce((show) => {
        if (show) {
          if (this.showDelay) {
            return interval(this.showDelay).pipe(take(1));
          }
          return EMPTY;
        } else {
          if (this.hideDelay) {
            return interval(this.hideDelay).pipe(take(1));
          }
          return EMPTY;
        }
      }
    )
  ).subscribe(visible => {
    if (visible && !this.isAttached) {
      this.show();
    } else if (!visible && this.isAttached) {
      this.hide();
    }
  });


  // tslint:disable-next-line:no-input-rename
  @Input('vclTooltip')
  tooltip: string | TooltipComponent;

  // tslint:disable-next-line:no-input-rename
  @Input('vclTooltipPosition')
  position: 'left' | 'right' | 'top' | 'bottom' = 'top';

  // tslint:disable-next-line:no-input-rename
  @Input('vclTooltipArrowPointer')
  arrowPointer = true;

  // tslint:disable-next-line:no-input-rename
  @Input('vclTooltipShowDelay')
  showDelay = 0;

  // tslint:disable-next-line:no-input-rename
  @Input('vclTooltipHideDelay')
  hideDelay = 0;

  // tslint:disable-next-line:no-input-rename
  @Input('vclTooltipOffset')
  offset = 10;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.mouseOverEmitter.next(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.mouseOverEmitter.next(false);
  }

  show() {
    this.attach({
      positionStrategy: this.overlay
                            .position()
                            .flexibleConnectedTo(this.elementRef)
                            .withPositions([
                              calcPos(this.position, this.offset),
                              calcPos('right', this.offset),
                              calcPos('left', this.offset),
                              calcPos('top', this.offset),
                              calcPos('bottom', this.offset),
                            ])
    });
  }

  hide() {
    this.detach();
  }

  createPortal() {
    if (typeof this.tooltip === 'string') {
      const injector = Injector.create([{
        provide: TOOLTIP_TOKEN,
        useValue: {
          content: this.tooltip,
          position: this.position,
          arrowPointer: this.arrowPointer
        } as Tooltip
      }], this.injector);
      return new ComponentPortal(TooltipInlineComponent, this.viewContainerRef, injector);

    } else if (this.tooltip instanceof TooltipComponent) {
      return new TemplatePortal(this.tooltip.templateRef, this.viewContainerRef, {
        tooltip: {
          position: this.position,
          arrowPointer: this.arrowPointer
        }
      });
    } else {
      throw new Error('Invalid tooltip property');
    }
  }
}
