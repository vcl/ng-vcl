import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component,
  ElementRef, EventEmitter, HostBinding, HostListener, Inject,
  InjectionToken, Input, Optional, Output, SimpleChanges, OnInit, AfterViewInit,
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
export class PopoverComponent extends ObservableComponent implements OnInit, AfterViewInit {
  private static readonly Tag: string = 'PopoverComponent';

  private tag: string;

  private state: PopoverState = PopoverState.hidden;
  private translateX: number = 1;
  private translateY: number = 0;

  private enterAnimationFactory: AnimationFactory | undefined;
  private leaveAnimationFactory: AnimationFactory | undefined;

  @HostBinding('class.vclPopOver')
  @Input() public enableStyling = true;

  @Input() public debug = false;

  @Input() public target: string | ElementRef | Element;
  public targetElement: Element;

  @Input() public targetX: AttachmentX = AttachmentX.Left;
  @Input() public attachmentX: AttachmentX = AttachmentX.Left;
  @Input() public offsetAttachmentX: number = 0;

  @Input() public targetY: AttachmentY = AttachmentY.Bottom;
  @Input() public attachmentY: AttachmentY = AttachmentY.Top;
  @Input() public offsetAttachmentY: number = 0;

  public get visible(): boolean {
    return (this.state === PopoverState.opening || this.state === PopoverState.visible);
  }

  @Input()
  public set visible(value: boolean) {
    value ? this.open() : this.close();
  }

  @Output() public willClose = new EventEmitter<any>();
  @Output() public willOpen = new EventEmitter<any>();

  @HostBinding('class.vclLayoutHidden')
  public get classHidden() {
    return this.state === PopoverState.hidden;
  }

  @HostBinding('style.visibility')
  public get styleVisibility() {
    return this.state === PopoverState.opening ? 'hidden' : 'visible';
  }

  @HostBinding('style.transform')
  public get transform() {
    return `translate(${String(this.translateX)}px, ${String(this.translateY)}px)`;
  }

  @HostListener('window:resize', ['$event'])
  private onWindowResize(event: Event): void {
    this.reposition();
  }

  constructor(
    protected readonly ref: ElementRef,
    protected readonly builder: AnimationBuilder,
    protected readonly cd: ChangeDetectorRef,
    @Optional() @Inject(POPOVER_ANIMATIONS) protected animations: PopoverAnimationConfig
  ) {
    super();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    const tag: string = `${this.tag}.ngOnChanges()`;
    if (this.debug) console.log(tag, 'changes:', changes);
    this.onChange(changes);
  }

  public ngOnInit(): void {
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

  private setTag(): void {
    this.tag = `${PopoverComponent.Tag}.${this.target}`;
  }

  private getTargetElement(value: Element | ElementRef | string): Element | undefined {
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

    const diffY: number = mustY - isY + this.offsetAttachmentY;

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

  private getAttachmentPosition(): ClientRect {
    return this.ref.nativeElement.getBoundingClientRect();
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
      if (this.enterAnimationFactory && this.ref) {
        const player = this.enterAnimationFactory.create(this.ref.nativeElement);
        player.onDone(() => {
          player.destroy();
        });
        player.play();
      }
      this.state = PopoverState.visible;
      this.cd.markForCheck();
    }, 0);
  }

  public close(): void {
    if (this.state === PopoverState.hidden || this.state === PopoverState.opening || this.state === PopoverState.closing) {
      return;
    }
    this.state = PopoverState.closing;
    this.willClose.emit();
    if (this.leaveAnimationFactory && this.ref) {
      const player = this.leaveAnimationFactory.create(this.ref.nativeElement);
      player.onDone(() => {
        player.destroy();
        this.state = PopoverState.hidden;
        this.cd.markForCheck();
      });
      player.play();
    } else {
      this.state = PopoverState.hidden;
      this.cd.markForCheck();
    }
  }

  public toggle(): void {
    if (this.visible) {
      this.close();
    } else {
      this.open();
    }
  }
}
