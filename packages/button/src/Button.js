import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.scss';

const cx = classNames.bind(styles);

class Button extends PureComponent {
  render() {
    const { children, theme, className, ...rest } = this.props;
    return (
      <button className={cx('btn', `btn--is-${theme}`, className)} {...rest}>
        <span className={cx('btn__inner')}>{children}</span>
      </button>
    );
  }
}

Button.defaultProps = {
  theme: 'dark',
};

export const ButtonPropTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string,
};

Button.propTypes = {
  ...ButtonPropTypes,
};

export default Button;
