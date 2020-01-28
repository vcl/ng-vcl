import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { JssFormComponent, NotifierService } from '@vcl/ng-vcl';
import { merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HERO_SCHEMA } from './hero';


@Component({
  templateUrl: 'demo.component.html'
})
export class JssFormDemoComponent implements AfterViewInit {

  constructor(private notifier: NotifierService) { }

  @ViewChild('heroForm')
  heroForm: JssFormComponent;

  heroSchema = HERO_SCHEMA;

  state$: Observable<any>;

  onSubmit() {
    if (this.heroForm.ngForm.valid) {
      this.notifier.success('Hero created');
    } else {
     this.notifier.error('Hero invalid');
    }
  }

  onAction(action: string) {
    if (action === 'reset' && this.heroForm.ngForm) {
      this.heroForm.ngForm.resetForm(this.heroForm.field.defaultValue);
      this.notifier.info('Hero reset');
    }
  }

  ngAfterViewInit() {
    this.state$ = merge(this.heroForm.ngForm.statusChanges, this.heroForm.ngForm.valueChanges, this.heroForm.ngForm.ngSubmit).pipe(
      map(() => {
        return {
          status: this.heroForm.ngForm.status,
          valid: this.heroForm.ngForm.valid,
          dirty: this.heroForm.ngForm.dirty,
          submitted: this.heroForm.ngForm.submitted,
          touched: this.heroForm.ngForm.touched,
          pristine: this.heroForm.ngForm.pristine,
          errors: this.heroForm.ngForm.errors,
          value: this.heroForm.ngForm.value,
        };
      })
    );
  }
}
