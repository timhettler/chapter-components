import React from 'react';
import Component from '../';
import renderer from 'react-test-renderer';

it(`${Component.name} renders correctly`, () => {
  const tree = renderer.create(<Component>FOO</Component>).toJSON();
  expect(tree).toMatchSnapshot();
});
