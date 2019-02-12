import React from 'react';
import Component from '../';
import renderer from 'react-test-renderer';

it(`${Component.name} renders correctly when muted`, () => {
  const tree = renderer.create(<Component isMuted={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`${Component.name} renders correctly when unmuted`, () => {
  const tree = renderer.create(<Component isMuted={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});
