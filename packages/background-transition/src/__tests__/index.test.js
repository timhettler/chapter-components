import React from 'react';
import Component from '../';
import renderer from 'react-test-renderer';

it(`${Component.name} renders correctly`, () => {
  const tree = renderer
    .create(
      <Component
        images={[
          {
            url:
              'https://images.pexels.com/photos/1842623/pexels-photo-1842623.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            altText: 'Image 1',
          },
          {
            url:
              'https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            altText: 'Image 2',
          },
          {
            url:
              'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            altText: 'Image 3',
          },
        ]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`${Component.name} renders correctly with no images`, () => {
  const tree = renderer.create(<Component images={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
