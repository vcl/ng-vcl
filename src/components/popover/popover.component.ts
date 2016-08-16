import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { OverlayManagerService, OverlayManagedComponent } from '../../services/overlayManager.service';

@Component({
  selector: 'vcl-popover',
  templateUrl: 'popover.component.html',
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class PopoverComponent implements OverlayManagedComponent {

  private opening: boolean = false;

  @Input()
  target: string;

  @Input()
  class: string = 'vclPopOver';

  @Input()
  zIndex: number = 10;

  @Input()
  targetAttachment: string = 'bottom left';

  @Input()
  attachment: string = 'top left';

  @Input()
  open: boolean = false;

  @Output()
  openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  zIndexManaged: boolean = true;

  @Input()
  expandManaged: boolean = true;

  constructor(
    private overlayManger: OverlayManagerService,
    private myElement: ElementRef
  ) {}

  close() {
    this.open = false;
    this.openChange.emit(this.open);
  }

  onClick(event) {
    if (!this.opening && this.expandManaged && event.path.indexOf(this.myElement.nativeElement) === -1) {
      this.close();
    }
    this.opening = false;
  }

  ngOnChanges(changes) {
    try {
      if(this.zIndexManaged) {
        if (changes.open.currentValue === true) {
          this.zIndex = this.overlayManger.register(this);
          this.opening = true;
        } else if (changes.open.currentValue === false) {
          this.zIndex = this.overlayManger.unregister(this);
        }
      }
    } catch (ex) {}
  }
}

