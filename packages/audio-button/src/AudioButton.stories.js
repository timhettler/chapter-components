import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import AudioButton from './AudioButton';
import { Audio } from '@ssgw/icon';

const stories = storiesOf('Bookend', module);

stories.addDecorator(withKnobs);

stories.add('AudioButton', () => (
  <AudioButton
    data={{
      accessibility: { on: 'Audio On', off: 'Audio Off' },
      tracking: {
        on: {
          'data-omni-type': 'microsite_contentinter',
          'data-omni': 'brand hub topic landing:a phone built on cant_audio_on',
        },
        off: {
          'data-omni-type': 'microsite_contentinter',
          'data-omni':
            'brand hub topic landing:a phone built on cant_audio_off',
        },
      },
    }}
    render={state => <Audio fill={'#fff'} isActive={state} />}
    disabled={boolean('Disabled', false)}
    isActive={true}
    theme={radios('Theme', { Dark: 'dark', Light: 'light' }, 'dark')}
    cb={() => {
      console.log('clicked');
    }}
  />
));
