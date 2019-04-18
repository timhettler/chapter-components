import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../Navigation.scss';

import AudioButton from '@ssgw/audio-button';
import { MenuLinkPropTypes } from './MenuLink';
import MenuList, { MenuListProps } from './MenuList';
import MenuButton, { MenuButtonPropTypes } from './MenuButton';

const cx = classNames.bind(styles);

class Navigation extends PureComponent {
  render() {
    const {
      chapters,
      audio,
      currentChapter,
      label,
      theme,
      isActive,
      cta,
      buttonClasses,
      menuLinkAttrs,
      enableLockFocus,
      onClick,
      ...rest
    } = this.props;
    return (
      <nav className={cx('navigation', { 'navigation--active': isActive })}>
        <div className={cx('navigation__bgLayer')} />

        <div className={cx('navigation__top')}>
          <MenuButton
            label={label}
            theme={theme}
            onClick={onClick}
            isActive={isActive}
            classList={buttonClasses}
            {...rest}
          />
          {audio && <AudioButton classList={buttonClasses} {...audio} />}
        </div>
        <div className={cx('navigation__bottom')}>
          <MenuList
            chapters={chapters}
            isActive={isActive}
            currentChapter={currentChapter}
            cta={cta}
            menuLinkAttrs={menuLinkAttrs}
            enableLockFocus={enableLockFocus}
          />
        </div>
      </nav>
    );
  }
}

Navigation.defaultProps = {
  theme: 'light',
  buttonClasses: [],
  onClick: () => {},
};

Navigation.propTypes = {
  chapters: PropTypes.arrayOf(MenuLinkPropTypes.data).isRequired,
  audio: PropTypes.object,
  currentChapter: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
  isActive: PropTypes.bool,
  cta: MenuListProps.cta,
  buttonClasses: MenuButtonPropTypes.classList,
  menuLinkAttrs: MenuListProps.menuLinkAttrs,
  enableLockFocus: MenuListProps.enableLockFocus,
  onClick: PropTypes.func,
};

export default Navigation;
