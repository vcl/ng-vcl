declare module "icon/icon.component" {
    export class IconComponent {
        class: string;
        src: string;
        svguse: string;
        icon: string;
        fontIconClass: string;
        ngOnInit(): void;
    }
}
declare module "icon/index" {
    export { IconComponent } from "icon/icon.component";
}
declare module "index" {
    import { IconComponent } from "icon/index";
    export const ICON_DIRECTIVES: typeof IconComponent[];
    export const VCL_DIRECTIVES: typeof IconComponent[][];
    export const VCL_PROVIDERS: any[];
}
