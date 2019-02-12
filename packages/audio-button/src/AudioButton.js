import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button, { ButtonPropTypes } from '@ssgw/button';
import styles from './AudioButton.scss';

const cx = classNames.bind(styles);

class AudioButton extends PureComponent {
  render() {
    const { disabled, theme, isMuted, render, ...rest } = this.props;
    return (
      <Button
        theme={theme}
        icon={render(isMuted)}
        disabled={disabled}
        {...rest}
      />
    );
  }
}

AudioButton.defaultProps = {
  theme: 'dark',
};

AudioButton.propTypes = {
  render: PropTypes.func,
  disabled: ButtonPropTypes.disabled,
  theme: ButtonPropTypes.theme,
  isMuted: PropTypes.bool,
};

export default AudioButton;
