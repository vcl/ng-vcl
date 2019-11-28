import { TemplateRef, Component, ViewChild, OnDestroy, EventEmitter, Output, Input, Injector, ChangeDetectionStrategy, ElementRef, ViewContainerRef, HostBinding, Inject } from '@angular/core';
import { Overlay, ConnectedPosition, ScrollStrategy } from '@angular/cdk/overlay';
import { LayerConfig, TemplateLayerRef } from '../layer/index';
import { createOffClickStream } from '../off-click';
import { startWith, switchMap } from 'rxjs/operators';
import { NEVER, Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'vcl-popover',
  templateUrl: 'popover.component.html',
  exportAs: 'vclPopover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    :host {
      display: none;
    }
  `]
})
export class PopoverComponent extends TemplateLayerRef implements OnDestroy {
  constructor(
    injector: Injector,
    public viewContainerRef: ViewContainerRef,
    private overlay: Overlay,
    @Inject(DOCUMENT) private document
  ) {
    super(injector);
  }

  private _popoverAttachedSub?: Subscription;

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

  // tslint:disable-next-line:no-output-rename
  @Output('afterClose')
  afterCloseOutput = this.afterClose;

  @Output()
  visibleChange = new EventEmitter<boolean>();

  @ViewChild(TemplateRef, { static: true })
  protected templateRef: TemplateRef<any>;

  getLayerConfig(): LayerConfig {
    if (!this.target) {
      throw new Error('Popover has no target');
    }

    return new LayerConfig({
      hasBackdrop: false,
      scrollStrategy: this.scrollStrategy || this.overlay.scrollStrategies.reposition({
        autoClose: false,
      }),
      closeOnBackdropClick: false,
      closeOnEscape: this.closeOnEscape || false,
      panelClass: this.panelClass,
      positionStrategy: this.overlay.position()
      .flexibleConnectedTo(this.target)
      .withPositions(this.positions || [{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
      }])
    });
  }

  open(config?: LayerConfig) {
    const inputConfig: LayerConfig = {};

    if (this.closeOnEscape !== undefined) {
      inputConfig.closeOnEscape = this.closeOnEscape;
    }

    return super.open({
      ...inputConfig,
      ...(config || {})
    });
  }

  protected afterAttached(): void {
    this.visibleChange.emit(this.visible);
    if (this.closeOnOffClick) {
      this._popoverAttachedSub = createOffClickStream([this.overlayRef.overlayElement], {
        document: this.document
      }).subscribe(() => {
        this.close();
      });
    }
  }

  protected afterDetached(result: any): void {
    this.visibleChange.emit(this.visible);
    this._popoverAttachedSub && this._popoverAttachedSub.unsubscribe();
  }

  ngOnDestroy(): void {
    this.destroy();
    this._popoverAttachedSub && this._popoverAttachedSub.unsubscribe();
  }
}
