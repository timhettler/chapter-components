import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import Navigation from '.';

const stories = storiesOf('Bookend', module);

const chapters = [
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
  {
    id: '03',
    chapter: 'Chapter 3',
    title: 'Extreme Conditions',
    url: 'https://www.samsung.com/uk/explore/samsung-within-3',
  },
  {
    id: '04',
    chapter: 'Chapter 4',
    title: "A Phone Built on Can't",
    url: 'https://www.samsung.com/uk/explore/samsung-within-4',
  },
  {
    id: '05',
    chapter: 'Chapter 1',
    title: 'Our Philosophy',
    url: 'https://www.samsung.com/uk/explore/samsung-within-1',
  },
  {
    id: '06',
    chapter: 'Chapter 2',
    title: "What's in a Name",
    url: 'https://www.samsung.com/uk/explore/samsung-within-2',
  },
  {
    id: '07',
    chapter: 'Chapter 3',
    title: 'Extreme Conditions',
    url: 'https://www.samsung.com/uk/explore/samsung-within-3',
  },
  {
    id: '08',
    chapter: 'Chapter 4',
    title: "A Phone Built on Can't",
    url: 'https://www.samsung.com/uk/explore/samsung-within-4',
  },
  {
    id: '09',
    chapter: 'Chapter 1',
    title: 'Our Philosophy',
    url: 'https://www.samsung.com/uk/explore/samsung-within-1',
  },
  {
    id: '10',
    chapter: 'Chapter 2',
    title: "What's in a Name",
    url: 'https://www.samsung.com/uk/explore/samsung-within-2',
  },
  {
    id: '11',
    chapter: 'Chapter 3',
    title: 'Extreme Conditions',
    url: 'https://www.samsung.com/uk/explore/samsung-within-3',
  },
  {
    id: '12',
    chapter: 'Chapter 4',
    title: "A Phone Built on Can't",
    url: 'https://www.samsung.com/uk/explore/samsung-within-4',
  },
];

stories.addDecorator(withKnobs);

stories.add('Navigation', () => (
  <div style={{ height: '100vh', width: '100%' }}>
    <Navigation
      label={text('Button Text', 'All Chapters')}
      theme={radios('Theme', { Dark: 'dark', Light: 'light' }, 'dark')}
      currentChapter={text('Current Chapter', '02')}
      accessibility={{
        open: 'Open chapters menu',
        close: 'Close chapters menu',
      }}
      chapters={chapters}
      cta={text('CTA Text', 'More Coming Soon')}
    />
  </div>
));
