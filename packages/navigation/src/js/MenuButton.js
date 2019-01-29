import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../Navigation.scss';

const cx = classNames.bind(styles);

class MenuButton extends PureComponent {
  render() {
    const {
      label,
      chapterIcon,
      closeIcon,
      theme,
      isActive,
      ...rest
    } = this.props;
    return (
      <button
        className={cx(
          'menuButton',
          `menuButton--is-${theme}`,
          `${isActive ? 'menuButton--active' : ''}`
        )}
        {...rest}
      >
        <span className={cx('menuButton__bgLayer')} />
        <span className={cx('menuButton__icon', 'menuButton__icon--primary')}>
          {chapterIcon}
        </span>
        <span className={cx('menuButton__icon', 'menuButton__icon--secondary')}>
          {closeIcon}
        </span>
        <span className={cx('menuButton__text', 'menuButton__text--primary')}>
          {label}
        </span>
        <span className={cx('menuButton__text', 'menuButton__text--secondary')}>
          {label}
        </span>
      </button>
    );
  }
}

MenuButton.defaultProps = {
  theme: 'light',
};

MenuButton.propTypes = {
  chapterIcon: PropTypes.node,
  closeIcon: PropTypes.node,
  label: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'grey', 'dark']),
};

export default MenuButton;
