import { Component, Input, ChangeDetectionStrategy, OnDestroy, OnChanges, AfterViewInit} from '@angular/core';
import { Subject, Observable, merge, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { FormControlInput } from '../form-control-group/index';
import { Hint, DefaultHint } from './types';
import { FormModelGroup, FormModelControl } from './models/index';

@Component({
  selector: 'vcl-jss-form-hints',
  templateUrl: 'jss-form-hints.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'vclJssFormControl'
})
export class JssFormHintsComponent implements OnChanges, OnDestroy, AfterViewInit {

  private _sub: Subscription;
  _hintsEmitter = new Subject<void>();

  @Input()
  model?: FormModelGroup<any> | FormModelControl<any>;

  @Input()
  input?: FormControlInput;

  hints$: Observable<Hint[]> = this._hintsEmitter.asObservable().pipe(
    map(() => {
      if (!this.model || !this.model.hints) {
        return [];
      }

      return this.model.hints.map(hint => {
        if (typeof hint === 'string') {
          return {
            type: 'default',
            message: hint
          } as DefaultHint;
        } else if (typeof hint === 'function') {
          return hint(this.model.control, this.input);
        }
        return hint;
      });
    }),
    filter(hint => !!hint)
  );

  ngOnChanges() {
    this._sub && this._sub.unsubscribe();

    const $: Observable<any>[] = [];
    if (this.input) {
      $.push(this.input.stateChange);
    }
    if (this.model.control) {
      $.push(this.model.control.valueChanges, this.model.control.statusChanges);
    }
    this._sub = merge(...$).subscribe(this._hintsEmitter);
  }

  ngAfterViewInit() {
    this._hintsEmitter.next();
  }

  ngOnDestroy() {
    this._sub && this._sub.unsubscribe();
  }
}
