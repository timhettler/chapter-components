import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  radios,
  select,
} from '@storybook/addon-knobs';
import PrimaryCta from './';

const stories = storiesOf('Bookend', module);

stories.addDecorator(withKnobs);

stories.add('PrimaryCta', () => (
  <PrimaryCta
    baseElement={select(
      'Base Element',
      { Button: 'button', Link: 'a' },
      'button'
    )}
    label={text('Label', 'BEGIN')}
    theme={radios('Theme', { Dark: 'dark', Light: 'light' }, 'dark')}
    disabled={boolean('Disabled', false)}
    hidden={boolean('Hidden', false)}
    movement={boolean('Movement', true)}
    href="http://www.rga.com/"
  />
));
