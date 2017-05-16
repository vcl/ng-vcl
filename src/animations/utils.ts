import { Type, AnimationEntryMetadata, Component } from '@angular/core';
declare var Reflect: any;

export function getAnnotation(cls: Type<{}>): Component | undefined {
  // Annotation is an array with 1 entry
  // TODO: Check if always one entry
  const clsAnnotations = Reflect.getMetadata('annotations', cls);
  return clsAnnotations && clsAnnotations.length >= 1 ? clsAnnotations[0] : undefined;
}

export function setAnimations(cls: Type<{}>, animations: AnimationEntryMetadata[]) {
  const annotation = getAnnotation(cls);
  // Change metadata
  if (annotation) {
    annotation['animations'] = animations;
    // Set metadata
    Reflect.defineMetadata('annotations', [ new Component(annotation) ], cls);
  } else {
    const warn = console.warn || console.log;
    warn.call(console, `Cannot set animation. Invalid ng class: `, cls);
  }
}
