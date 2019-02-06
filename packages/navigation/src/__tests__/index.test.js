import React from 'react';
import Component from '../';
import renderer from 'react-test-renderer';

it(`${Component.name} renders correctly`, () => {
  const tree = renderer
    .create(
      <Component
        chapters={[]}
        accessibility={{}}
        label={'All chapters'}
        currentChapter={'04'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
