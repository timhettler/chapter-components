import React from 'react';
import PropTypes from 'prop-types';

import styles from './Icon.scss';

export default function Icon(props) {
  const { height, width, children, ...rest } = props;

  // We want the default dimensions to be 100% width, which covers most
  // use-cases, but only if BOTH the width and height props are unset
  const trueWidth = width || height ? width : '100%';
  const trueHeight = width || height ? height : null;

  return (
    <svg
      width={trueWidth}
      height={trueHeight}
      className={styles.container}
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
