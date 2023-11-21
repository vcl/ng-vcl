# [ng-vcl](https://vcl.github.io/ng-vcl/master/)

A comprehensive library of components for Angular 14+ with [VCL](http://vcl.github.io/) based styling.

**[Browse master demo](https://vcl.github.io/ng-vcl/master)**

[![Build](https://github.com/vcl/ng-vcl/actions/workflows/build.yml/badge.svg)](https://github.com/vcl/ng-vcl/actions/workflows/build.yml)

**[Browse dev demo](https://vcl.github.io/ng-vcl/dev)**

![Build](https://github.com/vcl/ng-vcl/workflows/Build/badge.svg?branch=dev)

## Features

- Theming/styling through the [VCL](http://vcl.github.io/)
- Highly accessible HTML honoring [WAI-ARIA](https://www.w3.org/WAI/intro/aria) recommendations
- Feature complete, we want you to be able to build standard apps using 80% ng-vcl components
- Extensibility, it is possible to extend components to accommodate custom features
- Straightforward APIs
- Mix, match, extend, mash-up components

## Status

ng-vcl is production ready. We adhere to semver.

## Installation

Install via npm

```sh
npm install @vcl/ng-vcl
```

## Usage

```ts
import { VCLIconModule } from '@vcl/ng-vcl';
…
@NgModule ({....
  imports: [...,
    VCLIconModule,
  …]
})
```

## Demo / Docs

[https://vcl.github.io/ng-vcl/master](https://vcl.github.io/ng-vcl/master)

OR

```sh
git clone https://github.com/ng-vcl/ng-vcl.git
cd ng-vcl
npm install
npm start
```

Open [http://localhost:3000/](http://localhost:3000/) to see the demo browser.
