import { IconService } from './icon.service';
export declare class IconComponent {
    private _iconService;
    src: string;
    svguse: string;
    iconClass: string;
    icon: string;
    label: string;
    ariaRole: string;
    constructor(_iconService: IconService);
    readonly mergedIconClass: string;
    readonly isAriaHidden: boolean;
}
