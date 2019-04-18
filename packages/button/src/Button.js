import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.scss';

const cx = classNames.bind(styles);

class Button extends PureComponent {
  render() {
    const { children, theme, className, ...rest } = this.props;
    return (
      <button
        className={cx('btn', `btn--is-${theme}`, className.split(' '))}
        {...rest}
      >
        <span className={cx('btn__inner')}>{children}</span>
      </button>
    );
  }
}

Button.defaultProps = {
  theme: 'dark',
  className: '',
};

export const ButtonPropTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
};

Button.propTypes = {
  ...ButtonPropTypes,
  className: PropTypes.string,
};

export default Button;
