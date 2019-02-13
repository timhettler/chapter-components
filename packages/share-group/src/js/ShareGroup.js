import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../ShareGroup.scss';

const cx = classNames.bind(styles);

class ShareGroup extends PureComponent {
  render() {
    const { title, theme, children, ...rest } = this.props;
    return (
      <div
        className={cx('share-group', `is-${theme}`)}
        role="group"
        aria-labelledby="shareLabel"
        {...rest}
      >
        <div id="shareLabel" className={cx('share-group__title')}>
          {title}
        </div>
        <div className={cx('share-group__content')}>{children}</div>
      </div>
    );
  }
}

ShareGroup.defaultProps = {
  theme: 'light',
};

ShareGroup.propTypes = {
  title: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ShareGroup;
