import { Directive, OnDestroy, HostListener, Input, ElementRef, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { TooltipComponent } from './tooltip.component';
@Directive({ selector: '[vcl-tooltip]' })
export class TooltipDirective implements OnDestroy {

    @Input() content: string = '';
    @Input() position: string = 'top';

    tooltip: ComponentRef<TooltipComponent>;

    constructor(private element: ElementRef,
        private resolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef) {

    }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        const factory = this.resolver.resolveComponentFactory(TooltipComponent);
        this.tooltip = this.viewContainerRef.createComponent(factory);
        this.tooltip.instance.content = this.content;
        this.tooltip.instance.position = this.position;
        this.tooltip.instance.targetElement = this.element.nativeElement;

    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.tooltip.destroy();
    }

    ngOnDestroy(): void {
        if (this.tooltip)
            this.tooltip.destroy();
    }



}
