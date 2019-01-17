import { Directive, Input, Optional, SkipSelf, NgModule, Inject, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable.component';

export interface VCLLayout {
  [key: string]: string;
}

@Directive({
  selector: '[vclLayout]',
})
export class LayoutDirective extends ObservableComponent {
  @Input('vclLayout')
  layout?: VCLLayout;
  layout$ = this.observeChangeValue<VCLLayout | undefined>('layout');
}

/**
 * The vclLayoutTarget directive allows to set class injection points on elements in the component's template.
 * Developer can inject style classes into these elements using the vclLayout directive on the component.
 */
@Directive({
  selector: '[vclLayoutTarget]',
})
export class LayoutTargetDirective extends ObservableComponent implements OnDestroy {
  @Input('vclLayoutTarget')
  name?: string; // Reference name
  name$ = this.observeChangeValue<string | undefined>('name');

  sub?: Subscription;

  classes: string[] = [];

  constructor(
    @Optional() @SkipSelf() @Inject(LayoutDirective) layoutHost: LayoutDirective | undefined,
    private renderer: Renderer2,
    private elRef: ElementRef
  ) {
    super();
    if (layoutHost) {
      // Whenever the name or the layout property on the vclLayout directive changes, update the classes
      this.sub = combineLatest(this.name$, layoutHost.layout$).subscribe(([name, layout]) => {
        // Remove any of previously added classes
        this.classes.forEach(thisName => this.renderer.removeClass(this.elRef.nativeElement, thisName));
        this.classes = [];

        if (name && layout && typeof layout[name] === 'string') {
          layout[name].split(' ').forEach(thisName => {
            // Only add classes that are not present on the element
            if (!this.elRef.nativeElement.classList.contains(thisName)) {
              // Add the class to the element
              this.renderer.addClass(this.elRef.nativeElement, thisName);
              // Remember them so they can be removed on a change
              this.classes = [...this.classes, thisName];
            }
          });
        }
      });
    }
  }

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
    super.ngOnDestroy();
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [LayoutTargetDirective, LayoutDirective],
  exports: [LayoutTargetDirective, LayoutDirective, CommonModule],
  providers: [],
})
export class VCLLayoutModule { }
