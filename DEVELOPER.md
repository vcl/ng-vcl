# Developing, Building, Testing and Deploying

## Developing

```sh
npm run dev:demo
```

Open [http://localhost:3000/](http://localhost:3000/) to see the demo browser.

## Testing

```sh
npm run test
```

## Commit Message Guidelines

The commits must be [Commitizen](https://github.com/commitizen/cz-cli) friendly.
There is no commit message validation, so make sure your commits stuck to the guidelines before pushing.

## Building and Deploy the Docs

Building and deploying the docs is done automatically via GH Actions for the branches `dev` and `master`.

## Releasing

0. Make sure you're in a clean git state (`git status` should report "nothing to commit").
1. Bump the version numbers in both `package.json` and `lib/ng-vcl/package.json`.
2. Run `npm run changelog` to update `CHANGELOG.md`.
3. Run `npm run build` to build the library.
4. Commit with the message `chore: release`.
5. Create a tag using `git tag vX.X.X` replacing `X.X.X` with the version.
6. Push commit using `git push --all` (to include tags)
7. Publish the release `npm run publish`
