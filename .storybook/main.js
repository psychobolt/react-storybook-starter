module.exports = {
  stories: [
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
};
