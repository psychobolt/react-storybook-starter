# Development

## Setup

1. Install the latest [Node JS](https://nodejs.org/) and [Yarn Package Manager](https://yarnpkg.com/)
2. Run `yarn install` command in the project directory.

### Chromatic

If you cloned/forked this repo, the CI will require you to [configure GitHub secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) `CHROMATIC_PROJECT_TOKEN`. Get a token at [Chromatic](https://www.chromatic.com/start).

## Local Development

```sh
yarn start # Run storybook
yarn start-static # Build storybook and serve the dist
```

## Including NPM packages

```sh
yarn add <package-name> --dev # for dev tools, story dependencies, libraries to be bundled
yarn add <package-name> [--peer] # for external dependencies
```

> Note: All packages are installed using the [PnP strategy](https://yarnpkg.com/features/pnp) by default. To see advantages, visit the [official Yarn docs](https://yarnpkg.com/features/pnp#the-node_modules-problem). Some tools however, such as Flow, are not compatible with the PnP resolution strategy. In order to circumvent you can opt out by installing non PnP configurations as a seperate Yarn project. For example, see [Static Types](#static-types).

## Static Types

### Installing Types

```sh
yarn flow-typed-install # clean & install flow definitions from dependencies and peerDependencies
yarn flow-typed-update # downloads and updates new flow definitions
cd shared/flow-deps && yarn install <package-name> # install any node modules that flow cannot resolve with PnP strategy
```

### Creating Stubs

```
yarn flow-typed-create-stub <package-name> # create a flow-typed stub for a package name into shared/flow-typed/npm
```

> Note: Since the shared/flow-typed/npm is ignored, it is best to move the stub file so it can be committed.

### Run Flow

```sh
yarn flow # performs type checking on files
```
