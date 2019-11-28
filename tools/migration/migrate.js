#!/usr/bin/env node
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var yargs = __importStar(require("yargs"));
var argv = yargs.options({
    m: { type: 'string', demandOption: true, alias: 'migrate', choices: ['0.5to0.6', '0.6to0.7'] },
    f: { type: 'string', demandOption: true, alias: 'folder' },
}).argv;
var root = function () {
    var folder = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        folder[_i] = arguments[_i];
    }
    return path_1.resolve.apply(void 0, __spreadArrays([process.cwd()], folder));
};
var IGNORE_DIRS = [
    'node_modules'
];
// Folders to migrate
var WORK_DIRS = Array.isArray(argv.f) ? argv.f : [argv.f];
WORK_DIRS = WORK_DIRS.map(function (folder) { return root(folder); });
// File extensions to migrate
var WORK_EXT_REGEX = /\.(sss|html|ts)$/;
function work(folder, filter, callback) {
    var files = fs_1.readdirSync(folder);
    var _loop_1 = function (i) {
        var filename = files[i];
        var filepath = path_1.join(folder, filename);
        var stat = fs_1.lstatSync(filepath);
        if (IGNORE_DIRS.some(function (ign) { return filename.includes(ign); })) {
            return "continue";
        }
        if (stat.isDirectory()) {
            work(filepath, filter, callback); // recursive
        }
        else if (filter.test(filepath)) {
            var content = fs_1.readFileSync(filepath, 'utf8');
            var ext = path_1.extname(filepath);
            var result = callback(filepath, content, ext);
            if (typeof result === 'string') {
                fs_1.writeFileSync(filepath, result);
            }
        }
    };
    for (var i = 0; i < files.length; i++) {
        _loop_1(i);
    }
}
function migrate05to06(content, ext) {
    return content.replace(/vclLabel/g, 'vclBadge')
        .replace(/vclBadge/g, 'vclBadge vclRounded') // Warning. Not repeatable
        .replace(/vclDisplayNone/g, 'vclHide')
        .replace(/vclNoPadding/g, 'vclP-0')
        .replace(/vclNoMargin/g, 'vclM-0')
        .replace(/vclLayoutHorizontal/g, 'vclHor')
        .replace(/vclLayoutVertical/g, 'vclVer')
        .replace(/vclLayoutFlex/g, 'vclFlex')
        .replace(/vclLayoutSelfStart/g, 'vclSelfStart')
        .replace(/vclLayoutSelfCenter/g, 'vclSelfCenter')
        .replace(/vclLayoutSelfEnd/g, 'vclSelfEnd')
        .replace(/vclLayoutSelfStretch/g, 'vclSelfStretch')
        .replace(/vclLayoutStartJustified/g, 'vclJustifyStart')
        .replace(/vclLayoutCenterJustified/g, 'vclJustifyCenter')
        .replace(/vclLayoutEndJustified/g, 'vclJustifyEnd')
        .replace(/vclLayoutAroundJustified/g, 'vclJustifyAround')
        .replace(/vclLayoutEvenlyJustified/g, 'vclJustifyEvenly')
        .replace(/vclLayoutJustified/g, 'vclJustifyBetween')
        .replace(/vclLayoutStart/g, 'vclStart')
        .replace(/vclLayoutCenterCenter/g, 'vclCenter')
        .replace(/vclLayoutCenter/g, 'vclCenter')
        .replace(/vclLayoutEnd/g, 'vclEnd')
        .replace(/vclLayoutHidden/g, 'vclHide')
        .replace(/vclSpan-([0-9]{1,3})p/g, function (_, x) { return "vclW-" + x + "p"; });
}
var VCL_CAMEL_CASE_REG_EX_HTML_CLASSES = /class\=\"([a-zA-Z0-9 _-]+)\"/mg;
var VCL_CAMEL_CASE_REG_EX_TS_HB = /(?<=\@HostBinding\((?:\'|\")class\.)([a-zA-Z0-9 _-]+)(?=(?:\'|\")\))/mg;
function migrate06to07(content, ext) {
    var result = content.replace(/vclHor/g, 'vclRow')
        .replace(/vclVer/g, 'vclCol')
        .replace(/vcl(M|P)([A-Z]{0,1})\-/g, function (match, type, pos) { return "vcl" + type + (pos ? pos.toLowerCase() : '') + "-"; })
        .replace(/vclVUAnagram/g, 'vclVuAnagram') // preparation for camel-case
    ;
    if (ext === '.html') {
        return result.replace(VCL_CAMEL_CASE_REG_EX_HTML_CLASSES, function (match, htmlClasses) {
            return "class=\"" + transformVCLCamelCase(htmlClasses) + "\"";
            ;
        });
    }
    else if (ext === '.ts') {
        return result.replace(VCL_CAMEL_CASE_REG_EX_TS_HB, function (match, hbClass) {
            return transformVCLCamelCase(hbClass);
        });
    }
    else if (ext === '.sss') {
        return transformVCLCamelCase(result);
    }
    else {
        throw new Error('?' + ext);
    }
}
var VCL_CAMEL_CASE_REG_EX = /vcl([A-Z](?:[a-z]|\d|\-)*)([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?/g;
function transformVCLCamelCase(content) {
    return content.replace(VCL_CAMEL_CASE_REG_EX, function (match) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var matches = args.splice(0, 7).filter(function (s) { return !!s; });
        var result = matches.map(function (s) { return s.toLowerCase(); }).join('-').trim();
        return result;
    });
}
WORK_DIRS.forEach(function (p) {
    work(p, WORK_EXT_REGEX, function (filepath, content, ext) {
        var s = content;
        if (argv.m === '0.5to0.6') {
            s = migrate05to06(s, ext);
        }
        else if (argv.m === '0.6to0.7') {
            s = migrate06to07(s, ext);
        }
        return s;
    });
});
