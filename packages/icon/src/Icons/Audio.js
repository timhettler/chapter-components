import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../';

export default function Audio(props) {
  const { isActive, ...rest } = props;
  if (!isActive) {
    return (
      <Icon viewBox="0 0 20 20" {...rest}>
        <path d="M15 8.59l-2.12-2.13-1.42 1.42L13.6 10l-2.13 2.12 1.42 1.42L15 11.4l2.12 2.13 1.42-1.42L16.4 10l2.13-2.12-1.42-1.42L15 8.6zM4 7H0v6h4l5 5V2L4 7z" />
      </Icon>
    );
  }
  return (
    <Icon viewBox="0 0 64 64" {...rest}>
      <path d="M33.1 43.82c10.18-11.38 1.06-22.43 0-23.66l6.1-5.42c5.33 6 12.2 20.87 0 34.52zm12.51 12.25c21.28-23.8.88-47.16 0-48.14l6.44-5.75c.27.3 26.36 30.16 0 59.64z" />
      <path d="M0 32V21.54h7.86L23.83 5.56v52.88L7.86 42.46H0V32" />
    </Icon>
  );
}

Audio.defaultProps = {
  isActive: false,
};

Audio.propTypes = {
  isActive: PropTypes.bool,
};
