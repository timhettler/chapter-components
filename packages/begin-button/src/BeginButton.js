import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './BeginButton.scss';

const cx = classNames.bind(styles);

class BeginButton extends PureComponent {
  render() {
    const { label, theme, disabled, ...rest } = this.props;

    return (
      <button
        className={cx('beginButton', `is-${theme}`)}
        aria-label={label}
        disabled={disabled}
        {...rest}
      >
        <div className={cx('outline', 'outline-a')} />
        <div className={cx('outline', 'outline-b')} />
        <div className={cx('text', 'text-a')}>{label}</div>
        <div className={cx('text', 'text-b')} aria-hidden="true">
          {label}
        </div>
      </button>
    );
  }
}

BeginButton.defaultProps = {
  theme: 'dark',
};

BeginButton.propTypes = {
  label: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
  disabled: PropTypes.bool,
};

export default BeginButton;
