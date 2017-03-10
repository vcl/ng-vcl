import {
  Component, Input, Output,
  EventEmitter, ElementRef, trigger, NgZone,
  HostListener, OnInit, OnChanges, state, style, transition, animate,
  HostBinding
} from '@angular/core';

type AttachmentX = 'left' | 'center' | 'right';
const AttachmentX = {
  Left: 'left' as AttachmentX,
  Center: 'center' as AttachmentX,
  Right: 'right' as AttachmentX,
};

type AttachmentY = 'top' | 'center' | 'bottom';
const AttachmentY = {
  Top: 'top' as AttachmentY,
  Center: 'center' as AttachmentY,
  Bottom: 'bottom' as AttachmentY,
};

const Dimension = {
  Width: 'width',
  Height: 'height',
};

const PopoverState = {
  Open: 'open',
  Void: 'void',
};

@Component({
  selector: 'vcl-popover',
  templateUrl: 'popover.component.html',
  // The hide/open animation is set in the application itself through:
  // setAnimations(PopoverComponent, [
  //   trigger('popoverState', [
  //     [..]
  //   ]);
  animations: [trigger('popoverState', [])],
  host: {
    '[@popoverState]': 'popoverState',
    '[class.vclPopOver]': 'true',
    '[class.vclLayoutHidden]': '!open',
    '[style.position]': '"absolute"',
    '[style.transform]': '"translate("+translateX+"px, "+translateY+"px)"',
  }
})
export class PopoverComponent {
  private static readonly Tag: string = 'PopoverComponent';

  private tag: string;

  @Input() private debug: false;

  @Input() private target: string;
  @Input() private targetX: AttachmentX = AttachmentX.Left;
  @Input() private targetY: AttachmentY = AttachmentY.Bottom;
  @Input() private attachmentX: AttachmentX = AttachmentX.Left;
  @Input() private attachmentY: AttachmentY = AttachmentY.Top;

  private translateX: number = 1;
  private translateY: number = 0;

  @Input() private zIndex: number = 10;
  // protected coverZIndex: number = -1;

  @Input() private open: boolean = false;
  private popoverState: string;

  // @Input() public layer: boolean = false;

  @Output() private openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  // @Input() private zIndexManaged: boolean = true;

  // @Input() private expandManaged: boolean = true;

  // @Input() private timeout: number = 0;

  constructor(
    protected readonly me: ElementRef,
    private readonly zone: NgZone
  ) {
    this.setVisibility();
  }

  private ngOnInit(): void {
    this.tag = `${PopoverComponent.Tag}.${this.target}`;
    const tag: string = `${this.tag}.ngOnInit()`;
    if (this.debug) console.log(tag, 'this:', this);
  }

  private ngAfterViewInit(): void {
    setTimeout(() => this.reposition(), 0);
  }

  private ngOnChanges(changes: any): void {
    if (changes.target) this.tag = `${PopoverComponent.Tag}.${changes.target.currentValue}`;
    setTimeout(() => this.reposition(), 0);
  }

  private setVisibility(): void {
    this.popoverState = this.open ? PopoverState.Open : PopoverState.Void;
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

  private getTargetPosition(): ClientRect | null {
    const targetEl = document.querySelector(this.target);
    if (!targetEl) return null;
    return targetEl.getBoundingClientRect();
  }

  private getAttachementPosition(): ClientRect {
    return this.me.nativeElement.getBoundingClientRect();
  }

  public reposition(): void {
    const tag = `${this.tag}.reposition()`;
    if (!this.open) return;

    const targetPos = this.getTargetPosition();
    if (this.debug) console.log(tag, 'targetPos:', targetPos);
    if (!targetPos) return;
    const ownPos: ClientRect = this.getAttachementPosition();
    if (this.debug) console.log(tag, 'ownPos:', ownPos);

    const mustX: number = this.targetX === AttachmentX.Center ?
      targetPos[AttachmentX.Left] + targetPos[Dimension.Width] / 2 :
      targetPos[this.targetX];
    if (this.debug) console.log(tag, 'mustX:', mustX);

    const isX: number = this.attachmentX === AttachmentX.Center ?
      ownPos[AttachmentX.Left] + ownPos[Dimension.Width] / 2 :
      ownPos[this.attachmentX];
    if (this.debug) console.log(tag, 'isX:', isX);

    const diffX: number = mustX - isX;
    if (this.debug) console.log(tag, 'diffX:', diffX);

    this.translateX = this.translateX + diffX;

    const mustY: number = this.targetY === AttachmentY.Center ?
      targetPos[AttachmentY.Top] - targetPos[Dimension.Height] / 2 :
      targetPos[this.targetY];
    if (this.debug) console.log(tag, 'mustY:', mustY);

    const isY: number = this.attachmentY === AttachmentY.Center ?
      ownPos[AttachmentY.Top] - ownPos[Dimension.Height] / 2 :
      ownPos[this.attachmentY];
    if (this.debug) console.log(tag, 'isY:', isY);

    const diffY: number = mustY - isY;
    if (this.debug) console.log(tag, 'diffY:', diffY);

    this.translateY = this.translateY + diffY;

    this.setVisibility();
  }

  @HostListener('window:resize', ['$event'])
  private onWindowResize(ev): void {
    this.reposition();
  }
}
