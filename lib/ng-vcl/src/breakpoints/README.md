# Breakpoints

VCL Breakpoint queries to be used with `@angular/cdk`'s BreakpointObserver or `window.matchMedia()`

### Usage

```ts
import { VCLBreakpoints } from '@vcl/ng-vcl';
import { BreakpointObserver } from '@angular/cdk/layout';

export class MyComponent implements OnInit {
  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {}

  xs_sm$: Observable<boolean>;

  ngOnInit(): void {
    this.xs_sm$ = this.breakpointObserver.observe([VCLBreakpoints.xs, VCLBreakpoints.sm]).pipe(
      map(state => state.matches)
    );
  }
}

```
