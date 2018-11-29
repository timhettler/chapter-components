import React from 'react';
import { storiesOf } from '@storybook/react';
import ChapterTitle from './';

storiesOf('ChapterTitle', module)
  .add('dark theme', () => (
    <ChapterTitle
      title="Chapter X"
      subtitle="Limits Are<br>Meant to be<br>Crossed"
    />
  ))
  .add('light theme', () => (
    <ChapterTitle
      title="Chapter X"
      subtitle="Limits Are<br>Meant to be<br>Crossed"
      theme="light"
    />
  ));
