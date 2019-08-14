#!/bin/bash

TARGET="./build/"

rm -rf $TARGET
git clone git@github.com:SR2k/sr2k.github.io $TARGET

yarn build

cd $TARGET

cp ../CNAME ./
echo '# SR2k.top' >> README.md
echo '' >> README.md
echo 'Switch to `v2/react` branch to learn more' >> README.md

git add -A
git commit -m 'deploy'
git push origin master
