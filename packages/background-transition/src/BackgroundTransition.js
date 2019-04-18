import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './BackgroundTransition.scss';

const cx = classNames.bind(styles);

class Image extends PureComponent {
  render() {
    const { config, duration, active } = this.props;
    return (
      <div
        className={cx('bgTransition__img', {
          'bgTransition__img--active': active,
        })}
        style={{
          backgroundImage: `url(${config.url})`,
          transitionDuration: `${duration}ms`,
        }}
      >
        {config.altText && <span role="img" aria-label={config.altText} />}
      </div>
    );
  }
}

class BackgroundTransition extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  componentDidMount() {
    if (!this.props.disabled) {
      this.startTransition();
    }
  }

  componentWillUnmount() {
    this.stopTransition();
  }

  componentDidUpdate(prevProps) {
    if (this.props.disabled !== prevProps.disabled) {
      if (this.props.disabled) {
        return this.stopTransition();
      }
      return this.startTransition();
    }

    if (this.props.duration !== prevProps.duration) {
      this.stopTransition();
      this.startTransition();
    }
  }

  stopTransition() {
    clearInterval(this.crossFadeInterval);
  }

  startTransition() {
    this.crossFadeInterval = setInterval(() => {
      this.setState({
        activeIndex:
          this.state.activeIndex !== this.props.images.length - 1
            ? this.state.activeIndex + 1
            : 0,
      });
    }, this.props.duration);
  }

  render() {
    const { duration, images, disabled, ...rest } = this.props;
    return (
      <div className={cx('bgTransition')} {...rest}>
        {images.map((image, i) => (
          <Image
            key={i}
            config={image}
            duration={duration}
            active={this.state.activeIndex === i}
          />
        ))}
      </div>
    );
  }
}

BackgroundTransition.defaultProps = {
  duration: 3000,
};

BackgroundTransition.propTypes = {
  images: PropTypes.array.isRequired,
  duration: PropTypes.number,
  disabled: PropTypes.bool,
};

export default BackgroundTransition;
