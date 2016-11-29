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

