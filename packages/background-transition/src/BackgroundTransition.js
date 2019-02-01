import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './BackgroundTransition.scss';

const cx = classNames.bind(styles);

class Image extends PureComponent {
  render() {
    const { url, duration, id } = this.props;
    return (
      <div
        className={cx('bgTransition__img')}
        data-id={id}
        style={{
          backgroundImage: `url(${url})`,
          transitionDuration: `${duration}ms`,
        }}
      />
    );
  }
}

class BackgroundTransition extends PureComponent {
  constructor(props) {
    super(props);
    this.$parent = React.createRef();
    this.currentIndex = 0;
    this.imageLength = this.props.imageList.length - 1;
    this.currentTarget = null;
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  clearInterval() {
    clearInterval(this.crossFadeInterval);
  }

  setInterval() {
    this.crossFadeInterval = setInterval(() => {
      if (this.currentTarget) {
        this.currentTarget.classList.remove('active');
      }
      this.currentTarget = this.$parent.current.querySelector(
        `[data-id='${this.currentIndex}']`
      );
      this.currentTarget.classList.add('active');

      this.currentIndex =
        this.currentIndex !== this.imageLength
          ? this.currentIndex + 1
          : (this.currentIndex = 0);
    }, this.props.duration);
  }

  render() {
    const { imageList, duration, disabled } = this.props;
    if (disabled) {
      this.clearInterval();
    } else {
      this.setInterval();
    }
    return (
      <div
        ref={this.$parent}
        className={cx(
          'bgTransition',
          `${disabled ? 'bgTransition--disabled' : ''}`
        )}
      >
        {imageList.map((url, i) => (
          <Image key={i} url={url} duration={duration} id={i} />
        ))}
      </div>
    );
  }
}

BackgroundTransition.defaultProps = {
  duration: 3000,
  disabled: false,
};

BackgroundTransition.propTypes = {
  imageList: PropTypes.array.isRequired,
  duration: PropTypes.number,
  disabled: PropTypes.bool,
};

export default BackgroundTransition;
