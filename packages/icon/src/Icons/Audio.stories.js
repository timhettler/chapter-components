import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';
import Component from './Audio';

const stories = storiesOf('Icons', module);

stories.addDecorator(withKnobs);

stories.add(`${Component.name}`, () => (
  <Component
    width={text('Width', '100px')}
    height={text('Height', '')}
    fill={color('Fill', '#000')}
    isMuted={boolean('Mute Audio', false)}
  />
));
