declare var Reflect: any;

export function defineMetadata(key: string, value, target) {
  Reflect.defineMetadata(key, value, target);
}

export function getMetadata(key: string, target) {
  return Reflect.getMetadata(key, target);
}
