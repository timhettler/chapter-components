import React from 'react';
import Component from '../';
import renderer from 'react-test-renderer';

const props = {
  chapters: [
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
  ],
  accessibility: {
    open: 'foo',
    close: 'bar',
  },
  label: 'All Chapters',
  currentChapter: '01',
};

it(`${Component.name} renders correctly`, () => {
  const tree = renderer.create(<Component {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`${Component.name} renders correctly with CTA`, () => {
  const tree = renderer.create(<Component {...props} cta={'BAZZ'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`${Component.name} renders correctly when active`, () => {
  const tree = renderer
    .create(<Component {...props} isActive={true} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`${Component.name} renders correctly with audio`, () => {
  const tree = renderer
    .create(
      <Component
        {...props}
        audio={{
          ['aria-label']: 'Toggle Audio',
          ['data-omni-type']: 'microsite_contentinter',
          ['data-omni']: 'brand hub topic landing:more than a stylus_audio_off',
          ['aria-pressed']: true,
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
