(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './icon.component.ts'], factory);
    }
})(function (require, exports) {
    "use strict";
    var icon_component_ts_1 = require('./icon.component.ts');
    exports.ICON_DIRECTIVES = [icon_component_ts_1.IconComponent];
});
