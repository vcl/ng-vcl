import {
  Component, Input, Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef,
  AfterViewInit,
  AfterContentInit} from '@angular/core';
import {
  NgForm} from '@angular/forms';
import { VCLFormSchemaRoot } from './types';
import { FormModelRoot } from './models/index';

@Component({
  selector: 'vcl-jss-form',
  templateUrl: 'jss-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'vclJssForm'
})
export class JssFormComponent implements AfterContentInit {

  constructor(private cdRef: ChangeDetectorRef) { }

  @Input()
  set schema(value: VCLFormSchemaRoot) {
    if (value) {
      this.model = new FormModelRoot(value);
    } else {
      this.model = undefined;
    }
  }

  @Output()
  formSubmit = new EventEmitter<any>();

  @Output()
  formAction = new EventEmitter<any>();

  model?: FormModelRoot;

  @ViewChild('form')
  ngForm?: NgForm;

  ngAfterContentInit() {
    // TODO: workaround to avoid ExpressionChangedAfterItHasBeenCheckedError on ngForm
    this.cdRef.detectChanges();
  }

}
