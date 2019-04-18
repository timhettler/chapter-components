import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.scss';

const cx = classNames.bind(styles);

class Button extends PureComponent {
  render() {
    const { children, theme, classList, ...rest } = this.props;
    return (
      <button className={cx('btn', `btn--is-${theme}`, ...classList)} {...rest}>
        <span className={cx('btn__inner')}>{children}</span>
      </button>
    );
  }
}

Button.defaultProps = {
  theme: 'dark',
  classList: [],
};

export const ButtonPropTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
};

Button.propTypes = {
  ...ButtonPropTypes,
  classList: PropTypes.arrayOf(PropTypes.string),
};

export default Button;
