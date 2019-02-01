import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  radios,
  number,
} from '@storybook/addon-knobs';
import Component from '.';

const stories = storiesOf('Bookend', module);
const imgUrls = [
  'https://images.pexels.com/photos/1842623/pexels-photo-1842623.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
];

stories.addDecorator(withKnobs);

stories.add(`${Component.name}`, () => (
  <Component
    imageList={imgUrls}
    duration={number('Duration(ms)', 3000)}
    disabled={boolean('Disabled', false)}
  />
));
