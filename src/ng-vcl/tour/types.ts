import { ElementRef } from '@angular/core';

export interface IHintOptionsFull {
    debug: boolean;

    elementsDisabled: boolean;
    defaultOrder: number;
    defaultLayer: number;
    applyRelative: boolean;
    stepTag: string;
    dismissOnOverlay: boolean;

    previousLabel: string;
    nextLabel: string;
    exitLabel: string;

    previousIcon: string;
    nextIcon: string;
    exitIcon: string;

    buttonClass: string;
}

export type IHintOptions = Partial<IHintOptionsFull>;

export class HintOptions implements IHintOptions {
    debug: boolean = false;

    elementsDisabled: boolean = true;
    defaultOrder: number = HintConfig.DEFAULT_ORDER;
    defaultLayer: number = HintConfig.DEFAULT_PX_LAYER;
    applyRelative: boolean = HintConfig.APPLY_RELATIVE;
    stepTag: string = HintConfig.HINT_TAG;
    dismissOnOverlay: boolean = HintConfig.DISMISS_ON_OVERLAY;

    previousLabel: string = 'Previous';
    nextLabel: string = 'Next';
    exitLabel: string = 'Exit';

    previousIcon: string = 'fa fa-chevron-left';
    nextIcon: string = 'fa fa-chevron-right';
    exitIcon: string = 'fa fa-close';

    buttonClass: string = '';
}

export const HintConfig = {
    HINT_TAG: 'vcl-tour-step',
    Z_INDEX: '999',
    DEFAULT_ORDER: 99,
    DEFAULT_PX_LAYER: 15,
    APPLY_RELATIVE: true,
    DISMISS_ON_OVERLAY: false,
};

export interface Step {
    target: string | ElementRef | Element;
    order: number;
}