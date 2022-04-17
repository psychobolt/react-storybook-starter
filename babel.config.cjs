const path = require('path');

module.exports = {
  sourceType: 'unambiguous',
  presets: [
    [
      '@babel/preset-env',
      {
        shippedProposals: true,
        loose: true,
        targets: process.env.BABEL_ENV === 'test' ? { node: 'current' } : {},
      },
    ],
    '@babel/preset-react',
    '@babel/preset-flow',
  ],
  plugins: [
    '@babel/plugin-transform-shorthand-properties',
    '@babel/plugin-transform-block-scoping',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    [
      '@babel/plugin-proposal-private-property-in-object',
      {
        loose: true,
      },
    ],
    [
      '@babel/plugin-proposal-private-methods',
      {
        loose: true,
      },
    ],
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-proposal-object-rest-spread',
      {
        loose: true,
        useBuiltIns: true,
      },
    ],
    '@babel/plugin-transform-classes',
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-parameters',
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-transform-spread',
    '@babel/plugin-transform-for-of',
    'babel-plugin-macros',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    [
      'babel-plugin-polyfill-corejs3',
      {
        method: 'usage-global',
        absoluteImports: 'core-js',
        version: '3.21.1',
      },
    ],
    'babel-plugin-named-exports-order',
    [
      'module-resolver',
      {
        root: ['./'],
        cwd: './',
        alias: {
          ...(
            process.env.BABEL_ENV === 'test'
              ? {
                'styled-components': path.resolve('cjs', 'styled-components.cjs'), // See: https://github.com/styled-components/styled-components/issues/3601
              }
              : {}
          ),
        },
      },
    ],
  ],
};
