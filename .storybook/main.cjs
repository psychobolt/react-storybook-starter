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
    module: {
      ...config.module,
      rules: [
        ...config.module.rules.map(rule => {
          const { test, exclude } = rule;
          if (test.test('.md')) {
            return {};
          }
          if (exclude && exclude.test('.stories.mdx')) {
            return { ...rule, test: /\.md$/ };
          }
          if (test.test('.stories.mdx')) {
            return { ...rule, test: /\.mdx$/ };
          }
          return rule;
        }),
      ],
    },
  }),
};
