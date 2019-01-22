import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './NextChapter.scss';

const cx = classNames.bind(styles);

class NextChapter extends PureComponent {
  render() {
    const { href, title, subtitle, state, theme } = this.props;
    return (
      <div
        className={cx(
          'UINextChapter',
          `is-${theme}`,
          `${state !== 'show' ? 'hide' : 'show'}`
        )}
      >
        <a className={cx('link')} href={href}>
          <div className={cx('title')}> {title} </div>
          <div className={cx('subtitle')}>{subtitle}</div>
          <div className={cx('thumbnail')} />
        </a>
      </div>
    );
  }
}

NextChapter.defaultProps = {
  title: 'Next: Chapter X',
  subtitle: 'Title of Chapter X',
  theme: 'light',
  state: 'hide',
};

NextChapter.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
  state: PropTypes.oneOf(['show', 'hide']),
};

export default NextChapter;
