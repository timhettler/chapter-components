import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Disclaimer.scss';

const cx = classNames.bind(styles);

class Disclaimer extends PureComponent {
  render() {
    const { disabled, theme, children, ...rest } = this.props;

    return (
      <div
        className={cx('disclaimer', `is-${theme}`, {
          'is-disabled': disabled,
        })}
        aria-hidden={disabled}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

Disclaimer.defaultProps = {
  theme: 'dark',
};

Disclaimer.propTypes = {
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf(['light', 'dark']),
};

export default Disclaimer;
