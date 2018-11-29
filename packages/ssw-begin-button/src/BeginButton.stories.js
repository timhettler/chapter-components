import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import BeginButton from './';

const stories = storiesOf('Bookend', module);

stories.addDecorator(withKnobs);

stories.add('BeginButton', () => (
  <BeginButton
    label={text('Label', 'Begin')}
    theme={radios('Theme', { Dark: 'dark', Light: 'light' }, 'dark')}
    disabled={boolean('Disabled', false)}
  />
));
