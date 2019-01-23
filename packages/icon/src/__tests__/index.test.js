import React from 'react';
import { Chevron } from '../';
import renderer from 'react-test-renderer';

it(`Chevron renders correctly`, () => {
  const tree = renderer.create(<Chevron />).toJSON();
  expect(tree).toMatchSnapshot();
});
