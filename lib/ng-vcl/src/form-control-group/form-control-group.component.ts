import { Component, HostBinding, ContentChild, ElementRef, forwardRef, AfterViewInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormControlInput, FORM_CONTROL_INPUT, FORM_CONTROL_GROUP, FormControlGroup } from './interfaces';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'vcl-form-control-group, vcl-form-inline-control-group',
  templateUrl: 'form-control-group.component.html',
  exportAs: 'vclFormControlGroup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: FORM_CONTROL_GROUP,
    useExisting: forwardRef(() => FormControlGroupComponent)
  }]
})
export class FormControlGroupComponent implements FormControlGroup, AfterViewInit, OnDestroy {

  constructor(
    private elementRef: ElementRef<HTMLElement>,
  ) { }

  @HostBinding('class.vclFormControlGroup')
  get classVclFormControlGroup() {
    return !this.classVclFormInlineControlGroup;
  }

  @HostBinding('class.vclFormInlineControlGroup')
  get classVclFormInlineControlGroup() {
    return this.elementRef.nativeElement.tagName.toLowerCase() === 'vcl-form-inline-control-group';
  }

  private _stateChangeEmitter = new Subject<void>();

  stateChange = this._stateChangeEmitter.asObservable();

  @ContentChild(FORM_CONTROL_INPUT as any, { read: FORM_CONTROL_INPUT })
  input?: FormControlInput;

  ngAfterViewInit() {
    if (this.input) {
      this.input.stateChange.pipe(startWith(undefined)).subscribe(this._stateChangeEmitter);
    }
  }

  ngOnDestroy() {
    return this._stateChangeEmitter.complete();
  }
}
