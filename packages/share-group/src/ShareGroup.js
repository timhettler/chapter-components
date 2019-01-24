import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ShareGroup.scss';

const cx = classNames.bind(styles);

const getShareLink = (share, data) => {
  let link;
  if (share === 'Facebook') {
    link = `http://www.facebook.com/sharer?u=${encodeURIComponent(data.url)}`;
    return link;
  }

  if (share === 'Twitter') {
    link = 'https://twitter.com/intent/tweet?';
    Object.keys(data).forEach(key => {
      const isKey = key === 'text' || key === 'hashtags';
      if (data[key]) {
        link += `${key}=${isKey ? encodeURIComponent(data[key]) : data[key]}&`;
      }
    });
    return link;
  }

  if (share === 'Email') {
    link = `mailto:?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(data.body)}`;
    return link;
  }
};

const getTracking = (info, share) => {
  return info ? info[`share${share}`] || info[share] : null;
};

class ShareLink extends PureComponent {
  render() {
    const { tracking, ...rest } = this.props;
    return (
      <a className={cx('shareLink')} {...tracking} {...rest}>
        <span className={cx('shareLink__border')} />
        <span className={cx('shareLink__border')} />
        <span className={cx('shareLink__icon', 'shareLink__icon--primary')}>
          X
        </span>
        <span className={cx('shareLink__icon', 'shareLink__icon--secondary')}>
          X
        </span>
      </a>
    );
  }
}

class ReplayButton extends PureComponent {
  render() {
    const { replay, tracking, ...rest } = this.props;
    return (
      <button className={cx('replayBtn')} {...tracking} {...rest}>
        <span className={cx('replayBtn__icon')}>X</span>
        <span className={cx('replayBtn__text', 'replayBtn__text--primary')}>
          {replay}
        </span>
        <span className={cx('replayBtn__text', 'replayBtn__text--secondary')}>
          {replay}
        </span>
      </button>
    );
  }
}

class ShareGroup extends PureComponent {
  constructor(props) {
    super(props);
    const {
      facebookLink,
      twitterLink,
      twitterHashtags,
      twitterText,
      emailSubject,
      emailBody,
      replayFunc,
    } = this.props;

    this.state = {
      shareLinks: {
        Facebook: {
          url: facebookLink,
        },
        Twitter: {
          text: twitterText,
          url: twitterLink,
          hashtags: twitterHashtags,
        },
        Email: {
          subject: emailSubject,
          body: emailBody,
        },
      },
    };

    this.replayFunc = replayFunc
      ? replayFunc
      : () => {
          return console.error(
            'error',
            'Replay callback is not provided or defined.'
          );
        };
  }

  share(e, share, link) {
    e.preventDefault();
    if (share === 'Email') {
      window.location.href = link;
      return;
    }
    window.open(
      link,
      'targetWindow',
      'toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=550'
    );
  }

  render() {
    const { fb, tw, mail, replay, shareOn, trackingInfo, theme } = this.props;
    const displayLinks = [tw, fb, mail].map((share, i) => {
      const $href = getShareLink(share, this.state.shareLinks[share]);
      const $tracking = getTracking(trackingInfo, share);
      return (
        <ShareLink
          key={i}
          href={$href}
          tracking={$tracking}
          onClick={e => this.share(e, share, $href)}
        />
      );
    });

    return (
      <div
        className={cx('share-group', `is-${theme}`)}
        role="group"
        aria-labelledby="shareLabel"
      >
        <div id="shareLabel" className={cx('share-group__title')}>
          {shareOn}
        </div>
        {displayLinks}
        <div className={cx('share-group__line')} />
        <ReplayButton
          replay={replay}
          tracking={getTracking(trackingInfo, 'replay')}
          onClick={this.replayFunc.bind(this)}
        />
      </div>
    );
  }
}

ShareGroup.defaultProps = {
  theme: 'light',
};

ShareGroup.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
  replay: PropTypes.string.isRequired,
  shareOn: PropTypes.string.isRequired,
  fb: PropTypes.string.isRequired,
  tw: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  facebookLink: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,
  twitterHashtags: PropTypes.string.isRequired,
  twitterText: PropTypes.string.isRequired,
  emailSubject: PropTypes.string.isRequired,
  emailBody: PropTypes.string.isRequired,
  replayFunc: PropTypes.func,
};

export default ShareGroup;
