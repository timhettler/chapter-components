import React from 'react';
import Component from '../';
import renderer from 'react-test-renderer';

it(`${Component.name} renders correctly`, () => {
  const tree = renderer
    .create(
      <Component
        chapters={[
          {
            id: '01',
            chapter: 'Chapter 1',
            title: 'Our Philosophy',
            url: 'https://www.samsung.com/uk/explore/samsung-within-1',
          },
          {
            id: '02',
            chapter: 'Chapter 2',
            title: "What's in a Name",
            url: 'https://www.samsung.com/uk/explore/samsung-within-2',
          },
        ]}
        accessibility={{
          open: 'foo',
          close: 'bar',
        }}
        label={'All chapters'}
        currentChapter={'01'}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
