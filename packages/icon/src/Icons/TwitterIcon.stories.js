import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color } from '@storybook/addon-knobs';
import Component from './TwitterIcon';

const stories = storiesOf('Icons', module);

stories.addDecorator(withKnobs);

stories.add(`${Component.name}`, () => (
  <Component width={text('Width', '200px')} fill={color('Fill', '#000000')}>
    <path
      d="M79,203.6c94.3,0,145.9-78.2,145.9-145.9,0-2.2,0-4.4-.1-6.6a104.47,104.47,0,0,0,25.6-26.6,103.93,103.93,0,0,1-29.5,8.1,51.59,51.59,0,0,0,22.6-28.4,102,102,0,0,1-32.6,12.4,51.29,51.29,0,0,0-88.7,35.1,56.68,56.68,0,0,0,1.3,11.7A145.61,145.61,0,0,1,17.79,9.8a51.48,51.48,0,0,0,15.9,68.5,51.87,51.87,0,0,1-23.2-6.4v.7a51.39,51.39,0,0,0,41.1,50.3,51.58,51.58,0,0,1-23.1.9,51.28,51.28,0,0,0,47.9,35.6,102.85,102.85,0,0,1-63.7,22,98.68,98.68,0,0,1-12.2-.7A145.86,145.86,0,0,0,79,203.6"
      transform="translate(-0.49 -0.4)"
    />
  </Component>
));
