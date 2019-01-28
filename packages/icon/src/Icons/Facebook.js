import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../';

export default function Facebook(props) {
  const { ...rest } = props;

  return (
    <Icon viewBox="0 0 47.5 91.43" {...rest}>
      <g>
        <path d="M30.83 91.43V49.72h14l2.08-16.24H30.83V23.1c0-4.7 1.31-7.91 8.05-7.91h8.62V.64A111.87 111.87 0 0 0 35 0C22.53 0 14.05 7.59 14.05 21.51v12H0v16.25h14.05v41.67h16.78z" />
      </g>
    </Icon>
  );
}

Facebook.defaultProps = {};

Facebook.propTypes = {};
