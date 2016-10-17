import { NgModule, EventEmitter, Output, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[off-click]',
})
export class OffClickDirective {
  @Output('off-click')
  offClick = new EventEmitter();

  private listener: { (ev: MouseEvent) };

  constructor(private elem: ElementRef) { }

  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      // Create the listener
      this.listener = (ev) => {
        const me = this.elem.nativeElement;
        // Check if the target is the off-clicks element or an sub element 
        if (ev.target && me !== ev.target && !me.contains(ev.target)) {
          this.offClick.emit();
        }
      };
      // Wait for next run loop to attach the listener as it might be triggered by a current click event
      setTimeout(() => {
        document.addEventListener('click', this.listener);
      }, 0);
    }
  }

  ngOnDestroy() {
    if (typeof document !== 'undefined' && this.listener) {
      document.removeEventListener('click', this.listener);
    }
  }
}

