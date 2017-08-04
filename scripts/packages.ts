// tslint:disable:object-literal-key-quotes
import { copyResources, prepareDist, ngVCLCompatibility, prepareDistCompatibility } from './gulp-build-tasks';

interface Packages {
  [key: string]: {
    next: boolean;
    tasks: {(pkg: string): string}[];
  };
}

const PACKAGES: Packages = {
  'ng-vcl': {
    next: false,
    tasks: [copyResources, ngVCLCompatibility, prepareDist, prepareDistCompatibility]
  },
  'adv-http': {
    next: false,
    tasks: [copyResources, prepareDist],
  },
  'json-editor': {
    next: false,
    tasks: [copyResources, prepareDist],
  },
  'plotly': {
    next: false,
    tasks: [copyResources, prepareDist],
  },
  'store': {
    next: false,
    tasks: [copyResources, prepareDist],
  },
  'animations': {
    next: false,
    tasks: [copyResources, prepareDist]
  },
  'jss-form': {
    next: true,
    tasks: [copyResources, prepareDist]
  },
};

export default PACKAGES;
