(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './icon/index', './icon/index'], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    var index_1 = require('./icon/index');
    __export(require('./icon/index'));
    exports.VCL_DIRECTIVES = [index_1.ICON_DIRECTIVES];
    exports.VCL_PROVIDERS = [];
});
