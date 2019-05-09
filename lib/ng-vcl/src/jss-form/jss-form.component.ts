import {
  Component, Input, OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
  ChangeDetectionStrategy} from '@angular/core';
import {
  FormGroup} from '@angular/forms';
import { createFormModel, FormModelObject, createFormModelRoot } from './jss-form-models';
import { VCLFormSchemaObject, VCLFormSchemaRoot } from './types';

@Component({
  selector: 'vcl-jss-form',
  templateUrl: 'jss-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'vclJssForm'
})
export class JssFormComponent implements OnChanges {

  @Input()
  schema?: VCLFormSchemaRoot;

  @Output()
  formSubmit = new EventEmitter<any>();

  @Output()
  formAction = new EventEmitter<any>();

  rootModel?: FormModelObject;
  formGroup?: FormGroup | undefined;

  onSubmit() {
    this.formSubmit.emit(this.formGroup && this.formGroup.value);
  }

  x() {
    // this.rootModel.models.forEach(m )
  }

  onAction(event) {
    this.formAction.emit(event);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.schema) {
      const schema = this.schema;
      if (schema) {
        this.rootModel = createFormModelRoot(schema);
        this.formGroup = this.rootModel.createControl() ;
      } else {
        this.rootModel = undefined;
        this.formGroup = undefined;
      }
    }
  }

}
