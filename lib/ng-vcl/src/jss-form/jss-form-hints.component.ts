import { Component,  ChangeDetectionStrategy, OnDestroy, OnChanges, AfterViewInit, Optional, Inject} from '@angular/core';
import { Subject, Observable, merge, Subscription, of, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FORM_CONTROL_HOST, FormControlHost } from '../form-control-group/index';
import { Hint, DefaultHint, Conditional, hasFormHints } from './types';
import { FormFieldControl, FormField } from './fields/index';
import { AbstractControl, NgForm } from '@angular/forms';


@Component({
  selector: 'vcl-jss-form-hints',
  templateUrl: 'jss-form-hints.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'vclJssFormControl'
})
export class JssFormHintsComponent implements OnDestroy, AfterViewInit {

  constructor(
    private ngForm: NgForm,
    @Optional() private field?: FormField<any>,
    @Optional() @Inject(FORM_CONTROL_HOST) private fch?: FormControlHost,
  ) {
    let control: AbstractControl;
    if (field instanceof FormFieldControl) {
      this._hints = field.hints || [];
      control = field.control;
    } else if (hasFormHints(field)) {
      this._hints = field.hints || [];
    } else {
      this._hints = [];
    }

    const $: Observable<any>[] = [];

    $.push(this.ngForm && this.ngForm.statusChanges);
    $.push(this.ngForm && this.ngForm.ngSubmit);

    if (this.fch && this.fch.input) {
      $.push(this.fch && this.fch.input.stateChanged);
    }
    if (control) {
      $.push(control.valueChanges, control.statusChanges);
    }
    this._sub = merge(...$).subscribe(this._hintsEmitter);
  }

  private _hints: (Hint | Conditional<Hint>)[];
  private _sub: Subscription;
  _hintsEmitter = new Subject<void>();

  hints$: Observable<Hint[]> = this._hintsEmitter.asObservable().pipe(
    switchMap(() => {
      return combineLatest(...this._hints.map(hint => {
        if (typeof hint === 'string') {
          return of({
            type: 'default',
            message: hint
          } as DefaultHint);
        } else if (hint instanceof Conditional) {
          return this.field.createConditionalStream(hint);
        }
        return of(hint as Hint);
      }));
    })
  );

  ngAfterViewInit() {
    this._hintsEmitter.next();
  }

  ngOnDestroy() {
    this._sub && this._sub.unsubscribe();
  }
}
