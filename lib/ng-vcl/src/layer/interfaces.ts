import { PositionStrategy } from '@angular/cdk/overlay';

export interface LayerOptions<TData = any> {
  data?: TData;
  position?: PositionStrategy;
  modal?: boolean;
}
