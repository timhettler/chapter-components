import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '@ssgw/button';
import { Audio } from '@ssgw/icon';
import styles from './AudioButton.scss';

const cx = classNames.bind(styles);

class AudioButton extends PureComponent {
  render() {
    const { isMuted, ...rest } = this.props;
    return (
      <Button {...rest}>
        <Audio isMuted={isMuted} />
      </Button>
    );
  }
}

AudioButton.defaultProps = {
  theme: 'dark',
};

AudioButton.propTypes = {
  isMuted: PropTypes.bool,
};

export default AudioButton;
