import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import ChapterTitle from './';

const stories = storiesOf('ChapterTitle', module);

stories.addDecorator(withKnobs);

stories.add(
  'default',
  () => (
    <ChapterTitle
      title={text('Title', 'Chapter X')}
      subtitle={text('Subtitle', 'Limits Are<br>Meant to be<br>Crossed')}
      theme={radios('Theme', { Dark: 'dark', Light: 'light' }, 'dark')}
      disabled={boolean('Disabled', false)}
      expanded={boolean('Expanded', false)}
      faded={boolean('faded', false)}
    />
  ),
  {
    knobs: {
      escapeHTML: false,
    },
  }
);
