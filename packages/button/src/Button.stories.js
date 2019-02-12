import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import Button from './Button';
import { Audio } from '@ssgw/icon';

const stories = storiesOf('Bookend', module);

stories.addDecorator(withKnobs);

stories.add('Button', () => (
  <Button
    theme={radios('Theme', { Dark: 'dark', Light: 'light' }, 'dark')}
    icon={<Audio fill={'#fff'} isActive={true} />}
    disabled={boolean('Disabled', false)}
    onClick={() => {
      console.log('clicked');
    }}
  />
));
