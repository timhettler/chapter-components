import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../';

export default function Replay(props) {
  const { ...rest } = props;

  return (
    <Icon viewBox="0 0 582 513" {...rest}>
      <g>
        <g>
          <path d="M257 513A256.07 256.07 0 0 1 1 257a256 256 0 0 1 465.3-147.5V25.4a10.5 10.5 0 1 1 21 0v122.3a10.54 10.54 0 0 1-20 4.7C427.3 72 346.7 22.1 257 22.1 127.5 22.1 22.1 127.5 22.1 257S127.5 491.9 257 491.9 491.9 386.5 491.9 257a10.5 10.5 0 0 1 21 0 254 254 0 0 1-75 181c-48.4 48.3-112.5 75-180.9 75z" />
          <path d="M475.8 159.2H358.5a10.5 10.5 0 0 1 0-21h117.3a10.5 10.5 0 0 1 0 21z" />
        </g>
      </g>
    </Icon>
  );
}

Replay.defaultProps = {};

Replay.propTypes = {};
