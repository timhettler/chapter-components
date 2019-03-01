import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import ChapterTitle from './';

const stories = storiesOf('Bookend', module);

stories.addDecorator(withKnobs);

stories.add(
  'ChapterTitle',
  () => (
    <ChapterTitle
      title={text('Title', 'Chapter X')}
      subtitle={text('Subtitle', 'Limits Are<br>Meant to be<br>Crossed')}
      theme={radios('Theme', { Dark: 'dark', Light: 'light' }, 'dark')}
      state={radios(
        'State',
        {
          Pre: 'pre',
          Default: 'default',
          Expanded: 'expanded',
          Faded: 'faded',
        },
        'default'
      )}
      movement={boolean('Movement', true)}
    />
  ),
  {
    knobs: {
      escapeHTML: false,
    },
  }
);
