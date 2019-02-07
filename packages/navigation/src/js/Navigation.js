import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../Navigation.scss';

import { MenuLinkPropTypes } from './MenuLink';
import MenuList, { MenuListProps } from './MenuList';
import MenuButton, { MenuButtonPropTypes } from './MenuButton';

const cx = classNames.bind(styles);

class Navigation extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      chapters,
      currentChapter,
      accessibility,
      label,
      theme,
      disabled,
      isActive,
      cta,
      onClick,
      ...rest
    } = this.props;
    return (
      <nav
        className={cx(
          'navigation',
          { 'navigation--hidden': disabled },
          { 'navigation--active': isActive }
        )}
      >
        <div className={cx('navigation__bgLayer')} />
        <MenuButton
          label={label}
          theme={theme}
          onClick={onClick}
          isActive={isActive}
          data={accessibility}
          {...rest}
        />
        <MenuList
          chapters={chapters}
          isActive={isActive}
          currentChapter={currentChapter}
          cta={cta}
        />
      </nav>
    );
  }
}

Navigation.defaultProps = {
  theme: 'light',
  disabled: false,
};

Navigation.propTypes = {
  chapters: PropTypes.arrayOf(MenuLinkPropTypes.data).isRequired,
  currentChapter: PropTypes.string.isRequired,
  accessibility: MenuButtonPropTypes.data,
  label: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
  disabled: PropTypes.bool,
  isActive: PropTypes.bool,
  cta: MenuListProps.cta,
  onClick: PropTypes.func,
};

export default Navigation;