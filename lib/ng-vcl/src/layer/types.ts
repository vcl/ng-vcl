import { Observable } from 'rxjs';
import { OverlayConfig } from '@angular/cdk/overlay';

export class LayerConfig<TData = any> extends OverlayConfig {
  constructor(config: LayerConfig) {
    super(config);
    this.data = config.data;
    this.closeOnBackdropClick = config.closeOnBackdropClick;
    this.closeOnEscape = config.closeOnEscape;
  }
  data?: TData;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
}

export interface Layer {
  readonly afterClose: Observable<any>;
  readonly isVisible: boolean;
  readonly data: any;
  toggle(): void;
  open(config?: LayerConfig): void;
  close(result?: any): void;
  destroy(): void;
}
