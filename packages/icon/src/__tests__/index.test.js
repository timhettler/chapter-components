import React from 'react';
import { Icon } from '../';
import renderer from 'react-test-renderer';

it(`Icon renders correctly`, () => {
  const tree = renderer.create(<Icon />).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Icon renders correctly with width`, () => {
  const tree = renderer.create(<Icon width="100" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Icon renders correctly with height`, () => {
  const tree = renderer.create(<Icon height="100" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Icon renders correctly passes props`, () => {
  const tree = renderer.create(<Icon viewport="FOO" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Icon renders correctly passes children`, () => {
  const tree = renderer.create(<Icon>FOO</Icon>).toJSON();
  expect(tree).toMatchSnapshot();
});
