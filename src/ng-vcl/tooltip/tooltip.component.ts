import { Component, Input, ElementRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'vcl-tooltip-container',
    templateUrl: './tooltip.component.html',
    host: {
        '[class.vclTooltip]': 'true',
    }
})
export class TooltipComponent {

    @Input() content: string;
    @Input() position: string;
    @Input() ref: any;

    //TODO: calculate proper tooltip position
    //TODO: calculate proper tooltip position
    // @Input() offsetTop: number = 30;

    //widthCorrection: number = 50;

    constructor(private element: ElementRef) {

    }

    get tooltipPosiiton() {
        switch (this.position) {
            case 'right':
                return 'vclTooltip vclArrowPointerRight';
            case 'left':
                return 'vclTooltip vclArrowPointerLeft';
            case 'bottom':
                return 'vclTooltip vclArrowPointerBottom';
            default: return 'vclTooltip vclArrowPointerTop';
        }
    }


    //get OffsetTop(): string {
    //    return (+this.element.nativeElement.offsetTop
    //        - this.offsetTop) + 'px';
    //}

    //get OffsetLeft(): string {
    //    return (+this.element.nativeElement.offsetLeft
    //        - this.widthCorrection) + 'px';

    //}

}
