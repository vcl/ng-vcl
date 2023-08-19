import {
  Overlay,
  ConnectedPosition,
  FlexibleConnectedPositionStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import {
  HostListener,
  Injector,
  ElementRef,
  Input,
  ViewContainerRef,
  Directive,
  OnChanges,
  SimpleChanges,
  Optional,
  TemplateRef,
  HostBinding,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subject, interval, EMPTY } from 'rxjs';
import { debounce, take } from 'rxjs/operators';

import { LayerRef, LayerConfig } from '../layer/index';

import { TooltipComponent } from './tooltip.component';
import { TOOLTIP_TOKEN, Tooltip, TooltipPosition } from './types';

const DEFAULT_POSITION: TooltipPosition[] = ['top', 'right', 'left', 'bottom'];

const calcPos = (
  position: TooltipPosition,
  offset: number
): ConnectedPosition => {
  if (position === 'right') {
    return {
      originX: 'end',
      originY: 'center',
      overlayX: 'start',
      overlayY: 'center',
      offsetX: offset,
      panelClass: 'right',
    };
  } else if (position === 'left') {
    return {
      originX: 'start',
      originY: 'center',
      overlayX: 'end',
      overlayY: 'center',
      offsetX: -offset,
      panelClass: 'left',
    };
  } else if (position === 'top') {
    return {
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom',
      offsetY: -offset,
      panelClass: 'top',
    };
  } else if (position === 'bottom') {
    return {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top',
      offsetY: offset,
      panelClass: 'bottom',
    };
  } else {
    throw new Error('Invalid tooltip position');
  }
};

export type Positions = 'left' | 'right' | 'top' | 'bottom';
export type PositionsArray = Positions[];

@Directive({
  selector: '[vclTooltip]',
})
export class TooltipDirective
  extends LayerRef
  implements OnInit, OnChanges, OnDestroy, Tooltip
{
  @Input('vclTooltipCursor')
  @HostBinding('style.cursor')
  cursor = 'help';

  private mouseOverEmitter = new Subject<boolean>();

  private stateChangedEmitter = new Subject();
  stateChanged = this.stateChangedEmitter.asObservable();

  tooltipTrigger = this.mouseOverEmitter
    .asObservable()
    .pipe(
      debounce(show => {
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
      })
    )
    .subscribe(visible => {
      if (visible && !this.isAttached) {
        this.open();
      } else if (!visible && this.isAttached) {
        this.close();
      }
    });

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('vclTooltip')
  value?: string | Portal<any>;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('vclTooltipPosition')
  position?: TooltipPosition;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('vclTooltipArrowPointer')
  arrowPointer = true;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('vclTooltipShowDelay')
  showDelay = 0;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('vclTooltipHideDelay')
  hideDelay = 0;

  // eslint-disable-next-line @angular-eslint/no-input-rename
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

  positionStrategy: FlexibleConnectedPositionStrategy;
  arrowPosition?: TooltipPosition;

  constructor(
    injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef,
    private overlay: Overlay,
    @Optional()
    private templateRef?: TemplateRef<any>
  ) {
    super(injector);
  }

  ngOnInit() {
    this.updatePositionStrategy();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes.offset && !changes.offset.firstChange) ||
      (changes.position && !changes.position.firstChange)
    )
      this.updatePositionStrategy();
  }

  ngOnDestroy() {
    this.stateChangedEmitter.complete();
    this.subscriptions.forEach(s => s?.unsubscribe());
  }

  updatePositionStrategy() {
    const offset = this.offset;
    const position = this.position ?? DEFAULT_POSITION;
    const connectedPositions = Array.isArray(position)
      ? position.map(pos => calcPos(pos, offset))
      : [calcPos(position, offset)];
    this.positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions(connectedPositions);
    this.subscriptions.push(
      this.positionStrategy.positionChanges.subscribe(change => {
        this.arrowPosition = change?.connectionPair
          ?.panelClass as TooltipPosition;
        this.stateChangedEmitter.next(undefined);
      })
    );
  }

  protected createLayerConfig(config?: LayerConfig): LayerConfig {
    return super.createLayerConfig(
      {
        hasBackdrop: false,
        scrollStrategy: this.overlay.scrollStrategies.reposition({
          autoClose: true,
        }),
        positionStrategy: this.positionStrategy,
      },
      config
    );
  }

  createPortal() {
    if (this.value) {
      const injector = Injector.create(
        [
          {
            provide: TOOLTIP_TOKEN,
            useValue: this,
          },
        ],
        this.injector
      );
      return new ComponentPortal(
        TooltipComponent,
        this.viewContainerRef,
        injector
      );
    } else {
      throw new Error('Invalid tooltip property');
    }
  }

  updatePortal() {
    return this.portal;
  }
}
