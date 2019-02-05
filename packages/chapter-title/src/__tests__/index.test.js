import React from 'react';
import Block from '../';
import renderer from 'react-test-renderer';

it(`${Block.name} renders correctly`, () => {
  const tree = renderer.create(<Block title="FOO" subtitle="BAR" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`${Block.name} renders correctly without title`, () => {
  const tree = renderer.create(<Block subtitle="BAR" />).toJSON();
  expect(tree).toMatchSnapshot();
});
