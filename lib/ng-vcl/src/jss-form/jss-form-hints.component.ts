import { Component,  ChangeDetectionStrategy, OnDestroy, OnChanges, AfterViewInit, Optional, Inject} from '@angular/core';
import { Subject, Observable, merge, Subscription, of, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Hint, DefaultHint, Conditional, hasFormHints } from './types';
import { FormFieldControl, FormField } from './fields/index';
import { AbstractControl } from '@angular/forms';
import { FORM_CONTROL_GROUP_STATE, FormControlGroupState, FORM_CONTROL_GROUP_FORM, FormControlGroupForm } from '../form-control-group/index';


@Component({
  selector: 'vcl-jss-form-hints',
  templateUrl: 'jss-form-hints.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'vclJssFormControl'
})
export class JssFormHintsComponent implements OnDestroy, AfterViewInit {

  constructor(
    @Inject(FORM_CONTROL_GROUP_FORM)
    private form: FormControlGroupForm,
    @Optional() 
    private field?: FormField<any>,
    @Optional() @Inject(FORM_CONTROL_GROUP_STATE) 
    private fcgs?: FormControlGroupState,
  ) { }

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
