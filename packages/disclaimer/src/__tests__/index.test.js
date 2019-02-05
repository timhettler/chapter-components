import React from 'react';
import Block from '../';
import renderer from 'react-test-renderer';

it(`${Block.name} renders correctly`, () => {
  const tree = renderer.create(<Block>FOO</Block>).toJSON();
  expect(tree).toMatchSnapshot();
});
