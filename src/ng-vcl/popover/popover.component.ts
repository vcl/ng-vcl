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
export class PopoverComponent {
  private static readonly Tag: string = 'PopoverComponent';

  private tag: string;

  @Input() private debug: false;

  @Input() private target: string;
  @Input() private targetX: 'left' | 'right' = 'left';
  @Input() private targetY: 'top' | 'bottom' = 'bottom';
  @Input() private attachmentX: 'left' | 'right' = 'left';
  @Input() private attachmentY: 'top' | 'bottom' = 'top';

  private translateX: number = 1;
  private translateY: number = 0;

  @Input() private zIndex: number = 10;
  protected coverZIndex: number = -1;

  @Input() private open: boolean = true;
  private visible: string = this.open ? 'open' : 'void';
  private opacity: number = this.open ? 1 : 0;

  @Input() public layer: boolean = false;

  @Output() private openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() private zIndexManaged: boolean = true;

  @Input() private expandManaged: boolean = true;

  @Input() private timeout: number = 0;

  constructor(
    protected me: ElementRef,
    private zone: NgZone
  ) { }

  private ngOnInit(): void {
    this.tag = `${PopoverComponent.Tag}`;
  }

  private ngAfterViewInit(): void {
    setTimeout(this.reposition.bind(this), 0);
  }

  private ngOnChanges(): void {
    setTimeout(this.reposition.bind(this), 0);
    this.visible = this.open ? 'open' : 'void';
    this.opacity = this.open ? 1 : 0;
  }

  public close(): void {
    this.open = false;
    this.openChange.emit(this.open);
  }

  // private offClick(): void {
  //   if (this.expandManaged && !this.layer) {
  //     this.close();
  //   }
  // }

  // private display(): string {
  //   if (open) return 'block';
  //   else return 'none';
  // }

  private getTargetPosition(): any {
    const targetEl = document.querySelector(this.target);
    if (!targetEl) return null;
    return targetEl.getBoundingClientRect();
  }

  private getAttachementPosition(): any {
    return this.me.nativeElement.getBoundingClientRect();
  }

  public reposition(): void {
    const tag = `${this.tag}.reposition()`;
    if (this.debug) console.log(tag);
    const targetPos = this.getTargetPosition();
    if (!targetPos) return;
    const ownPos = this.getAttachementPosition();
    if (this.debug) console.dir(tag, 'targetPos:', targetPos);
    if (this.debug) console.dir(tag, 'ownPos:', ownPos);

    // X
    const mustX = targetPos[this.targetX];
    const isX = ownPos[this.attachmentX];
    const diffX = mustX - isX;
    if (this.debug) console.log(tag, 'X: must: ' + mustX + ' | is: ' + isX);
    if (this.debug) console.log(tag, 'diffX:', diffX);
    this.translateX = this.translateX + diffX;

    // Y
    const mustY = targetPos[this.targetY];
    const isY = ownPos[this.attachmentY];
    const diffY = mustY - isY;
    if (this.debug) console.log(tag, 'Y: must: ' + mustY + ' | is: ' + isY);
    if (this.debug) console.log(tag, 'diffY:', diffY);
    this.translateY = this.translateY + diffY;
  }

  @HostListener('window:resize', ['$event'])
  private onWindowResize(ev): void {
    this.reposition();
  }
}
