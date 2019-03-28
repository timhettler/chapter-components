import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import NextChapter from './';

const stories = storiesOf('Bookend', module);

stories.addDecorator(withKnobs);

stories.add('NextChapter', () => (
  <div style={{ width: '314px' }}>
    <NextChapter
      href={text(
        'Link',
        'https://www.samsung.com/uk/explore/samsung-within-5/'
      )}
      title={text('Title', 'Next: Chapter 5')}
      subtitle={text('Subtitle', 'More than a Stylus')}
      hidden={boolean('Hidden', false)}
      enabled={boolean('enabled', true)}
      theme={radios('Theme', { Dark: 'dark', Light: 'light' }, 'dark')}
      imgSrc={text(
        'Image Url',
        'https://www.foot.com/wp-content/uploads/2017/03/placeholder.gif'
      )}
    />
  </div>
));
