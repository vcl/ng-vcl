import { Directive, Input, Optional, SkipSelf, NgModule, Inject, OnDestroy, Self, Renderer2, ElementRef } from '@angular/core';
import { Observable, combineLatest, Subscription } from 'rxjs';
import { NgClass, CommonModule } from '@angular/common';
import { ObservableComponent } from './observable.component';
import { startWith } from 'rxjs/operators';

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

@Directive({
  selector: '[vclLayoutTarget]',
})
export class LayoutTargetDirective extends ObservableComponent implements OnDestroy {
  @Input('vclLayoutTarget')
  name?: string;
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
      this.sub = combineLatest(this.name$, layoutHost.layout$).subscribe(([name, layout]) => {
        if (name && layout && typeof layout[name] === 'string') {
          this.classes = layout[name].split(' ');
          this.classes.forEach(name => this.renderer.addClass(this.elRef.nativeElement, name));
        } else {
          this.classes.forEach(name => this.renderer.removeClass(this.elRef.nativeElement, name));
          this.classes = [];
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
