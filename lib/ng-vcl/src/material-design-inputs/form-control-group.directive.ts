
import { Directive, HostBinding, ContentChild, AfterViewInit, Optional, SkipSelf, ElementRef, Input, Renderer2, forwardRef, ChangeDetectorRef } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { MaterialMode, FORM_CONTROL_MATERIAL_HOST, FormControlMaterialInput, FORM_CONTROL_MATERIAL_INPUT } from './types';
import { FormControlGroupMaterialConfig } from './types';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'vcl-form-control-group, vcl-form-control-group[vclMaterial]',
  exportAs: 'vclMaterial',
  providers: [
    {
      provide: FORM_CONTROL_MATERIAL_HOST,
      useExisting: forwardRef(() => FormControlGroupMaterialDirective)
    }
  ]
})
export class FormControlGroupMaterialDirective implements AfterViewInit {
  constructor(
    @Optional()
    @SkipSelf()
    private config: FormControlGroupMaterialConfig,
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private cdRef: ChangeDetectorRef
  ) {
    if (config) {
      this.globalMode = config.mode;
      config.modeChange.subscribe(m => {
        this.globalMode = m;
        this.cdRef.markForCheck();
      });
    }
  }

  globalMode: MaterialMode;

  // tslint:disable-next-line:no-input-rename
  @Input('vclMaterial')
  localMode: MaterialMode;

  // Always provide a mode
  // Default is `float`.
  get mode() {
    return this.localMode || this.globalMode || 'float';
  }

  get active() {
    // Do not if child input does not provide FORM_CONTROL_MATERIAL_INPUT
    return (this.config || this.hasMaterialDirective) && this.input;
  }

  @ContentChild(FORM_CONTROL_MATERIAL_INPUT as any, { read: FORM_CONTROL_MATERIAL_INPUT })
  input?: FormControlMaterialInput;

  get hasMaterialDirective() {
    return this.elementRef.nativeElement.hasAttribute('vclMaterial');
  }

  @HostBinding('class.material')
  get classMaterial() {
    return this.active && this.mode !== 'disabled';
  }

  @HostBinding('class.material-focused')
  focused = false;

  @HostBinding('class.material-floating-label')
  get classMaterialFloatingLabel() {
    return this.active && (this.mode === 'static' || (this.mode === 'float' && this.float));
  }

  float = false;

  _currentModifierClass?: string;

  ngAfterViewInit() {
    if (this.active) {
      this.input.stateChanged.pipe(startWith(undefined)).subscribe(() => {
        // Check of modifier class has changed
        if (this.input.materialModifierClass && this._currentModifierClass !== this.input.materialModifierClass) {
          if (this._currentModifierClass) {
            this.renderer.removeClass(this.elementRef.nativeElement, this._currentModifierClass);
          }
          this.renderer.addClass(this.elementRef.nativeElement, this.input.materialModifierClass);
        } else if (!this.input.materialModifierClass && this._currentModifierClass) {
          this.renderer.removeClass(this.elementRef.nativeElement, this._currentModifierClass);
        }

        this.float = this.input.isLabelFloating;
        this.focused = this.input.isLabelFloating && this.input.isFocused;
      });
    }
  }
}
