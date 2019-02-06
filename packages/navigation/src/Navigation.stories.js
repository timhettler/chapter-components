import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import Navigation from '.';
import { Close, Icon } from '@ssgw/icon';

const stories = storiesOf('Bookend', module);

const chapters = [
  {
    id: '01',
    chapterName: 'Chapter 1',
    chapterTitle: 'Our Philosophy',
    url: 'https://www.samsung.com/uk/explore/samsung-within-1',
  },
  {
    id: '02',
    chapterName: 'Chapter 2',
    chapterTitle: "What's in a Name",
    url: 'https://www.samsung.com/uk/explore/samsung-within-2',
  },
  {
    id: '03',
    chapterName: 'Chapter 3',
    chapterTitle: 'Extreme Conditions',
    url: 'https://www.samsung.com/uk/explore/samsung-within-3',
  },
  {
    id: '04',
    chapterName: 'Chapter 4',
    chapterTitle: "A Phone Built on Can't",
    url: 'https://www.samsung.com/uk/explore/samsung-within-4',
  },
  {
    id: '05',
    chapterName: 'Chapter 1',
    chapterTitle: 'Our Philosophy',
    url: 'https://www.samsung.com/uk/explore/samsung-within-1',
  },
  {
    id: '06',
    chapterName: 'Chapter 2',
    chapterTitle: "What's in a Name",
    url: 'https://www.samsung.com/uk/explore/samsung-within-2',
  },
  {
    id: '07',
    chapterName: 'Chapter 3',
    chapterTitle: 'Extreme Conditions',
    url: 'https://www.samsung.com/uk/explore/samsung-within-3',
  },
  {
    id: '08',
    chapterName: 'Chapter 4',
    chapterTitle: "A Phone Built on Can't",
    url: 'https://www.samsung.com/uk/explore/samsung-within-4',
  },
  {
    id: '09',
    chapterName: 'Chapter 1',
    chapterTitle: 'Our Philosophy',
    url: 'https://www.samsung.com/uk/explore/samsung-within-1',
  },
  {
    id: '10',
    chapterName: 'Chapter 2',
    chapterTitle: "What's in a Name",
    url: 'https://www.samsung.com/uk/explore/samsung-within-2',
  },
  {
    id: '11',
    chapterName: 'Chapter 3',
    chapterTitle: 'Extreme Conditions',
    url: 'https://www.samsung.com/uk/explore/samsung-within-3',
  },
  {
    id: '12',
    chapterName: 'Chapter 4',
    chapterTitle: "A Phone Built on Can't",
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
    />
  </div>
));
