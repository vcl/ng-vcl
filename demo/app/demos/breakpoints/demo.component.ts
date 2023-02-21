import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { VCLBreakpoints } from '@vcl/ng-vcl';
import { map } from 'rxjs/operators';

const pickMatches = map((state: BreakpointState) => state.matches);

@Component({
  templateUrl: 'demo.component.html',
})
export class BreakpointsDemoComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}

  xs$: Observable<boolean>;
  sm$: Observable<boolean>;
  md$: Observable<boolean>;
  lg$: Observable<boolean>;
  xl$: Observable<boolean>;
  xs_sm$: Observable<boolean>;

  ngOnInit(): void {
    this.xs$ = this.breakpointObserver
      .observe(VCLBreakpoints.xs)
      .pipe(pickMatches);
    this.sm$ = this.breakpointObserver
      .observe(VCLBreakpoints.sm)
      .pipe(pickMatches);
    this.md$ = this.breakpointObserver
      .observe(VCLBreakpoints.md)
      .pipe(pickMatches);
    this.lg$ = this.breakpointObserver
      .observe(VCLBreakpoints.lg)
      .pipe(pickMatches);
    this.xl$ = this.breakpointObserver
      .observe(VCLBreakpoints.xl)
      .pipe(pickMatches);
    this.xs_sm$ = this.breakpointObserver
      .observe([VCLBreakpoints.xs, VCLBreakpoints.sm])
      .pipe(pickMatches);
  }
}
