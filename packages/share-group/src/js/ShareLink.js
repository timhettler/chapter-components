import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../ShareGroup.scss';

const cx = classNames.bind(styles);

class ShareLink extends PureComponent {
  openShareWindow(e, shareType, url) {
    if (shareType === 'Email') return true;
    e.preventDefault();
    if (!url) return false;
    window.open(
      url,
      'targetWindow',
      'toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=550'
    );
  }

  render() {
    const { icon, url, label, ...rest } = this.props;
    console.log(icon);
    return (
      <a
        className={cx('shareLink')}
        href={url}
        {...rest}
        onClick={e => {
          this.openShareWindow(e, label, url);
        }}
      >
        <span
          className={cx('shareLink__border', 'shareLink__border--primary')}
        />
        <span
          className={cx('shareLink__border', 'shareLink__border--secondary')}
        />
        <span
          style={{ backgroundImage: `url("${icon}")` }}
          className={cx('shareLink__icon', 'shareLink__icon--primary')}
        />
        <span
          style={{ backgroundImage: `url("${icon}")` }}
          className={cx('shareLink__icon', 'shareLink__icon--secondary')}
        />
      </a>
    );
  }
}

ShareLink.defaultProps = {};

ShareLink.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export { ShareLink };
