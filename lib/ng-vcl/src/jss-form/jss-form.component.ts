import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, AfterContentInit, Injector, ChangeDetectorRef, AfterViewInit, OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentPortal, Portal } from '@angular/cdk/portal';
import { FormFieldControl, FormField, lookupField, FormFieldObject, createPortal } from './fields/index';
import { JSS_FORM_TOKEN, JssForm } from './types';
import { VCLFormFieldSchemaRoot } from './schemas';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'vcl-jss-form',
  templateUrl: 'jss-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'vclJssForm'
})
export class JssFormComponent implements JssForm, AfterContentInit, AfterViewInit, OnDestroy {

  constructor(private cdRef: ChangeDetectorRef, private injector: Injector) { }

  @Input()
  set schema(value: VCLFormFieldSchemaRoot) {
    if (value) {
      // Treat root as a FormFieldObject
      this.field = new FormFieldObject({
        ...value,
        type: 'object',
        visible: true
      }, '');
      // this.startListen();
      this.portal = createPortal(this.field, this.injector, [{
            provide: JSS_FORM_TOKEN,
            useExisting: JssFormComponent
          }, {
              provide: NgForm,
              useValue: this.ngForm
          }]);
    } else {
      this.field && this.field.destroy();
      this.field = undefined;
      this.portal = undefined;
    }
  }

  @Output()
  formSubmit = new EventEmitter<any>();

  @Output()
  formAction = new EventEmitter<any>();

  field: FormFieldObject;
  portal: Portal<any>;


  @ViewChild('form')
  ngForm: NgForm;

  ngAfterContentInit() {
    // TODO: workaround to avoid ExpressionChangedAfterItHasBeenCheckedError on ngForm
    this.cdRef.detectChanges();
  }

  ngAfterViewInit() {
    // TODO: workaround to avoid ExpressionChangedAfterItHasBeenCheckedError on ngForm
    // this.startListen();
    this.cdRef.detectChanges();
  }


  onAction(action: string): void {
    this.formAction.emit(action);
  }

  ngOnDestroy() {
    this.field && this.field.destroy();
  }
}
