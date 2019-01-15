import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import Component from './';

const stories = storiesOf('Bookend', module);

stories.addDecorator(withKnobs);

stories.add(`${Component.name}`, () => <Component />);
