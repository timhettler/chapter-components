import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import Component from '.';

const stories = storiesOf('Bookend', module);
const imgUrls = [
  {
    url:
      'https://images.pexels.com/photos/1842623/pexels-photo-1842623.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    altText: 'image 1',
  },
  {
    url:
      'https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    altText: 'image 2',
  },
  {
    url:
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    altText: 'image 3',
  },
];

stories.addDecorator(withKnobs);

stories.add(`${Component.name}`, () => (
  <div style={{ width: '300px', height: '250px' }}>
    <Component
      images={imgUrls}
      duration={number('Duration', 3000)}
      disabled={boolean('Disabled', false)}
      hidden={boolean('Hidden', false)}
    />
  </div>
));
