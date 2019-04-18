import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './NextChapter.scss';

const cx = classNames.bind(styles);

class NextChapter extends PureComponent {
  render() {
    const { imgSrc, title, subtitle, theme, ...rest } = this.props;
    return (
      <a className={cx('nextChapter', `is-${theme}`)} {...rest}>
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
};

NextChapter.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
};

export default NextChapter;
