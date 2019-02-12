import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.scss';

const cx = classNames.bind(styles);

class Button extends PureComponent {
  render() {
    const { icon, theme, disabled, ...rest } = this.props;
    return (
      <button
        className={cx('btn', `btn--is-${theme}`)}
        disabled={disabled ? 'disabled' : false}
        {...rest}
      >
        <span className={cx('btn__icon')}>{icon}</span>
      </button>
    );
  }
}

Button.defaultProps = {
  theme: 'dark',
  disabled: false,
};

export const ButtonPropTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
  icon: PropTypes.node,
  disabled: PropTypes.bool,
};

Button.propTypes = ButtonPropTypes;

export default Button;
