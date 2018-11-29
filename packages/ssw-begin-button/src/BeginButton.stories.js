import React from 'react';
import { storiesOf } from '@storybook/react';
import BeginButton from './';

storiesOf('BeginButton', module)
  .add('dark theme', () => <BeginButton label="Begin" />)
  .add('light theme', () => <BeginButton label="Begin" theme="light" />);
