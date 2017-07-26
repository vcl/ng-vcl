import { Component, OnInit, ViewChild } from '@angular/core';
import { JssFormComponent } from "@ng-vcl/jss-form";
import { NotificationService } from "@ng-vcl/ng-vcl";
import { HERO_SCHEMA, HERO_DEFAULTS } from "./hero";


@Component({
  templateUrl: 'demo.component.html'
})
export class JssFormDemoComponent {

  constructor(private ns: NotificationService) { }

  @ViewChild('heroForm')
  heroForm: JssFormComponent;

  heroSchema = HERO_SCHEMA;

  value = {...HERO_DEFAULTS};

  onSubmit(value, valid) {
    if (valid) {
      this.ns.success(`${value.name} is a valid hero`);
    } else {
      this.ns.error(`Your hero is not valid`);
    }
  }

  onAction(action: string) {
    if (action === 'reset' && this.heroForm.form) {
      this.ns.warning(`Hero rejected`);
      this.heroForm.form.reset({...HERO_DEFAULTS});
    }
  }

}
