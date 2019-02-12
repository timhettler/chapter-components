import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import AudioButton from './AudioButton';

const stories = storiesOf('Bookend', module);

stories.addDecorator(withKnobs);

stories.add('AudioButton', () => (
  <AudioButton
    disabled={boolean('Disabled', false)}
    isMuted={boolean('Mute Audio', false)}
    theme={radios('Theme', { Dark: 'dark', Light: 'light' }, 'dark')}
    onClick={() => {}}
  />
));
