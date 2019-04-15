import { Observable } from 'rxjs';
import { PositionStrategy } from '@angular/cdk/overlay';

export interface LayerOptions {
  position?: PositionStrategy;
  modal?: boolean;
}

export interface Layer<TData = any, TResult = any> {
  readonly data: any;
  readonly visible: boolean;
  readonly afterClose: Observable<TResult | undefined>;
  open(data?: TData, opts?: LayerOptions): Observable<TResult | undefined>;
  close(result?: TResult): void;
  destroy(): void;
}
