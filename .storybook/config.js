import { configure, addParameters, addDecorator } from '@storybook/react';
import { create } from '@storybook/theming';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';

const req = require.context('../packages', true, /\.stories\.js$/);

addDecorator(withInfo);

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Chapter Components',
      brandUrl: 'https://gitlab.ny.rga.com/samsung-within/chapter-components',
    }),
  },
  backgrounds: [
    { name: 'light', value: '#ffffff', default: true },
    { name: 'dark', value: '#000000' },
  ],
});

addDecorator(centered);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
