import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../ShareGroup.scss';

const cx = classNames.bind(styles);

class ShareLink extends PureComponent {
  openShareWindow(e, shareType, url) {
    if (shareType === 'Email') return true;
    e.preventDefault();
    window.open(
      url,
      'targetWindow',
      'toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=550'
    );
  }

  render() {
    const { icon, url, label, ...rest } = this.props;
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
          className={cx(
            'shareLink__child',
            'shareLink__border',
            'shareLink__border--primary'
          )}
        />
        <span
          className={cx(
            'shareLink__child',
            'shareLink__border',
            'shareLink__border--secondary'
          )}
        />
        <span
          className={cx(
            'shareLink__child',
            'shareLink__icon',
            'shareLink__icon--primary'
          )}
        >
          {icon}
        </span>
        <span
          className={cx(
            'shareLink__child',
            'shareLink__icon',
            'shareLink__icon--secondary'
          )}
        >
          {icon}
        </span>
      </a>
    );
  }
}

ShareLink.defaultProps = {};

ShareLink.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

export default ShareLink;
