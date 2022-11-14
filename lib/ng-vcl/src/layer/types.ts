import { Observable } from 'rxjs';
import { OverlayConfig } from '@angular/cdk/overlay';
import { InjectionToken } from '@angular/core';

export interface LayerData {
  [key: string]: any;
}

export class LayerConfig<
  TLayerData extends LayerData = any
> extends OverlayConfig {
  constructor(config: LayerConfig) {
    super(config);
    this.data = config.data;
    this.closeOnBackdropClick = config.closeOnBackdropClick;
    this.closeOnEscape = config.closeOnEscape;
  }
  data?: TLayerData;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
}

export interface Layer {
  readonly afterClose: Observable<any>;
  readonly isVisible: boolean;
  readonly data: LayerData;
  toggle(): void;
  open(config?: LayerConfig): void;
  close(result?: any): void;
  destroy(): void;
}
