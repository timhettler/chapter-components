import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Disclaimer.scss';

const cx = classNames.bind(styles);

class Disclaimer extends PureComponent {
  render() {
    const { disabled, copy, theme, ...rest } = this.props;

    return (
      <div
        className={cx('disclaimer', `is-${theme}`, {
          'is-disabled': disabled,
        })}
        aria-hidden={disabled}
        {...rest}
      >
        <p>{copy}</p>
      </div>
    );
  }
}

Disclaimer.defaultProps = {
  theme: 'dark',
};

Disclaimer.propTypes = {
  disabled: PropTypes.bool,
  copy: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
};

export default Disclaimer;
