import { Component, OnInit, ViewChild } from '@angular/core';
import { HERO_SCHEMA, HERO_DEFAULTS } from './hero';
import { JssFormComponent, NotifierService } from '@ng-vcl/ng-vcl';


@Component({
  templateUrl: 'demo.component.html'
})
export class JssFormDemoComponent {

  constructor(private notifier: NotifierService) { }

  @ViewChild('heroForm')
  heroForm: JssFormComponent;

  heroSchema = HERO_SCHEMA;

  value = {...HERO_DEFAULTS};

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
}
