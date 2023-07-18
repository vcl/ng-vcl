import {
  Overlay,
  ConnectedPosition,
  ScrollStrategy,
} from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import {
  TemplateRef,
  OnDestroy,
  EventEmitter,
  Output,
  Input,
  Injector,
  ElementRef,
  ViewContainerRef,
  Inject,
  Directive,
} from '@angular/core';

import { LayerConfig, TemplateLayerRef } from '../layer/index';
import { createOffClickStream } from '../off-click/index';

@Directive({
  selector: '[vclPopover]',
  exportAs: 'vclPopover',
})
export class PopoverDirective extends TemplateLayerRef implements OnDestroy {
  @Input()
  closeOnEscape?: boolean;

  @Input()
  closeOnOffClick?: boolean;

  @Input()
  scrollStrategy?: ScrollStrategy;

  @Input()
  target?: ElementRef | HTMLElement;

  @Input()
  panelClass = 'pop-over';

  @Input()
  positions?: ConnectedPosition[];

  @Input()
  set visible(visible: boolean) {
    if (visible) {
      this.open();
    } else {
      this.close();
    }
  }

  get visible() {
    return this.isAttached;
  }

  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('afterClose')
  afterCloseOutput = this.afterClose;

  @Output()
  visibleChange = new EventEmitter<boolean>();

  constructor(
    injector: Injector,
    public templateRef: TemplateRef<any>,
    public viewContainerRef: ViewContainerRef,
    private readonly overlay: Overlay,
    @Inject(DOCUMENT) private document
  ) {
    super(injector);
  }

  ngOnDestroy(): void {
    this.destroy();
    this.subscriptions.forEach(s => s?.unsubscribe());
  }

  createLayerConfig(...configs: LayerConfig[]): LayerConfig {
    if (!this.target) {
      throw new Error('Popover has no target');
    }

    return super.createLayerConfig(
      {
        hasBackdrop: false,
        scrollStrategy:
          this.scrollStrategy ||
          this.overlay.scrollStrategies.reposition({
            autoClose: false,
          }),
        closeOnBackdropClick: false,
        closeOnEscape: this.closeOnEscape || false,
        panelClass: this.panelClass,
        positionStrategy: this.overlay
          .position()
          .flexibleConnectedTo(this.target)
          .withPositions(
            this.positions || [
              {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
              },
            ]
          ),
      },
      ...configs
    );
  }

  open(config?: LayerConfig) {
    const inputConfig: LayerConfig = {};

    if (this.closeOnEscape !== undefined) {
      inputConfig.closeOnEscape = this.closeOnEscape;
    }

    return super.open({
      ...inputConfig,
      ...(config || {}),
    });
  }

  protected afterAttached(): void {
    this.visibleChange.emit(this.visible);
    if (this.closeOnOffClick) {
      this.subscriptions.push(
        createOffClickStream([this.overlayRef.overlayElement], {
          document: this.document,
        }).subscribe(() => {
          this.close();
        })
      );
    }
  }

  protected afterDetached(_: unknown): void {
    this.visibleChange.emit(this.visible);
    this.subscriptions.forEach(s => s?.unsubscribe());
  }
}
