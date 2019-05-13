import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, AfterContentInit, Injector, ChangeDetectorRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentPortal } from '@angular/cdk/portal';
import { FormFieldControl, FormField, lookupField, FormFieldObject } from './fields/index';
import { JSS_FORM_TOKEN, JssForm } from './types';
import { VCLFormFieldSchemaRoot } from './schemas';

@Component({
  selector: 'vcl-jss-form',
  templateUrl: 'jss-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'vclJssForm'
})
export class JssFormComponent implements JssForm, AfterContentInit {

  constructor(private cdRef: ChangeDetectorRef, private injector: Injector) { }

  @Input()
  set schema(value: VCLFormFieldSchemaRoot) {
    if (value) {
      // Treat root as a FormFieldObject
      this.field = new FormFieldObject({
        ...value,
        type: 'object'
      });
      this.portals = this.createPortals();
    } else {
      this.field = undefined;
      this.portals = undefined;
    }
  }

  @Output()
  formSubmit = new EventEmitter<any>();

  @Output()
  formAction = new EventEmitter<any>();

  field: FormFieldObject;
  portals: ComponentPortal<any>[];

  @ViewChild('form')
  ngForm?: NgForm;

  ngAfterContentInit() {
    // TODO: workaround to avoid ExpressionChangedAfterItHasBeenCheckedError on ngForm
    this.cdRef.detectChanges();
  }

  private createPortals() {
    if (!this.field) {
      return;
    }

    return this.field.fields.map(field => {
      const type = field.type;
      const meta = lookupField(type);

      const providers: any[] = [{
        provide: JSS_FORM_TOKEN,
        useExisting: JssFormComponent
      }, {
        provide: FormField,
        useValue: field
      }, {
        provide: NgForm,
        useValue: this.ngForm
      }];

      if (meta.fieldClass) {
        providers.push({
          provide: meta.fieldClass,
          useValue: field
        });
      }

      if (field instanceof FormFieldControl) {
        providers.push({
          provide: FormFieldControl,
          useValue: field
        });
      }

      const componentInjector = Injector.create(providers, this.injector);
      return new ComponentPortal(meta.componentClass, null, componentInjector);
    });
  }

  onAction(action: string): void {
    this.formAction.emit(action);
  }

}
