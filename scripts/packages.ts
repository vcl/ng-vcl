// tslint:disable:object-literal-key-quotes
import { copyResources, rollup } from './gulp-build-tasks';

interface Packages {
  [key: string]: {(pkg: string): string}[];
}

const PACKAGES: Packages = {
  'ng-vcl': [copyResources, rollup],
  'animations': [copyResources, rollup],
  'jss-form': [copyResources, rollup]
};

export default PACKAGES;
