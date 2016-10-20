import { Component, Input, Output, EventEmitter, ElementRef, trigger } from '@angular/core';
import { OverlayManagerService, OverlayManagedComponent } from '../../services/overlayManager.service';

@Component({
  selector: 'vcl-popover',
  templateUrl: 'popover.component.html',
  host: {
    '(document:click)': 'onClick($event)',
  },
  animations: [
    trigger('popOverState', [])
  ]
})
export class PopoverComponent implements OverlayManagedComponent {

  protected opening: boolean = false;

  @Input()
  target: string;

  @Input()
  style: string;

  @Input()
  class: string = 'vclPopOver';

  @Input()
  zIndex: number = 10;

  protected coverZIndex: number = -1;

  @Input()
  targetAttachment: string = 'bottom left';

  @Input()
  attachment: string = 'top left';

  @Input()
  open: boolean = false;

  @Input()
  public layer: boolean = false;

  @Output()
  openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  zIndexManaged: boolean = true;

  @Input()
  expandManaged: boolean = true;

  state: string = 'open';

  constructor(
    protected overlayManger: OverlayManagerService,
    protected myElement: ElementRef
  ) {}

  close() {
    this.state = 'void';
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
      if (this.zIndexManaged) {
        if (changes.open.currentValue === true) {
          this.zIndex = this.overlayManger.register(this);
          this.coverZIndex = this.zIndex -1;
          this.opening = true;
          this.state = 'open';
        } else if (changes.open.currentValue === false) {
          this.state = 'void';
          this.zIndex = this.overlayManger.unregister(this);
          this.coverZIndex = -1;
        }
      }
    } catch (ex) {}
  }
}

