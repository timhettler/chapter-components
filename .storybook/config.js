import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

const req = require.context('../packages', true, /\.stories\.js$/);

addDecorator(withInfo);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
