import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import ShareGroup from './';

const stories = storiesOf('Bookend', module);

const tracking = {
  shareFacebook: {
    'data-omni-type': 'microsite_sns',
    'data-omni': 'share:facebook',
  },
  shareTwitter: {
    'data-omni-type': 'microsite_sns',
    'data-omni': 'share:twitter',
  },
  shareEmail: {
    'data-omni-type': 'microsite_sns',
    'data-omni': 'share:email',
  },
  replay: {
    'data-omni-type': 'microsite_contentinter',
    'data-omni': 'brand hub topic landing:more than a stylus_replay',
  },
};

stories.addDecorator(withKnobs);

stories.add(`ShareGroup`, () => (
  <ShareGroup
    replay={text('ReplayText', 'Replay')}
    shareOn={text('ShareText', 'Share On')}
    fb={text('FB:Name', 'Facebook')}
    tw={text('TWT:Name', 'Twitter')}
    mail={text('Email:Name', 'Email')}
    theme={radios('Theme', { Dark: 'dark', Light: 'light' }, 'dark')}
    facebookLink={text('FB:Link', 'http://smsng.co/within5ukFS')}
    twitterLink={text('TW:Link', 'http://smsng.co/within5ukTS')}
    twitterHashtags={text('TW:Hashtags', 'DoWhatYouCant')}
    twitterText={text('TW:Text', 'Do what you cant with samsung galaxy.')}
    emailSubject={text(
      'Email:Subject',
      'Do what you cant with samsung galaxy.'
    )}
    trackingInfo={tracking}
    emailBody={text('Email:Subject', 'Do what you cant with samsung galaxy.')}
  />
));
