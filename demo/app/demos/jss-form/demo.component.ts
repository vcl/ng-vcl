import { Component, OnInit, ViewChild } from '@angular/core';
import { HERO_SCHEMA, HERO_DEFAULTS } from './hero';
import { JssFormComponent } from '@ng-vcl/ng-vcl';


@Component({
  templateUrl: 'demo.component.html'
})
export class JssFormDemoComponent {

  constructor() { }

  @ViewChild('heroForm')
  heroForm: JssFormComponent;

  heroSchema = HERO_SCHEMA;

  value = {...HERO_DEFAULTS};

  onSubmit(value, valid) {
    console.log('value', value);

    if (valid) {
      // this.ns.success({
      //   text: `${value.name} is a valid hero`
      // });
    } else {
      if (this.heroForm.formGroup) {
        // markAsDeeplyTouched(this.heroForm.formGr);
      }
      // this.ns.error({
      //   text: `Your hero is not valid`
      // });
    }
  }

  onAction(action: string) {
    if (action === 'reset' && this.heroForm.formGroup) {
      // this.ns.warning({
      //   text: `Hero rejected`
      // });
      this.heroForm.formGroup.reset({...HERO_DEFAULTS});
    }
  }

}
