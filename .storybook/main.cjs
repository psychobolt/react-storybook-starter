const webpackConfig = require('./webpack.config.cjs');

module.exports = {
  stories: [
    '../src/README.mdx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.js',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  features: {
    babelModeV7: true,
  },
  // See https://github.com/storybookjs/storybook/blob/master/addons/docs/src/frameworks/common/preset.ts, to configure
  webpackFinal: config => ({
    ...config,
    ...webpackConfig,
    module: {
      ...config.module,
      ...webpackConfig.module,
      rules: [
        ...config.module.rules.map(rule => {
          const { test, exclude } = rule;
          if (test.test('.md')) {
            return {};
          }
          if (exclude && exclude.test('.stories.mdx')) {
            return { ...rule, test: /\.md$/, resourceQuery: { not: [/raw/] } };
          }
          if (test.test('.stories.mdx')) {
            return { ...rule, test: /\.mdx$/ };
          }
          if (test.test('.js')) {
            return {
              ...rule,
              resourceQuery: { not: [/raw/] },
            };
          }
          return rule;
        }),
        ...webpackConfig.module.rules,
      ],
    },
  }),
};
