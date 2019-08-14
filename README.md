# SR2k.top

The GitHub pages repo as a one paged personal website. Published (or will be
published) at https://sr2k.top

## 🛠Build

Install Yarn if you haven't:

``` shell
npm i -g yarn
```

After clone the repo:

``` shell
cd /path/to/project
yarn
yarn build
```

or start a dev server:

``` shell
yarn start
```

## 🔧Linters

There are linter helper scripts configed in `package.json`:

``` shell
# lint both scripts and styles
yarn lint

# or:
yarn lint:script
yarn lint:style
```

...and fixers:

``` shell
# lint both scripts and styles
yarn fix

# or:
yarn fix:script
yarn fix:style
```

## ✏️Notes

The NPM registry of this project has been switched to [Taobao.org NPM mirror](https://npm.taobao.org/)
due to my weak connection to the official registry.

Should you need to use the official registry, consider delete `.npmrc` file located at project root.
Then delete `yarn.lock` and install again.

## ©️License

MIT
