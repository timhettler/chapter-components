import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import Disclaimer from './';

const stories = storiesOf('Bookend', module);

stories.addDecorator(withKnobs);

stories.add('Disclaimer', () => (
  <Disclaimer
    copy={text(
      'Copy',
      'Display quality depends on hardware, browser, and connection speed.'
    )}
    theme={radios('Theme', { Dark: 'dark', Light: 'light' }, 'dark')}
    disabled={boolean('Disabled', false)}
  />
));
