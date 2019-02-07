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
    this.state = {
      isActive: false,
    };

    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    const {
      chapters,
      currentChapter,
      accessibility,
      label,
      theme,
      disable,
      cta,
      ...rest
    } = this.props;
    return (
      <nav
        className={cx(
          'navigation',
          { 'navigation--hidden': disable },
          { 'navigation--active': this.state.isActive }
        )}
      >
        <div className={cx('navigation__bgLayer')} />
        <MenuButton
          label={label}
          theme={theme}
          onClick={this.toggleNavigation}
          isActive={this.state.isActive}
          data={accessibility}
          {...rest}
        />
        <MenuList
          chapters={chapters}
          isActive={this.state.isActive}
          currentChapter={currentChapter}
          cta={cta}
        />
      </nav>
    );
  }
}

Navigation.defaultProps = {
  theme: 'light',
  disable: false,
};

Navigation.propTypes = {
  chapters: PropTypes.arrayOf(MenuLinkPropTypes.data).isRequired,
  currentChapter: PropTypes.string.isRequired,
  accessibility: MenuButtonPropTypes.data,
  label: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
  disable: PropTypes.bool,
  cta: MenuListProps.cta,
};

export default Navigation;
