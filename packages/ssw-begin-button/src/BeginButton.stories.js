import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import BeginButton from './';

const stories = storiesOf('BeginButton', module);

stories.addDecorator(withKnobs);

stories.add('default', () => (
  <BeginButton
    label={text('Label', 'Begin')}
    theme={radios('Theme', { Dark: 'dark', Light: 'light' }, 'dark')}
    disabled={boolean('Disabled', false)}
  />
));
