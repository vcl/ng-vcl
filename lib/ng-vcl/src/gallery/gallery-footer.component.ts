import {
  Component,
  Input,
  Optional,
  ChangeDetectionStrategy,
} from '@angular/core';
import { GalleryComponent } from './gallery.component';

@Component({
  selector: 'vcl-gallery-footer',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: 'gallery-footer.component.html',
})
export class GalleryFooterComponent {
  @Input()
  target: GalleryComponent;

  constructor(@Optional() parent: GalleryComponent) {
    if (this.target == null) {
      this.target = parent;
    }
  }
}
