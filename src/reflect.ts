import { Type, AnimationEntryMetadata, Component } from '@angular/core';
declare var Reflect: any;

export function setAnimations(cls: Type<{}>, animations: AnimationEntryMetadata[]) {
  setAnnotation(cls, 'animations', animations);
}

export function setAnnotation(cls: Type<{}>, key: string, value: any) {
  const annotation = getAnnotation(cls);
  // Change metadata
  annotation[key] = value;
  // Set metadata
  Reflect.defineMetadata('annotations', [ new Component(annotation) ], cls);
}


function getAnnotation(cls: Type<{}>): Component {
  // Annotation is an array with 1 entry
  // TODO: Check if always one entry
  const clsAnnotations = Reflect.getMetadata('annotations', cls);
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

const EFFECTS_METADATA_KEY = 'ng-vcl/effects';

export function Effect(): PropertyDecorator {
  return function(target: any, propertyName: string) {
    if (!Reflect.hasOwnMetadata(EFFECTS_METADATA_KEY, target)) {
      Reflect.defineMetadata(EFFECTS_METADATA_KEY, [], target);
    }
    const effectProperties: string[] = Reflect.getOwnMetadata(EFFECTS_METADATA_KEY, target);
    Reflect.defineMetadata(EFFECTS_METADATA_KEY, [ ...effectProperties, propertyName ], target);
  };
}

export function getEffectsMetadata(instance: any): string[] {
  const target = Object.getPrototypeOf(instance);
  if (!Reflect.hasOwnMetadata(EFFECTS_METADATA_KEY, target)) {
    return [];
  }
  return Reflect.getOwnMetadata(EFFECTS_METADATA_KEY, target);
}
