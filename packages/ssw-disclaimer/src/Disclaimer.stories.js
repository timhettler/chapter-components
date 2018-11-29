import React from 'react';
import { storiesOf } from '@storybook/react';
import Disclaimer from './';

storiesOf('Disclaimer', module)
  .add('dark theme', () => (
    <Disclaimer
      copy="Display quality depends on hardware, browser, and connection speed."
      show="true"
    />
  ))
  .add('light theme', () => (
    <Disclaimer
      copy="Display quality depends on hardware, browser, and connection speed."
      show="true"
      theme="light"
    />
  ));
