#!/usr/bin/env bash
set -e
my_dir="$(dirname "$0")"
yarn test
yarn build
git add .
git commit -am "chose: update release"
npm version patch
git push
git push --tags
