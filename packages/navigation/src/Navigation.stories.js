import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import Navigation from '.';

const stories = storiesOf('Bookend', module);

const chapters = [
  {
    id: '01',
    enabled: true,
    chapterName: 'Chapter 1',
    chapterTitle: 'Our Philosophy',
    url: 'https://www.samsung.com/uk/explore/samsung-within-1',
  },
  {
    id: '02',
    enabled: true,
    chapterName: 'Chapter 2',
    chapterTitle: "What's in a Name",
    url: 'https://www.samsung.com/uk/explore/samsung-within-2',
  },
  {
    id: '03',
    enabled: true,
    chapterName: 'Chapter 3',
    chapterTitle: 'Extreme Conditions',
    url: 'https://www.samsung.com/uk/explore/samsung-within-3',
  },
  {
    id: '04',
    enabled: true,
    chapterName: 'Chapter 4',
    chapterTitle: "A Phone Built on Can't",
    url: 'https://www.samsung.com/uk/explore/samsung-within-4',
  },
];

stories.addDecorator(withKnobs);

stories.add('Navigation', () => (
  <Navigation
    disable={boolean('Disable', false)}
    chapterIcon={''}
    closeIcon={''}
    label={text('Button Text', 'All Chapters')}
    theme={radios(
      'Theme',
      { Dark: 'dark', Grey: 'grey', Light: 'light' },
      'dark'
    )}
    chapters={chapters}
  />
));
