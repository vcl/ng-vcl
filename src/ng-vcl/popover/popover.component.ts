import {
  Component, Input, Output,
  EventEmitter, ElementRef, trigger, NgZone,
  HostListener, OnInit, OnChanges, state, style, transition, animate,
  HostBinding, SimpleChanges, ChangeDetectionStrategy
} from '@angular/core';
import { ObservableComponent } from "../core/index";
import { Observable } from "rxjs/Observable";

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
  Visible: 'visible',
  Void: 'void',
};

@Component({
  selector: 'vcl-popover',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // The close/open animation is set in the application itself through:
  // setAnimations(PopoverComponent, [
  //   trigger('popoverState', [
  //     [..]
  //   ]);
  animations: [trigger('popoverState', [])],
  host: {
    '[@popoverState]': 'popoverState',
    '[class.vclPopOver]': 'true',
    '[style.position]': '"absolute"'
  }
})
export class PopoverComponent extends ObservableComponent {
  private static readonly Tag: string = 'PopoverComponent';

  private tag: string;

  @Input()
  debug: false;

  @Input()
  target: string | any;

  @Input()
  targetX: AttachmentX = AttachmentX.Left;

  @Input()
  targetY: AttachmentY = AttachmentY.Bottom;

  @Input()
  attachmentX: AttachmentX = AttachmentX.Left;

  @Input()
  attachmentY: AttachmentY = AttachmentY.Top;

  _visible: boolean = false;
  @Input()
  set visible(value: boolean) {
    // We have to wait one runloop before calling reposition(), so the element is rendered and the right bounds can be determined.
    // Also hide the popover via the visibility-style. This avoids flashing up on the wrong position.
    if (!this._visible && value) {
      this.visibility = 'hidden';
      setTimeout(() => {
        this.reposition();
        this.visibility = 'visible';
      }, 0);
    } else {
      this.visibility = 'visible';
    }
    this._visible = value;
  }

  get visible(): boolean {
    return this._visible;
  }

  @Output()
  visibleChange = new EventEmitter<boolean>();

  private translateX: number = 1;
  private translateY: number = 0;

  @HostBinding('class.vclLayoutHidden')
  get hidden() {
    return !this.visible;
  }

  @HostBinding('style.visibility')
  visibility: string = 'visible';

  @HostBinding('style.transform')
  get transform() {
    return `translate(${String(this.translateX)}px, ${String(this.translateY)}px)`;
  }

  get popoverState() {
    return this.visible ? PopoverState.Visible : PopoverState.Void;
  }

  constructor(protected readonly me: ElementRef) {
    super();
    this.observeChangeValue('target')
        .subscribe(target => this.tag = `${PopoverComponent.Tag}.${target}`);

    this.observeChanges('target', 'targetX', 'targetY', 'attachmentX', 'attachmentY')
        .subscribe(() => this.reposition());
  }


  ngOnInit(): void {
    this.tag = `${PopoverComponent.Tag}.${String(this.target)}`;
    const tag: string = `${this.tag}.ngOnInit()`;
    if (this.debug) console.log(tag, 'this:', this);
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.reposition(), 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
  }

  @HostListener('window:resize', ['$event'])
  private onWindowResize(ev): void {
    this.reposition();
  }

  private getTargetPosition(): ClientRect | undefined {
    let targetEl: HTMLElement | undefined;
    if (typeof this.target === 'string') {
      targetEl = document.querySelector(this.target) as HTMLElement || undefined;
    } else if (this.target instanceof HTMLElement) {
      targetEl = this.target;
    } else if (this.target instanceof ElementRef && this.target.nativeElement) {
      targetEl = this.target.nativeElement;
    }

    return targetEl instanceof HTMLElement ? targetEl.getBoundingClientRect() : undefined;
  }

  private getAttachementPosition(): ClientRect {
    return this.me.nativeElement.getBoundingClientRect();
  }

  public open(): void {
    if (this.visible) return;
    this.visible = true;
    this.visibleChange.emit(this.visible);
  }

  public close(): void {
    if (!this.visible) return;
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  public toggle() {
    this.visible ? this.close() : this.open();
  }

  public reposition(): void {

    const targetPos = this.getTargetPosition();
    if (!targetPos) return;

    const ownPos: ClientRect = this.getAttachementPosition();

    const mustX: number = this.targetX === AttachmentX.Center ?
      targetPos[AttachmentX.Left] + targetPos[Dimension.Width] / 2 :
      targetPos[this.targetX];

    const isX: number = this.attachmentX === AttachmentX.Center ?
      ownPos[AttachmentX.Left] + ownPos[Dimension.Width] / 2 :
      ownPos[this.attachmentX];

    const diffX: number = mustX - isX;

    this.translateX = this.translateX + diffX;

    const mustY: number = this.targetY === AttachmentY.Center ?
      targetPos[AttachmentY.Top] - targetPos[Dimension.Height] / 2 :
      targetPos[this.targetY];

    const isY: number = this.attachmentY === AttachmentY.Center ?
      ownPos[AttachmentY.Top] - ownPos[Dimension.Height] / 2 :
      ownPos[this.attachmentY];

    const diffY: number = mustY - isY;

    if (this.debug) {
      console.log(`${this.tag}.reposition()`, {
        targetPos,
        ownPos,
        mustX,
        isX,
        diffX,
        mustY,
        isY,
        diffY
      });
    }

    this.translateY = this.translateY + diffY;
  }
}
