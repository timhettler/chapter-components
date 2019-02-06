import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../';

export default function Close(props) {
  const { ...rest } = props;

  return (
    <Icon viewBox="0 0 64 64" {...rest}>
      <g id="Icon-Close" transform="translate(381 231)">
        <path d="M-370.7-174.7l-2.3-2.3 46-46 2.3 2.3-46 46" />
        <path d="M-327-174.7l-46-46 2.3-2.3 46 46-2.3 2.3" />
      </g>
    </Icon>
  );
}

Close.defaultProps = {};

Close.propTypes = {};
