import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../';

export default function Chevron(props) {
  const { dir, ...rest } = props;

  const getViewbox = dir => {
    switch (dir) {
      case 'left':
      case 'right':
        return '0 0 8 14';
      case 'up':
      case 'down':
        return '0 0 14 8';
      default:
        return false;
    }
  };

  const getPoints = dir => {
    switch (dir) {
      case 'left':
        return '7,0 1,6 0,7 1,8 7,14 8,13 2,7 8,1 ';
      case 'right':
        return '1,14 7,8 8,7 7,6 1,0 0,1 6,7 0,13 ';
      case 'up':
        return '14,7 8,1 7,0 6,1 0,7 1,8 7,2 13,8 ';
      case 'down':
        return '0,1 6,7 7,8 8,7 14,1 13,0 7,6 1,0 ';
      default:
        return false;
    }
  };

  return (
    <Icon viewBox={getViewbox(dir)} {...rest}>
      <polyline points={getPoints(dir)} />
    </Icon>
  );
}

Chevron.defaultProps = {
  dir: 'down',
};

Chevron.propTypes = {
  dir: PropTypes.oneOf(['up', 'right', 'down', 'left']),
};
