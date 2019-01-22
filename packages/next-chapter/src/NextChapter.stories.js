import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import NextChapter from './';

const stories = storiesOf('Bookend', module);

stories.addDecorator(withKnobs);

stories.add('NextChapter', () => (
  <NextChapter
    href={text('Link', 'https://www.samsung.com/uk/explore/samsung-within-5/')}
    title={text('Title', 'Next: Chapter 5')}
    subtitle={text('Subtitle', 'More than a Stylus')}
    state={radios('Toggle', { Show: 'show', Hide: 'hide' }, 'show')}
    theme={radios('Theme', { Dark: 'dark', Light: 'light' }, 'dark')}
  />
));
