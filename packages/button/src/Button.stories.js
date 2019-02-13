import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import Button from './Button';
import { Mail } from '@ssgw/icon';

const stories = storiesOf('Bookend', module);

stories.addDecorator(withKnobs);

stories.add('Button', () => (
  <Button
    theme={radios('Theme', { Dark: 'dark', Light: 'light' }, 'dark')}
    disabled={boolean('Disabled', false)}
    hidden={boolean('Hidden', false)}
  >
    <Mail />
  </Button>
));
