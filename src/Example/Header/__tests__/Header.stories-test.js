import React from 'react';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from '../Header.stories.js';

const testCases = Object.values(composeStories(stories)).map(Story => [
  Story.storyName,
  Story,
]);

test.each(testCases)('Renders %s story', (_storyName, Story) => {
  render(<Story />);
});
