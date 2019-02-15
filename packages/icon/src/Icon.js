import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Icon.scss';

const cx = classNames.bind(styles);

export default function Icon(props) {
  const { height, width, children, ...rest } = props;

  // We want the default dimensions to be 100% width, which covers most
  // use-cases, but only if BOTH the width and height props are unset
  const trueWidth = width || height ? width : '100%';
  const trueHeight = width || height ? height : '100%';

  return (
    <svg
      width={trueWidth}
      height={trueHeight}
      focusable="false"
      className={cx('icon_style')}
      {...rest}
    >
      {children}
    </svg>
  );
}

Icon.defaultProps = {
  height: null,
  width: null,
};

Icon.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};
