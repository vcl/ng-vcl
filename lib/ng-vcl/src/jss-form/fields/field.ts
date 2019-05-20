import { VCLFormFieldSchema, VCLFormFieldControlSchema } from '../schemas';
import { AbstractControl, FormControl } from '@angular/forms';
import { combineLatest, Subject, Subscription, ReplaySubject } from 'rxjs';
import { Conditional } from '../types';
import { map, startWith, switchMap } from 'rxjs/operators';
import { Injector } from '@angular/core';
import { ComponentType, ComponentPortal } from '@angular/cdk/portal';

interface FieldRegistry {
  [key: string]: {
    componentClass: ComponentType<any>;
    fieldClass: FormFieldClass | FormFieldControlClass;
  };
}

export class FormField<T extends VCLFormFieldSchema = VCLFormFieldSchema> {

  static registry: FieldRegistry = {};

  constructor(public readonly schema: T, key: string, public readonly parent?: FormField) {
    this.key = key;
    this.id = schema.id || this.key;
    this.registerConditional(this.schema.visible, (visible) => this.updateVisible(visible));
  }

  private _conditionalSubs?: Subscription[] = [];
  private _visible = true;
  private _formReady$ = new ReplaySubject(1);

  protected stateChangeEmitter = new Subject();

  readonly id: string;
  readonly key: string;
  readonly stateChange = this.stateChangeEmitter.asObservable();

  get path(): string {
    return this.parent ? this.parent.key + '.' + this.key : this.key;
  }

  get type(): string {
    return this.schema.type;
  }

  get visible(): boolean {
    return this._visible;
  }

  get root() {
    const walk = (field: FormField) => {
      return field.parent ? walk(field.parent) : field;
    };
    const root = walk(this);
    return root instanceof FormFieldControl ? root : undefined;
  }

  static lookup(type: string) {
    if (!this.registry[type]) {
      throw new Error('jss-form: Unsupported field type: ' + type);
    }
    return this.registry[type];
  }

  static register(type: string, componentClass: ComponentType<any>, fieldClass?: FormFieldClass) {
    if (this.registry[type]) {
      throw new Error('jss-form: Field type already registered: ' + type);
    }
    this.registry[type] = {
      componentClass,
      fieldClass: fieldClass || FormField
    };
  }

  static createInstance({key, schema, parent}: {
    schema: VCLFormFieldSchema;
    key: string;
    parent?: FormField;
  }) {
    const meta = this.lookup(schema.type);
    return new meta.fieldClass(schema, key, parent);
  }

  createConditionalStream<TConditional>(conditional: Conditional<TConditional>) {
    return this._formReady$.pipe(
      map(() => {
        return this.root ? conditional.fields.map(key => {
          return this.root.control.get(key);
        }) : [];
      }),
      switchMap(controls => {
        return combineLatest(controls.map(c => c.valueChanges)).pipe(
          startWith(controls),
          map(() => controls)
        );
      }),
      map((controls) => conditional.cb(...controls)),
    );
  }

  protected registerConditional<TConditional>(conditional: TConditional | Conditional<TConditional>, cb: (value: TConditional) => void) {
    if (conditional instanceof Conditional) {
      const sub  = this.createConditionalStream(conditional).subscribe((value) => {
        cb(value);
        this.stateChangeEmitter.next();
      });
      this._conditionalSubs.push(sub);
    } else {
      cb(conditional);
    }
  }

  private updateVisible(visible: boolean) {
    this._visible = typeof visible === 'boolean' ? visible : true;
  }

  formReady() {
    this._formReady$.next();
    this._formReady$.complete();
  }

  destroy() {
    this._conditionalSubs.forEach(sub => sub.unsubscribe());
    this.stateChangeEmitter.complete();
  }

  createPortal(injector: Injector, additionalProviders: any[]) {
    const type = this.type;
    const meta = FormField.lookup(type);

    const portalProviders: any[] = [{
      provide: FormField,
      useValue: this,
    }, {
      provide: meta.fieldClass,
      useValue: this
    }, ...additionalProviders];

    const componentInjector = Injector.create({
      parent: injector,
      providers: portalProviders
    });
    return new ComponentPortal(meta.componentClass, null, componentInjector);
  }
}

export class FormFieldControl<T extends VCLFormFieldControlSchema<TParams> = VCLFormFieldControlSchema<any>, TParams = any> extends FormField<T> {

  constructor(schema: T, key: string, parent?: FormField) {
    super(schema, key, parent);
    this.registerConditional(this.schema.disabled, (disabled) => this.updateDisabled(disabled));
    this.registerConditional(this.schema.params, (params) => this.updateParams(params));
  }

  private _disabled = false;
  private _params: TParams;
  readonly id: string;
  private _control?: AbstractControl;

  get control(): AbstractControl {
    if (!this._control) {
      this._control = this.createControl();
    }
    return this._control;
  }

  get errorStateAgent() {
    return this.schema.errorStateAgent;
  }

  get defaultValue() {
    return this.schema.defaultValue  === undefined ? this.createDefaultValue() : this.schema.defaultValue;
  }

  get validators() {
    return this.schema.validators  === undefined ? undefined : this.schema.validators;
  }

  get label() {
    return this.schema.label;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  get params(): TParams {
    return this._params || {} as TParams;
  }

  get required(): boolean {
    return !!this.schema.required;
  }

  get hints() {
    return this.schema.hints;
  }

  static register(type: string, componentClass: ComponentType<any>, fieldClass?: FormFieldControlClass) {
    if (this.registry[type]) {
      throw new Error('jss-form: Field type already registered: ' + type);
    }
    this.registry[type] = {
      componentClass,
      fieldClass: fieldClass || FormFieldControl
    };
  }

  private updateDisabled(disabled: boolean) {
    this._disabled = typeof disabled === 'boolean' ? disabled : false;
    setTimeout(() => {
      if (this._disabled) {
        this.control.disable();
      } else {
        this.control.enable();
      }
    }, 0);
  }

  private updateParams(params: TParams) {
    this._params = params || {} as TParams;
  }

  protected createControl(): AbstractControl {
    return new FormControl(this.defaultValue, this.validators);
  }

  protected createDefaultValue() {
    return null;
  }

  createPortal(injector: Injector, additionalProviders: any[]) {
    const type = this.type;
    const meta = FormField.lookup(type);

    const portalProviders: any[] = [{
      provide: FormField,
      useValue: this,
    }, {
      provide: meta.fieldClass,
      useValue: this
    }, {
      provide: FormFieldControl,
      useValue: this
    }, ...additionalProviders];

    const componentInjector = Injector.create({
      parent: injector,
      providers: portalProviders
    });
    return new ComponentPortal(meta.componentClass, null, componentInjector);
  }
}

export type FormFieldClass = new (schema: VCLFormFieldSchema, key: string, parent: FormField<any>) => FormField<any>;
export type FormFieldControlClass = new (schema: VCLFormFieldSchema, key: string, parent: FormField<any>) => FormFieldControl<any, any>;
