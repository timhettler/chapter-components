import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import AudioButton from './AudioButton';
import { Audio } from '@ssgw/icon';

const stories = storiesOf('Bookend', module);

stories.addDecorator(withKnobs);

stories.add('AudioButton', () => (
  <AudioButton
    isMuted={boolean('Mute Audio', false)}
    theme={radios('Theme', { Dark: 'dark', Light: 'light' }, 'dark')}
  />
));
