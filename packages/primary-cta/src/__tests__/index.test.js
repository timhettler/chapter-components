import React from 'react';
import Block from '../';
import renderer from 'react-test-renderer';

it(`${Block.name} renders correctly as a button`, () => {
  const tree = renderer.create(<Block label="FOO" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`${Block.name} renders correctly as a link`, () => {
  const tree = renderer
    .create(<Block label="FOO" baseElement="a" href="http://www.rga.com/" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
