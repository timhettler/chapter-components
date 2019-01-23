import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './NextChapter.scss';

const cx = classNames.bind(styles);

class NextChapter extends PureComponent {
  render() {
    const { href, imgSrc, title, subtitle, disabled, theme } = this.props;
    return (
      <a
        className={cx(
          'nextChapter',
          `is-${theme}`,
          `${disabled ? '' : 'show'}`
        )}
        href={href}
      >
        <div className={cx('copy')}>
          <div className={cx('title')}> {title} </div>{' '}
          <div className={cx('subtitle')}> {subtitle} </div>{' '}
        </div>
        <div
          className={cx('thumbnail')}
          style={{
            backgroundImage: `url(${imgSrc})`,
          }}
        />{' '}
      </a>
    );
  }
}

NextChapter.defaultProps = {
  theme: 'light',
  disabled: false,
};

NextChapter.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
  disabled: PropTypes.bool,
};

export default NextChapter;
