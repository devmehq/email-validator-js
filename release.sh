#!/usr/bin/env bash
set -e
my_dir="$(dirname "$0")"
yarn test
yarn build
git add .
git commit -am "chose: update release" || true
npm version patch
git push
git push --tags
cp package.json README.md LICENSE.md CHANGELOG.md yarn.lock ./dist/
grep -v '"prepare":' ./dist/package.json > ./dist/temp-package.json && mv -f ./dist/temp-package.json ./dist/package.json
npm publish ./dist --ignore-scripts --access public
