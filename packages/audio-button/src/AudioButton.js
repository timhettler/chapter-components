import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './AudioButton.scss';

const cx = classNames.bind(styles);

class AudioButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      audioMuted: false,
    };
  }

  componentDidMount() {
    if (this.props.isActive !== this.state.audioMuted) {
      this.setState({
        audioMuted: this.props.isActive,
      });
    }
  }

  handleClick(cb) {
    this.setState({
      audioMuted: !this.state.audioMuted,
    });
    cb(!this.state.audioMuted);
  }

  render() {
    const { isActive, disabled, data, theme, render, cb, ...rest } = this.props;
    const audioLabel = data.accessibility[this.state.audioMuted ? 'on' : 'off'];
    const audioTracking = data.tracking[this.state.audioMuted ? 'on' : 'off'];
    return (
      <button
        className={cx('audioButton', `audioButton--is-${theme}`, {
          'audioButton--hidden': disabled,
        })}
        aria-hidden={disabled ? true : false}
        aria-label={audioLabel}
        onClick={this.handleClick.bind(this, cb)}
        {...audioTracking}
        {...rest}
      >
        <span className={cx('audioButton__icon')}>
          {render(this.state.audioMuted)}
        </span>
      </button>
    );
  }
}

AudioButton.defaultProps = {
  theme: 'dark',
};

AudioButton.propTypes = {
  data: PropTypes.shape({
    accessibility: PropTypes.shape({
      on: PropTypes.string,
      off: PropTypes.string,
    }),
    tracking: PropTypes.shape({
      on: PropTypes.object,
      off: PropTypes.object,
    }),
  }),
  render: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf(['light', 'dark']),
  isActive: PropTypes.bool,
  cb: PropTypes.func,
};

export default AudioButton;
