import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../';

export default function Twitter(props) {
  const { ...rest } = props;

  return (
    <Icon viewBox="0 0 56.1 46" {...rest}>
      <g>
        <path d="M56.1 5.5a24.82 24.82 0 0 1-6.6 1.8A11.63 11.63 0 0 0 54.6.9a23.06 23.06 0 0 1-7.3 2.8A11.33 11.33 0 0 0 38.9 0a11.59 11.59 0 0 0-11.5 11.6 12.41 12.41 0 0 0 .3 2.7A32.8 32.8 0 0 1 4 2.2 11.47 11.47 0 0 0 2.4 8a11.71 11.71 0 0 0 5.1 9.7 11.26 11.26 0 0 1-5.2-1.5v.1a11.7 11.7 0 0 0 9.2 11.4 10.32 10.32 0 0 1-3 .4 16.35 16.35 0 0 1-2.2-.2A11.6 11.6 0 0 0 17 36a23 23 0 0 1-14.3 5 24.52 24.52 0 0 1-2.7-.2A32.18 32.18 0 0 0 17.6 46c21.1 0 32.7-17.7 32.7-33.1v-1.5a18.17 18.17 0 0 0 5.8-5.9z" />
      </g>
    </Icon>
  );
}

Twitter.defaultProps = {};

Twitter.propTypes = {};
