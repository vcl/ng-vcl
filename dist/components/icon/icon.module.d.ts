import { ModuleWithProviders } from '@angular/core';
import { IconComponent } from './icon.component';
import { IconService } from './icon.service';
export { IconComponent, IconService };
export interface IconConfig {
    service?: any;
}
export declare class VCLIconModule {
    static forRoot(config: IconConfig): ModuleWithProviders;
}
