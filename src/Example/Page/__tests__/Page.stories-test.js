import React from 'react';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from '../Page.stories.js';

const testCases = Object.values(composeStories(stories)).map(Story => [
  Story.storyName,
  Story,
]);

test.each(testCases)('Renders %s story with play function', async (_storyName, Story) => {
  const { container } = render(<Story />);
  await Story.play({ canvasElement: container });
});
