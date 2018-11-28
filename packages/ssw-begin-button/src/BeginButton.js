import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './BeginButton.scss';

const cx = classNames.bind(styles);

class BeginButton extends PureComponent {
  render() {
    const { label, theme, callback } = this.props;

    return (
      <button
        onClick={callback}
        disabled={disabled}
        className={cx('beginButton', `is-${theme}`)}
        aria-label={label}
      >
        <div className={cx('outline', 'outline-a')} />
        <div className={cx('outline', 'outline-b')} />
        <div className={cx('text', 'text-a')}>${label}</div>
        <div className={cx('text', 'text-b')} aria-hidden="true">
          ${label}
        </div>
      </button>
    );
  }
}

BeginButton.defaultProps = {
  theme: 'dark',
  callback: () => {},
};

BeginButton.propTypes = {
  label: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
  callback: PropTypes.func,
};

export default BeginButton;
