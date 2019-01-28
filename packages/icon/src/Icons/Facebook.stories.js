import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, color, select } from '@storybook/addon-knobs';
import Component from './Facebook';

const stories = storiesOf('Icons', module);

stories.addDecorator(withKnobs);

stories.add(`${Component.name}`, () => (
  <Component
    width={text('Width', '100px')}
    height={text('Height', '')}
    fill={color('Fill', '#000')}
  />
));
