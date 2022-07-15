#!/usr/bin/env bash

if [ -n "$(git status --porcelain)" ]; then
  echo "Please commit all of your changes before making a release!"
  exit 1
fi

set -ex

npm version "$1" --no-commit-hooks --no-git-tag-version

pushd ./lib/ng-vcl
npm version "$1" --no-commit-hooks --no-git-tag-version
popd

npm run changelog
npm run build

git add -A
git commit -m "chore: release"
git tag "v$1"
git push --all

npm run publish
