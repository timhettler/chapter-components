import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import ShareGroup, { ShareLink, ReplayButton } from './';
import { Facebook, Twitter, Mail, Replay, Icon } from '@ssgw/icon';

const stories = storiesOf('Bookend', module);

stories.addDecorator(withKnobs);

stories.add('ShareGroup', () => (
  <ShareGroup
    title={text('ShareGroupTitle', 'Share On')}
    disabled={boolean('Disabled', false)}
    theme={radios('Theme', { Dark: 'dark', Light: 'light' }, 'dark')}
  >
    <ShareLink
      label="Twitter"
      icon={<Twitter />}
      url="http://smsng.co/within5ukTS"
    />
    <ShareLink
      label="Facebook"
      icon={<Facebook />}
      url="http://smsng.co/within5ukFS"
    />
    <ShareLink label="Email" icon={<Mail />} url="email.com/share" />
    <ShareLink
      label="Bug"
      icon={
        <Icon viewBox="0 0 314.01 266.89">
          <g>
            <path
              d="M310 219l-44.27-39.62a12 12 0 0 0-12.41-2.22l-3.7 1.46a138.67 138.67 0 0 0 2.64-27A135.11 135.11 0 0 0 243 102l12.28-4.84L294 131.79a12 12 0 0 0 16-17.89l-44.27-39.62a12 12 0 0 0-12.41-2.22l-21.38 8.44c-9.65-14.85-22.25-26.75-36.73-34.43l8.2-19 33.8 12.07a12 12 0 0 0 8.07-22.61L200.89.7a12 12 0 0 0-15.06 6.55L172.57 38a79.46 79.46 0 0 0-31.13 0L128.18 7.25A12 12 0 0 0 113.12.7L68.73 16.55a12 12 0 0 0 8.07 22.61l33.8-12.06 8.2 19c-14.48 7.66-27.08 19.56-36.73 34.4l-21.38-8.44a12 12 0 0 0-12.41 2.22L4 113.9a12 12 0 1 0 16 17.89l38.77-34.68L71 102a135.09 135.09 0 0 0-9.29 49.69 138.63 138.63 0 0 0 2.64 27l-3.69-1.46a12 12 0 0 0-12.41 2.22L4 219a12 12 0 0 0 16 17.89l38.76-34.68 15.25 6c16.35 35 47.38 58.63 83 58.63s66.63-23.63 83-58.63l15.26-6 38.73 34.7A12 12 0 1 0 310 219zM119.24 114.58a15.56 15.56 0 1 1 15.56 15.55 15.56 15.56 0 0 1-15.56-15.55zm31.12 93.58a15.55 15.55 0 1 1 15.55-15.56 15.56 15.56 0 0 1-15.55 15.56zM181 149.93a17.41 17.41 0 1 1 17.41 17.41A17.41 17.41 0 0 1 181 149.93z"
              data-name="Capa 1"
            />
          </g>
        </Icon>
      }
      url="email.com/share"
    />
    <ReplayButton
      label={text('Replay Text', 'Replay')}
      icon={<Replay />}
      onClick={() => console.log('replay!')}
    />
  </ShareGroup>
));
