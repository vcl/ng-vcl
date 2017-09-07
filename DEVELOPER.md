# Developing, building, testing and deploying ng-vcl

## Developing

```
npm run dev {arg}
```
{arg} can be `ng-vcl`, `store` or `plotly`


Open [http://localhost:3000/](http://localhost:3000/) to see the demo browser.

## Testing 

TODO

## Building and deploying

Tag and update package.json version
```sh
npm version patch/minor/major
```
Build the @ng-vcl in the `dist` folder
```sh
npm run build
```
Publish all @ng-vcl packages to npm
```sh
npm run publish
```

Push the release commit and tag afterwards
```sh
git push && git push --tags 
```

## Building and deploy the docs

Build the docs in the `docs` folder
```
npm run docs
```
Deploy `docs` folder to gh-pages branch
```
npm run docs:deploy
```
