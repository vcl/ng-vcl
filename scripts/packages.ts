import { copyResources, prepareDist, ngVCLcompatibility } from './gulp-build-tasks';

const PACKAGES: {[key: string]: {(pkg: string): string}[]} = {
  'ng-vcl': [copyResources, ngVCLcompatibility, prepareDist],
  'adv-http': [copyResources, prepareDist],
  'json-editor': [copyResources, prepareDist],
  'jss-form': [copyResources, prepareDist],
  'plotly': [copyResources, prepareDist],
  'store': [copyResources, prepareDist],
  'ng-vcl-compatibility': [prepareDist]
};

export default PACKAGES;
