import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../';

export default function Facebook(props) {
  const { ...rest } = props;

  return (
    <Icon viewBox="0 0 60 60" {...rest}>
      <path d="M58 0L30 28.1 1.9 0 0 1.9 28 30 0 58.1 1.9 60 30 31.9 58 60l2-1.9L31.9 30 60 1.9 58 0z" />
    </Icon>
  );
}

Facebook.defaultProps = {};

Facebook.propTypes = {};
