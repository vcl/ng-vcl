import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

const CIRCULAR = 'https://cdn.rawgit.com/vcl/busy-indicator/master/imgs/vclBusyIndicatorCircular.svg';
const STRAIGHT = 'https://cdn.rawgit.com/vcl/busy-indicator/master/imgs/vclBusyIndicatorStraight.svg';

@Component({
  selector: 'vcl-busy-indicator',
  templateUrl: 'busy-indicator.component.html'
})
export class BusyIndicatorComponent {

  constructor(private sanitizer: DomSanitizer ) { }

  @Input()
  type: 'straight' | 'circular' = 'circular';

  @Input()
  layout: 'vertical' | 'horizontal' = 'vertical';

  @Input()
  label = 'Loading';

  @Input()
  iconHeight = '3em';

  @Input()
  iconWidth = '3em';

  @Input()
  classSrc: string | null = null;

  @Input()
  imageSrc: string | null = null;

  get indicatorSrc(): SafeResourceUrl {
    if (this.imageSrc) {
      return this.imageSrc;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(this.type === 'straight' ? STRAIGHT : CIRCULAR);
  }
}
