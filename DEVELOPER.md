# Developing, building, testing and deploying ng-vcl

## Developing

```
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/) to see the demo browser.

## Testing 

TODO

## Building and deploying

Tag and update package.json version
```sh
npm version patch/minor/major
```
Build the @ng-vcl in the `dist` folder
```
npm run build
```
Publish all @ng-vcl packages to npm
```
npm run publish
```

## Building and deploy the docs

Build the docs in the `docs` folder
```
npm run docs
```
Deploy `docs` folder to gh-pages branch
```
npm run deploy:docs
```
