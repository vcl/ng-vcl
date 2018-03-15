import {
  Component, Input, ElementRef,
  trigger, state, transition, animate,
  style, AfterViewInit, Inject, Renderer, OnDestroy, OnChanges, SimpleChanges
} from '@angular/core';
import { ICoordinate } from './ICoordinate';
import { TooltipService } from './tooltip.service';
import { DOCUMENT } from '@angular/platform-browser';

export enum AnimationState {
  Shown = 'shown',
  Hidden = 'hidden',
  None = 'none'
}

export enum Placement {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right'
}

@Component({
  selector: 'vcl-tooltip',
  templateUrl: './tooltip.component.html',
  host: {
    '[class.vclTooltip]': 'true',
  },
  styles: [`:host{ top: 0; left: 0 }`],
  animations: [
    trigger('enterAnimation', [
      state('shown', style({ opacity: 1, 'z-index': 'initial' })),
      state('hidden', style({ opacity: 0, 'z-index': '-1' })),
      state('none', style({ opacity: 0 })),
      transition('hidden => shown', animate('0.2s')),
    ])
  ]
})
export class TooltipComponent implements AfterViewInit, OnDestroy, OnChanges {
  private static readonly Tag: string = 'TooltipComponent';

  @Input() debug: boolean = false;

  @Input() content: string;
  @Input() placement: Placement = Placement.Top;
  @Input() hostElement: HTMLElement;

  @Input() animationState: AnimationState;
  public _animationState: AnimationState = AnimationState.Hidden;

  @Input() showArrowPointer: boolean = true;

  // Initial position should out of screen
  tooltipPlacement: ICoordinate = { Top: -1000, Left: -1000 };
  // true if initialized by directive
  showOnInit: boolean = false;

  constructor(private element: ElementRef,
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer,
    private tooltipService: TooltipService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.placement || changes.content || changes.animationState) {
      this.showTooltip()();
    }
  }

  ngAfterViewInit(): void {
    const tag: string = `${TooltipComponent.Tag}.ngAfterViewInit()`;
    const debug: boolean = this.debug || false;
    if (debug) console.log(tag, 'this:', this);
    if (debug) console.log(tag, 'this.animationState:', this.animationState);

    setTimeout(() => {
      if (this.showOnInit || this.animationState === AnimationState.Shown) {
        setTimeout(() => this.showTooltip()());
      } else if (!this.animationState) {
        this._animationState = AnimationState.None;
        this.renderer.listen(this.hostElement, 'mouseenter', () => this.showTooltip());
        this.renderer.listen(this.hostElement, 'focusin', () => this.showTooltip());
        this.renderer.listen(this.hostElement, 'focusout', () => { this._animationState = AnimationState.Hidden; });
        this.renderer.listen(this.hostElement, 'mouseleave', () => { this._animationState = AnimationState.Hidden; });
      }
    });
  }

  showTooltip(): Function {
    const tag: string = `${TooltipComponent.Tag}.showTooltip()`;
    const debug: boolean = this.debug || false;

    return () => {
      if (this.hostElement) {
        const tooltipOffset: ICoordinate = this.tooltipService.positionElements(this.hostElement,
          this.element.nativeElement.children[0].children[0], this.placement);
        if (debug) console.log(tag, 'tooltipOffset:', tooltipOffset);
        this.tooltipPlacement = {
          Top: tooltipOffset.Top,
          Left: tooltipOffset.Left
        };
        if (debug) console.log(tag, 'this.tooltipPlacement:', this.tooltipPlacement);
        this._animationState = AnimationState.Shown;
        this.document.querySelector('body').appendChild(this.element.nativeElement);
        return true;
      } else {
        console.error('Host element not specified');
        return false;
      }
    };
  }

  public get tooltipPosition(): string {
    switch (this.placement) {
      case Placement.Right:
        return 'vclTooltip vclArrowPointerLeft';
      case Placement.Left:
        return 'vclTooltip vclArrowPointerRight';
      case Placement.Bottom:
        return 'vclTooltip vclArrowPointerTop';
      case Placement.Top:
      default:
        return 'vclTooltip vclArrowPointerBottom';
    }
  }

  public ngOnDestroy(): void {
    if (!this.showOnInit) {
      this.element.nativeElement.parentNode.removeChild(this.element.nativeElement);
    }
  }
}


