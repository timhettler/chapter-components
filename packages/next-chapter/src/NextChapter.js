import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './NextChapter.scss';

const cx = classNames.bind(styles);

class NextChapter extends PureComponent {
  render() {
    const { imgSrc, title, subtitle, disabled, theme, ...rest } = this.props;
    return (
      <a
        className={cx(
          'nextChapter',
          `is-${theme}`,
          `${disabled ? null : 'show'}`
        )}
        {...rest}
      >
        <div className={cx('copy')}>
          <div className={cx('title', 'ui_next')}>{title}</div>
          <div className={cx('subtitle', 'ui_next')}>{subtitle}</div>
        </div>
        <div
          className={cx('thumbnail', 'ui_next')}
          style={{
            backgroundImage: `url(${imgSrc})`,
          }}
        />
      </a>
    );
  }
}

NextChapter.defaultProps = {
  theme: 'light',
  disabled: false,
};

NextChapter.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
  disabled: PropTypes.bool,
};

export default NextChapter;
