import {
  Component, Input, Output,
  EventEmitter, ElementRef, trigger, NgZone
} from '@angular/core';

@Component({
  selector: 'vcl-popover',
  templateUrl: 'popover.component.html',
  animations: [
    trigger('popOverState', [])
  ]
})
export class PopoverComponent {

  @Input()
  target: string;
  @Input()
  targetX: 'left' | 'right' = 'left';
  @Input()
  targetY: 'top' | 'bottom' = 'bottom';
  @Input()
  attachmentX: 'left' | 'right' = 'left';
  @Input()
  attachmentY: 'top' | 'bottom' = 'top';

  @Input() // TODO is this needed here?
  style: string;

  @Input() // TODO write class to host-el?
  class: string = 'vclPopOver';

  @Input()
  zIndex: number = 10;
  protected coverZIndex: number = -1;


  @Input()
  open: boolean = false;
  visible: boolean = false;

  @Input()
  public layer: boolean = false;

  @Output()
  openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  zIndexManaged: boolean = true;

  @Input()
  expandManaged: boolean = true;

  @Input()
  timeout: number = 0;

  state: string = 'open';

  constructor(
    protected me: ElementRef,
    private zone: NgZone
  ) { }

  close() {
    this.state = 'void';
    this.open = false;
    this.openChange.emit(this.open);
  }

  offClick() {
    if (this.expandManaged && !this.layer) {
      this.close();
    }
  }

  async ngOnChanges(changes) {
/*    try {
      if (this.zIndexManaged) {
        if (changes.open.currentValue === true) {
          this.zIndex = this.overlayManger.register(this);
          this.coverZIndex = this.zIndex - 1;
          this.state = 'open';
          // TODO: Workaround for css "position relative"
          // Tether copies the dom element to the body. The component is removed before the copy is moved back
          // so it is not destroyed
          await new Promise(res => setTimeout(res, this.timeout));
          this.zone.run(() => this.visible = true);
        } else if (changes.open.currentValue === false) {
          this.state = 'void';
          this.zIndex = this.overlayManger.unregister(this);
          this.coverZIndex = -1;
          await new Promise(res => setTimeout(res, this.timeout));
          this.zone.run(() => this.visible = false);
        }
      }
    } catch (ex) { }*/
  }
}
