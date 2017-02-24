import {
  Component, Input, Output,
  EventEmitter, ElementRef, trigger, NgZone,
  HostListener, OnInit, OnChanges, state, style, transition, animate,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'vcl-popover',
  templateUrl: 'popover.component.html',
  animations: [trigger('popOverState', [])],
  host: {
    '[class.vclPopOver]': 'true',
    '[style.position]': '"absolute"',
    '[style.transform]': '"translate("+translateX+"px, "+translateY+"px)"',
    '[style.opacity]': "opacity",
    '[@popOverState]': 'visible'
  }
})
export class PopoverComponent implements OnInit, OnChanges {



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

  translateX: number = 1;
  translateY: number = 0;

  @Input()
  zIndex: number = 10;
  protected coverZIndex: number = -1;


  @Input()
  open: boolean = false;
  visible: string = this.open ? 'open' : 'void';
  opacity = this.open ? 1 : 0;

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

  constructor(
    protected me: ElementRef,
    private zone: NgZone
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // next-tick needed
    setTimeout(this.reposition.bind(this), 0);
  }
  ngOnChanges() {
    // next-tick needed because attachement-position is not known
    setTimeout(this.reposition.bind(this), 0);
    this.visible = this.open ? 'open' : 'void';
    this.opacity = this.open ? 1 : 0;
  }

  close() {
    this.open = false;
    this.openChange.emit(this.open);
  }

  offClick() {
    if (this.expandManaged && !this.layer) {
      this.close();
    }
  }

  display() {
    if (open) return 'block';
    else return 'none';
  }

  getTargetPosition() {
    const targetEl = document.querySelector(this.target);
    if (!targetEl) return null;
    return targetEl.getBoundingClientRect();
  }

  getAttachementPosition() {
    return this.me.nativeElement.getBoundingClientRect();
  }

  reposition() {
    // console.log('reposition()');
    const targetPos = this.getTargetPosition();
    if (!targetPos) return;
    const ownPos = this.getAttachementPosition();
    // console.dir(targetPos);
    // console.dir(ownPos);

    // X
    const mustX = targetPos[this.targetX];
    const isX = ownPos[this.attachmentX];
    const diffX = mustX - isX;
    //    console.log('X: must: ' + mustX + ' | is: ' + isX);
    //    console.log(diffX);
    this.translateX = this.translateX + diffX;

    // Y
    const mustY = targetPos[this.targetY];
    const isY = ownPos[this.attachmentY];
    const diffY = mustY - isY;
    //    console.log('Y: must: ' + mustY + ' | is: ' + isY);
    //    console.log(diffY);
    this.translateY = this.translateY + diffY;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(ev) {
    this.reposition();
  }

}
