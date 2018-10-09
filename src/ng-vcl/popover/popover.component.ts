import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component,
  ElementRef, EventEmitter, HostBinding, HostListener, Inject,
  InjectionToken, Input, Optional, Output, SimpleChanges, AfterViewInit
} from '@angular/core';
import {
  AnimationBuilder, AnimationFactory, AnimationMetadata
} from '@angular/animations';
import { ObservableComponent } from '../core/index';

export type AttachmentX = 'left' | 'center' | 'right';
export const AttachmentX = {
  Left: 'left' as AttachmentX,
  Center: 'center' as AttachmentX,
  Right: 'right' as AttachmentX,
};

export type AttachmentY = 'top' | 'center' | 'bottom';
export const AttachmentY = {
  Top: 'top' as AttachmentY,
  Center: 'center' as AttachmentY,
  Bottom: 'bottom' as AttachmentY,
};

const Dimension = {
  Width: 'width',
  Height: 'height',
};

export enum PopoverState {
  visible,
  hidden,
  opening,
  closing
}

export const POPOVER_ANIMATIONS = new InjectionToken('@ng-vcl/ng-vcl#popover_animations');

export interface PopoverAnimationConfig {
  enter?: AnimationMetadata | AnimationMetadata[];
  leave?: AnimationMetadata | AnimationMetadata[];
}

@Component({
  selector: 'vcl-popover',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.position]': '"absolute"'
  }
})
export class PopoverComponent extends ObservableComponent implements AfterViewInit {
  private static readonly Tag: string = 'PopoverComponent';

  private tag: string;

  @HostBinding('class.vclPopOver')
  @Input()
  enableStyling = true;

  @Input()
  debug = false;

  @Input()
  target: string | ElementRef | Element;

  targetElement: Element;

  @Input()
  targetX: AttachmentX = AttachmentX.Left;

  @Input()
  targetY: AttachmentY = AttachmentY.Bottom;

  @Input()
  attachmentX: AttachmentX = AttachmentX.Left;
  @Input()
  offsetAttachmentX: number = 0;

  @Input()
  attachmentY: AttachmentY = AttachmentY.Top;
  @Input()
  offsetAttachmentY: number = 0;

  @Input()
  set visible(value) {
    if (value) {
      this.open();
    } else {
      this.close();
    }
  }

  @Output()
  willClose = new EventEmitter<any>();

  @Output()
  willOpen = new EventEmitter<any>();

  get visible() {
    return (this.state === PopoverState.opening || this.state === PopoverState.visible);
  }

  state: PopoverState = PopoverState.hidden;

  @HostBinding('class.vclLayoutHidden')
  get classHidden() {
    return this.state === PopoverState.hidden;
  }

  @HostBinding('style.visibility')
  get styleVisibility() {
    return this.state === PopoverState.opening ? 'hidden' : 'visible';
  }

  private translateX: number = 1;
  private translateY: number = 0;

  @HostBinding('style.transform')
  get transform() {
    return `translate(${String(this.translateX)}px, ${String(this.translateY)}px)`;
  }

  enterAnimationFactory: AnimationFactory | undefined;
  leaveAnimationFactory: AnimationFactory | undefined;

  constructor(
    protected readonly me: ElementRef,
    private builder: AnimationBuilder,
    private cdRef: ChangeDetectorRef,
    @Optional() @Inject(POPOVER_ANIMATIONS) private animations: PopoverAnimationConfig
  ) {
    super();
    this.observeChanges('target', 'targetX', 'targetY', 'attachmentX', 'attachmentY').subscribe(this.onChange.bind(this));
  }

  private onChange(changes: SimpleChanges = { target: { currentValue: this.target } } as any): void {
    const tag: string = `${PopoverComponent.Tag}.onChange()`;
    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'changes:', changes);
    if (changes.target) {
      this.setTarget(changes.target.currentValue);
      this.setTag();
    }
    this.reposition();
  }

  private setTarget(value: Element | ElementRef | string = this.target) {
    this.targetElement = this.getTargetElement(value) as Element;
  }

  getTargetElement(value: Element | ElementRef | string): Element | undefined {
    const tag: string = `${PopoverComponent.Tag}.getTargetElement()`;
    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'value:', value);

    let el: Element | undefined = undefined;
    if (typeof value === 'string') {
      if (debug) console.log(tag, 'typeof value === string');
      el = document.querySelector(value) as Element;
    } else if (value instanceof Element) {
      if (debug) console.log(tag, 'value instanceof Element');
      el = value;
    } else if (value instanceof ElementRef) {
      if (debug) console.log(tag, 'value instanceof ElementRef');
      el = value.nativeElement;
    } else {
      if (debug) console.log(tag, 'value is undefined');
    }

    if (debug) console.log(tag, 'el:', el);
    return el;
  }

  private setTag(): void {
    this.tag = `${PopoverComponent.Tag}.${this.target}`;
  }


  public reposition(): void {
    const tag: string = `${this.tag}.reposition()`;

    const targetPos = this.targetElement ? this.targetElement.getBoundingClientRect() : undefined;

    if (this.debug) console.log(tag, 'targetPos:', targetPos);
    if (!this.visible || !targetPos) return;

    const ownPos: ClientRect = this.getAttachmentPosition();
    if (this.debug) console.log(tag, 'ownPos:', ownPos);

    const mustX: number = this.targetX === AttachmentX.Center ?
      targetPos[AttachmentX.Left] + targetPos[Dimension.Width] / 2 :
      targetPos[this.targetX];

    const isX: number = this.attachmentX === AttachmentX.Center ?
      ownPos[AttachmentX.Left] + ownPos[Dimension.Width] / 2 :
      ownPos[this.attachmentX];

    const diffX: number = mustX - isX;

    this.translateX = this.translateX + diffX + this.offsetAttachmentX;

    const mustY: number = this.targetY === AttachmentY.Center ?
      targetPos[AttachmentY.Top] + targetPos[Dimension.Height] / 2 :
      targetPos[this.targetY];

    const isY: number = this.attachmentY === AttachmentY.Center ?
      ownPos[AttachmentY.Top] + ownPos[Dimension.Height] / 2 :
      ownPos[this.attachmentY];

    const diffY: number = mustY - isY + + this.offsetAttachmentY;

    if (this.debug) {
      console.log(tag, {
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

  private ngOnInit(): void {
    this.setTag();
    const tag: string = `${this.tag}.ngOnInit()`;
    if (this.debug) console.log(tag, 'this:', this);
  }

  public ngAfterViewInit(): void {
    setTimeout(() => this.onChange());

    if (this.animations) {
      if (this.animations.enter) {
        this.enterAnimationFactory = this.builder.build(this.animations.enter);
      }

      if (this.animations.leave) {
        this.leaveAnimationFactory = this.builder.build(this.animations.leave);
      }
    }

  }

  public ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    const tag: string = `${this.tag}.ngOnChanges()`;
    if (this.debug) console.log(tag, 'changes:', changes);
  }

  public open(): void {
    if (this.state === PopoverState.visible || this.state === PopoverState.opening) {
      return;
    }

    this.state = PopoverState.opening;
    this.willOpen.emit();
    // We have to wait one runloop before calling reposition(), so the element is rendered and the right bounds can be determined.
    // Also when opening the popover is hidden via the visibility-style. This avoids flashing up on the wrong position.
    setTimeout(() => {
      this.reposition();
      if (this.enterAnimationFactory && this.me) {
        const player = this.enterAnimationFactory.create(this.me.nativeElement);
        player.onDone(() => {
          player.destroy();
        });
        player.play();
      }
      this.state = PopoverState.visible;
      this.cdRef.markForCheck();
    }, 0);
  }

  public close(): void {
    if (this.state === PopoverState.hidden || this.state === PopoverState.opening || this.state === PopoverState.closing) {
      return;
    }
    this.state = PopoverState.closing;
    this.willClose.emit();
    if (this.leaveAnimationFactory && this.me) {
      const player = this.leaveAnimationFactory.create(this.me.nativeElement);
      player.onDone(() => {
        player.destroy();
        this.state = PopoverState.hidden;
        this.cdRef.markForCheck();
      });
      player.play();
    } else {
      this.state = PopoverState.hidden;
      this.cdRef.markForCheck();
    }
  }

  public toggle() {
    if (this.visible) {
      this.close();
    } else {
      this.open();
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(ev): void {
    this.reposition();
  }

  private getAttachmentPosition(): ClientRect {
    return this.me.nativeElement.getBoundingClientRect();
  }
}
