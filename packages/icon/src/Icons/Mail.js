import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../';

export default function Mail(props) {
  const { ...rest } = props;

  return (
    <Icon viewBox="0 0 86.2 56.13" {...rest}>
      <g>
        <path d="M86.13 55.08a1.48 1.48 0 0 0 .08-.46V1.5a1.47 1.47 0 0 0-.09-.5V.94a1.49 1.49 0 0 0-.28-.46 1.5 1.5 0 0 0-.44-.32 1.48 1.48 0 0 0-.59-.16H1.4a1.5 1.5 0 0 0-.52.13 1.48 1.48 0 0 0-.47.35A1.5 1.5 0 0 0 .1 1H.08a1.47 1.47 0 0 0-.08.5v53.13a1.48 1.48 0 0 0 .08.47v.06a1.5 1.5 0 0 0 .28.46l.16.14.07.06.27.18h.05a1.5 1.5 0 0 0 .59.12h83.2a1.48 1.48 0 0 0 .59-.12h.08l.18-.1.09-.07.14-.13a1.5 1.5 0 0 0 .28-.46zM3 4.9L28.25 28 3 51.21zm51.75 21.93a1.43 1.43 0 0 0-.3.22s0 .08-.07.12L43.1 37.47 5.37 3h75.47zM30.47 30l11.62 10.61a1.5 1.5 0 0 0 2 0l11.5-10.49 25.24 23H5.35zm27.34-1.9L83.2 4.9v46.33z" />
      </g>
    </Icon>
  );
}

Mail.defaultProps = {};

Mail.propTypes = {};