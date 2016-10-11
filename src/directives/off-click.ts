import { NgModule, EventEmitter, Output, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[off-click]',
})
export class OffClickDirective {
  @Output('off-click')
  offClick = new EventEmitter();

  private listener;

  constructor(private elem: ElementRef) { }

  createListener() {
    return (event) => {
      if (event.target && this.elem.nativeElement !== event.target && !this.elem.nativeElement.contains(event.target)) {
        this.offClick.emit();
      }
    };
  }

  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      this.listener = this.createListener();
      // Wait for next run loop to attach the listener as it might trigger by accident
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


@NgModule({
  declarations: [OffClickDirective],
  exports: [OffClickDirective]
})
export class VCLOffClickModule {}
