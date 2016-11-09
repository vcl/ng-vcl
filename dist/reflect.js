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
function getAnnotation(cls) {
    // Annotation is an array with 1 entry
    // TODO: Check if always one entry
    var clsAnnotations = Reflect.getMetadata('annotations', cls);
    if (!clsAnnotations && clsAnnotations.length < 1) {
        throw new Error('Invalid base class');
    }
    return clsAnnotations[0];
}
// export function SubComponent(annotation: Component) {
//   return (cls: Function) => {
//     const baseCls = Object.getPrototypeOf(cls.prototype).constructor;
//     const baseClsAnnotation = getAnnotation(baseCls);
//     Object.keys(baseClsAnnotation).forEach(key => {
//       if (baseClsAnnotation[key] !== undefined && annotation[key] === undefined) {
//         annotation[key] = baseClsAnnotation[key];
//       }
//     });
//     Reflect.defineMetadata('annotations', [ new Component(annotation) ], cls);
//   };
// };
var EFFECTS_METADATA_KEY = 'ng-vcl/effects';
function Effect() {
    return function (target, propertyName) {
        if (!Reflect.hasOwnMetadata(EFFECTS_METADATA_KEY, target)) {
            Reflect.defineMetadata(EFFECTS_METADATA_KEY, [], target);
        }
        var effectProperties = Reflect.getOwnMetadata(EFFECTS_METADATA_KEY, target);
        Reflect.defineMetadata(EFFECTS_METADATA_KEY, effectProperties.concat([propertyName]), target);
    };
}
exports.Effect = Effect;
function getEffectsMetadata(instance) {
    var target = Object.getPrototypeOf(instance);
    if (!Reflect.hasOwnMetadata(EFFECTS_METADATA_KEY, target)) {
        return [];
    }
    return Reflect.getOwnMetadata(EFFECTS_METADATA_KEY, target);
}
exports.getEffectsMetadata = getEffectsMetadata;
