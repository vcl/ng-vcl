import { copyResources, prepareDist, ngVCLCompatibility, prepareDistCompatibility } from './gulp-build-tasks';

const PACKAGES: {[key: string]: {(pkg: string): string}[]} = {
  'ng-vcl': [copyResources, ngVCLCompatibility, prepareDist, prepareDistCompatibility],
  'adv-http': [copyResources, prepareDist],
  'json-editor': [copyResources, prepareDist],
  'plotly': [copyResources, prepareDist],
  'store': [copyResources, prepareDist]
};

export default PACKAGES;
