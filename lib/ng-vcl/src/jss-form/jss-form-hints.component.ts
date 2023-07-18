import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  AfterViewInit,
  Optional,
  Inject,
  OnInit,
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import {
  Subject,
  Observable,
  merge,
  of,
  combineLatest,
  Subscription,
} from 'rxjs';
import { switchMap } from 'rxjs/operators';

import {
  FORM_CONTROL_GROUP_STATE,
  FormControlGroupState,
  FORM_CONTROL_GROUP_FORM,
  FormControlGroupForm,
} from '../form-control-group/exports';

import { FormFieldControl, FormField } from './fields/field';
import { Hint, DefaultHint, Conditional, hasFormHints } from './types';

@Component({
  selector: 'vcl-jss-form-hints',
  templateUrl: 'jss-form-hints.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'vclJssFormControl',
})
export class JssFormHintsComponent implements OnInit, OnDestroy, AfterViewInit {
  private _hints: (Hint | Conditional<Hint>)[];
  _hintsEmitter = new Subject<void>();

  hints$: Observable<Hint[]> = this._hintsEmitter.asObservable().pipe(
    switchMap(() => {
      return combineLatest(
        ...this._hints.map(hint => {
          if (typeof hint === 'string') {
            return of({
              type: 'default',
              message: hint,
            } as DefaultHint);
          } else if (hint instanceof Conditional) {
            return this.field.createConditionalStream(hint);
          }
          return of(hint as Hint);
        })
      );
    })
  );

  private subscriptions: Subscription[] = [];

  constructor(
    @Inject(FORM_CONTROL_GROUP_FORM)
    private readonly form: FormControlGroupForm,
    @Optional()
    private readonly field?: FormField<any>,
    @Optional()
    @Inject(FORM_CONTROL_GROUP_STATE)
    private readonly fcgs?: FormControlGroupState
  ) {}

  ngAfterViewInit() {
    this._hintsEmitter.next();
  }

  ngOnInit() {
    let control: AbstractControl;
    if (this.field instanceof FormFieldControl) {
      this._hints = this.field.hints || [];
      control = this.field.control;
    } else if (hasFormHints(this.field)) {
      this._hints = this.field.hints || [];
    } else {
      this._hints = [];
    }

    const $: Observable<any>[] = [];

    $.push(this.form && this.form.statusChanges);
    $.push(this.form && this.form.valueChanges);
    $.push(this.form && this.form.ngSubmit);

    if (this.fcgs && this.fcgs.input) {
      $.push(this.fcgs && this.fcgs.input.stateChanged);
    }
    if (control) {
      $.push(control.valueChanges, control.statusChanges);
    }
    this.subscriptions.push(merge(...$).subscribe(this._hintsEmitter));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s?.unsubscribe());
  }
}
