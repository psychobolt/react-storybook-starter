import React from 'react';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

const stories = composeStories(await (import('../Button.stories.js')));
const { Primary } = stories;

const testCases = Object.values(stories).map(Story => [
  Story.storyName,
  Story,
]);

test.each(testCases)('Renders %s story with default args', (_storyName, Story) => {
  render(<Story />);
});

test('Renders Primary story with backgroundColor arg', () => {
  render(<Primary backgroundColor="#fff">Hello world</Primary>);
});
