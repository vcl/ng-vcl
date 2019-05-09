import { Component, OnInit, ViewChild } from '@angular/core';
import { JssFormComponent, markAsDeeplyTouched } from '../../../../lib/jss-form';
import { HERO_SCHEMA, HERO_DEFAULTS } from './hero';


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
      if (this.heroForm.formGr) {
        markAsDeeplyTouched(this.heroForm.formGr);
      }
      // this.ns.error({
      //   text: `Your hero is not valid`
      // });
    }
  }

  onAction(action: string) {
    if (action === 'reset' && this.heroForm.formGr) {
      // this.ns.warning({
      //   text: `Hero rejected`
      // });
      this.heroForm.formGr.reset({...HERO_DEFAULTS});
    }
  }

}
