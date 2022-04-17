import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import Page from './index.js';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

function Template(args) {
  return <Page {...args} />;
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedOut = Template.bind({});
LoggedOut.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const signupButton = await canvas.getByRole('button', { name: /Sign up/i });
  await userEvent.click(signupButton);
  const logoutButton = await canvas.getByRole('button', { name: /Log out/i });
  await userEvent.click(logoutButton);
};

export const LoggedIn = Template.bind({});
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};
