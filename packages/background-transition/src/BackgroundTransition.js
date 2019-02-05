import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './BackgroundTransition.scss';

const cx = classNames.bind(styles);

class Image extends PureComponent {
  render() {
    const { url, duration, id, active } = this.props;
    return (
      <div
        className={cx('bgTransition__img', {
          'bgTransition__img--active': active,
        })}
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
    this.state = {
      shouldDisable: false,
      activeIndex: 0,
      images: null,
    };
  }

  componentDidMount() {
    this.startTransition();
  }

  componentWillUnmount() {
    this.stopTransition();
  }

  static getDerivedStateFromProps(props, state) {
    if (
      props.imageList !== state.images ||
      props.disabled !== state.shouldDisable
    ) {
      return {
        shouldDisable: props.disabled,
        activeIndex: state.activeIndex,
        images: props.imageList,
      };
    }

    return null;
  }

  componentDidUpdate(prevProps) {
    if (this.props.disabled !== prevProps.disabled) {
      if (this.props.disabled) {
        return this.stopTransition();
      }
      return this.startTransition();
    }
  }

  stopTransition() {
    clearInterval(this.crossFadeInterval);
  }

  startTransition() {
    this.crossFadeInterval = setInterval(() => {
      this.setState({
        activeIndex:
          this.state.activeIndex !== this.state.images.length - 1
            ? this.state.activeIndex + 1
            : 0,
      });
    }, this.props.duration);
  }

  render() {
    const { duration, imageList, disabled } = this.props;
    return (
      <div
        ref={this.$parent}
        className={cx('bgTransition', {
          'bgTransition--disabled': disabled,
        })}
      >
        {imageList.map((url, i) => (
          <Image
            key={i}
            url={url}
            duration={duration}
            id={i}
            active={this.state.activeIndex === i}
          />
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
