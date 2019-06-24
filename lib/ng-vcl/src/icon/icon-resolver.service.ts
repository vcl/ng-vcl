export abstract class IconResolverService {
  abstract resolve(icon: string): string | undefined;
}
