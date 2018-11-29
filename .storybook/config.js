import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';

const req = require.context('../packages', true, /\.stories\.js$/);

addDecorator(withInfo);

addDecorator(
  withOptions({
    name: 'Chapter Components',
    url: 'https://gitlab.ny.rga.com/samsung-within/chapter-components',
  })
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
