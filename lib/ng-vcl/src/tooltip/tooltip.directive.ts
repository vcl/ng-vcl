import {
  Directive, OnDestroy, HostListener, Input, ElementRef,
  ComponentFactoryResolver, ViewContainerRef,
  ComponentRef, Inject, OnChanges, SimpleChanges
} from '@angular/core';
import { TooltipComponent, Placement } from './tooltip.component';

@Directive({ selector: '[vcl-tooltip]' })
export class TooltipDirective implements OnDestroy, OnChanges {

  @Input() content = '';
  @Input() position: Placement;

  tooltip: ComponentRef<TooltipComponent>;

  constructor(private element: ElementRef,
    private resolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.tooltip) {
      if (changes.content) {
        this.tooltip.instance.content = this.content;
      } else if (changes.position) {
        this.tooltip.instance.placement = this.position;
      }
    }
  }

  @HostListener('mouseenter')
  @HostListener('focusin')
  onMouseEnter(): void {
    const factory = this.resolver.resolveComponentFactory(TooltipComponent);
    this.tooltip = this.viewContainerRef.createComponent(factory);
    this.tooltip.instance.content = this.content;
    this.tooltip.instance.placement = this.position;
    this.tooltip.instance.hostElement = this.element.nativeElement;
    this.tooltip.instance.showOnInit = true;
  }

  @HostListener('focusout')
  @HostListener('mouseleave')
  ngOnDestroy(): void {
    if (this.tooltip) {
      this.tooltip.destroy();
    }
  }

}
