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
