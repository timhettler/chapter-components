import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import Navigation from '.';
// import { Close, Icon } from '@ssgw/icon';
import { Close, Icon } from '../../icon/src';

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
    chapterIcon={
      <Icon viewBox="0 0 50 50">
        <path d="M11 1v6H1v42h38v-6h10V8.586L41.414 1H11zm31 3.414L45.586 8H42V4.414zM37 47H3V9h27v7h7v31zm-5-36.586L35.586 14H32v-3.586zM39 41V14.586L31.414 7H13V3h27v7h7v31h-8z" />
      </Icon>
    }
    closeIcon={<Close fill="#fff" />}
    label={text('Button Text', 'All Chapters')}
    theme={radios('Theme', { Dark: 'dark', Light: 'light' }, 'dark')}
    currentChapter={text('Current Chapter', '02')}
    chapters={chapters}
  />
));
