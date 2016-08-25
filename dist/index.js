'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _angular_core = require('@angular/core');

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

exports.IconService = class IconService {
    fa(icon) {
        return `fa fa-${icon}`;
    }
    lookup(icon) {
        let className = '';
        if (typeof icon === 'string' && icon) {
            let iconName = icon;
            let providerName;
            let iconParts = iconName.split(':');
            if (iconParts.length > 1) {
                providerName = iconParts[0];
                iconName = iconParts[1];
            }
            else {
                providerName = 'fa';
            }
            if (!this[providerName]) {
                throw new Error('Invalid icon provider: ' + providerName);
            }
            return this[providerName](iconName);
        }
        return null;
    }
};
exports.IconService = __decorate([
    _angular_core.Injectable()
], exports.IconService);

// @NgModule({
//   imports: [
//     VCLIconModule,
//     VCLIcogramModule,
//     VCLButtonModule,
//     VCLLayerModule,
//     VCLTetherModule,
//     VCLPopoverModule,
//   ],
//   exports: [
//     VCLIconModule,
//     VCLIcogramModule,
//     VCLButtonModule,
//     VCLLayerModule,
//     VCLTetherModule,
//     VCLPopoverModule,
//   ],
//   providers: [
//     // IconService,
//     OverlayManagerService
//   ],
// })
// export class VCLModule { }