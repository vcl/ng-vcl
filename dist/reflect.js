"use strict";
var core_1 = require('@angular/core');
function setAnimations(cls, animations) {
    setAnnotation(cls, 'animations', animations);
}
exports.setAnimations = setAnimations;
function setAnnotation(cls, key, value) {
    var annotation = getAnnotation(cls);
    // Change metadata
    annotation[key] = value;
    // Set metadata
    Reflect.defineMetadata('annotations', [new core_1.Component(annotation)], cls);
}
exports.setAnnotation = setAnnotation;
function SubComponent(annotation) {
    return function (cls) {
        var baseCls = Object.getPrototypeOf(cls.prototype).constructor;
        var baseClsAnnotation = getAnnotation(baseCls);
        Object.keys(baseClsAnnotation).forEach(function (key) {
            if (baseClsAnnotation[key] !== undefined && annotation[key] === undefined) {
                annotation[key] = baseClsAnnotation[key];
            }
        });
        Reflect.defineMetadata('annotations', [new core_1.Component(annotation)], cls);
    };
}
exports.SubComponent = SubComponent;
;
function getAnnotation(cls) {
    // Annotation is an array with 1 entry
    // TODO: Check if always one entry
    var clsAnnotations = Reflect.getMetadata('annotations', cls);
    if (!clsAnnotations && clsAnnotations.length < 1) {
        throw new Error('Invalid base class');
    }
    return clsAnnotations[0];
}
