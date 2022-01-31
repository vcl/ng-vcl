import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { JssFormComponent, NotifierService, DateAdapter } from '@vcl/ng-vcl';
import { merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { buildHeroSchema, ExtendedFormFieldSchemaRoot } from './hero';


@Component({
  templateUrl: 'demo.component.html'
})
export class JssFormDemoComponent implements AfterViewInit, OnInit {

  constructor(private notifier: NotifierService, private da: DateAdapter) { }

  @ViewChild('heroForm')
  heroForm: JssFormComponent;

  heroSchema?: ExtendedFormFieldSchemaRoot;

  state$: Observable<any>;

  ngOnInit(): void {
    this.heroSchema = buildHeroSchema({
      datepickerPlaceholder: this.da.pattern('date')
    });
  }

  onSubmit() {
    if (this.heroForm.form.valid) {
      this.notifier.success('Hero created');
    } else {
      this.notifier.error('Hero invalid');
    }
  }

  onAction(action: string) {
    if (action === 'reset' && this.heroForm.form) {
      this.heroForm.form.resetForm(this.heroForm.defaultValue);
      this.notifier.info('Hero reset');
    }
  }

  ngAfterViewInit() {
    this.state$ = merge(this.heroForm.form.statusChanges, this.heroForm.form.valueChanges as any, this.heroForm.form.ngSubmit as any).pipe(
      map(() => {
        return {
          status: this.heroForm.form.status,
          valid: this.heroForm.form.valid,
          dirty: this.heroForm.form.dirty,
          submitted: this.heroForm.form.submitted,
          touched: this.heroForm.form.touched,
          pristine: this.heroForm.form.pristine,
          errors: this.heroForm.form.errors,
          value: this.heroForm.form.value,
        };
      })
    );
  }
}
