# React Storybook Starter

[![Main workflow](https://github.com/psychobolt/react-storybook-starter/actions/workflows/main.yml/badge.svg)](https://github.com/psychobolt/react-storybook-starter/actions/workflows/main.yml)
[![codecov](https://codecov.io/gh/psychobolt/react-storybook-starter/branch/main/graph/badge.svg)](https://codecov.io/gh/psychobolt/react-storybook-starter/tree/main/src)

Boilerplate for building a [React](https://reactjs.org/) [Storybook](https://storybook.js.org/) project

## Included

- Yarn [Plug'n'Play](https://yarnpkg.com/features/pnp) support
- [ES Module](https://nodejs.org/api/esm.html) system support
- [styled-components](https://www.styled-components.com/) with [default](https://www.styled-components.com/docs/tooling#stylelint) [stylelint](https://stylelint.io/) support
- Type checking with [Flow](https://flow.org)
- Test Automation
    - Visual testing with [Chromatic](https://www.chromatic.com/)
    - Interactive testing with [@storybook/addon-interactions](https://www.npmjs.com/package/@storybook/addon-interactions)
    - Run component and story tests with [Jest](https://jestjs.io/) and included libraries:
        - [React Testing Library](https://testing-library.com/docs/react-testing-library)
        - [@storybook/testing-react](https://www.npmjs.com/package/testing-react)
    - Code Coverage reporting with [Codecov](https://codecov.io/)
- JS rule style checking with [ESLint](http://eslint.org/) using [AirBnb config](https://www.npmjs.com/package/eslint-config-airbnb) and plugins:
    - [Storybook](https://www.npmjs.com/package/eslint-plugin-storybook)
    - [MDX](https://www.npmjs.com/package/eslint-plugin-mdx)
    - [Flowtype](https://www.npmjs.com/package/eslint-plugin-flowtype)
- Continuous integration with [GitHub Actions](https://github.com/features/actions)

## Development Guide

Please see [DEVELOPMENT.md](DEVELOPMENT.md)
