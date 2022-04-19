import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, AfterContentInit, Injector, ChangeDetectorRef, AfterViewInit, OnDestroy, SimpleChanges, OnInit, OnChanges, ViewEncapsulation, Inject, Optional} from '@angular/core';
import { Portal } from '@angular/cdk/portal';
import { FormFieldObject } from './fields/index';
import { JSS_FORM_TOKEN, JssForm, HelpConfig, JSS_FORM_HELP_CONFIG_TOKEN } from './types';
import { VCLFormFieldSchemaRoot } from './schemas';
import { FormDirective, FORM_CONTROL_GROUP_FORM } from '../form-control-group/index';

@Component({
  selector: 'vcl-jss-form',
  templateUrl: 'jss-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['jss-form.component.scss'],
  exportAs: 'vclJssForm'
})
export class JssFormComponent implements JssForm, AfterContentInit, AfterViewInit, OnDestroy, OnInit, OnChanges {

  constructor(
    private cdRef: ChangeDetectorRef,
    private injector: Injector,
    @Optional()
    @Inject(JSS_FORM_HELP_CONFIG_TOKEN)
    private helpConfig: HelpConfig
  ) { }

  @Input()
  schema?: VCLFormFieldSchemaRoot;

  @Input()
  initialValues?: any;

  @Input()
  autocomplete = '';

  _help: HelpConfig;

  @Input('help')
  get help() {
    return this._help ?? this.helpConfig;
  }
  set help(value: HelpConfig) {
    this._help = value;
  }

  ngOnInit() {
    this.createField();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.schema && !changes.schema.firstChange) {
      this.createField();
      this.field.formReady();
    }
  }

  @Output()
  formSubmit = new EventEmitter<any>();

  @Output()
  formAction = new EventEmitter<any>();

  field: FormFieldObject;
  portal: Portal<any>;

  private createField() {
    const schema = this.schema;

    if (this.field) {
      this.field && this.field.destroy();
      this.field = undefined;
    }
    if (this.portal) {
      this.portal.detach();
      this.portal = undefined;
    }

    if (schema) {
      // Treat root as a FormFieldObject
      this.field = new FormFieldObject({
        ...schema,
        name: 'root',
        type: 'object',
        visible: true
      }, undefined, this.initialValues);
      this.portal = this.field.createPortal(this.injector, [
        {
          provide: JSS_FORM_TOKEN,
          useExisting: JssFormComponent
        },
        {
          provide: FORM_CONTROL_GROUP_FORM,
          useValue: this.form
        },
      ]);
    }
  }

  get defaultValue() {
    return this.field?.defaultValue;
  }

  @ViewChild('form', { static: true, read: FormDirective })
  form: FormDirective;

  ngAfterContentInit() {
    // TODO: workaround to avoid ExpressionChangedAfterItHasBeenCheckedError on ngForm
    this.cdRef.detectChanges();
  }

  ngAfterViewInit() {
    // TODO: workaround to avoid ExpressionChangedAfterItHasBeenCheckedError on ngForm
    this.field.formReady();
    this.cdRef.detectChanges();
  }

  onAction(action: string): void {
    this.formAction.emit(action);
  }

  ngOnDestroy() {
    this.field && this.field.destroy();
  }
}
