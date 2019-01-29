import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../Navigation.scss';

import MenuList from './MenuList';
import MenuButton from './MenuButton';

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
      chapterIcon,
      closeIcon,
      label,
      theme,
      disable,
      ...rest
    } = this.props;
    return (
      <div
        className={cx(
          'navigation',
          `${disable ? 'navigation--hidden' : ''}`,
          `${this.state.isActive ? 'navigation--active' : ''}`
        )}
      >
        <div className={cx('navigation__bgLayer')} />
        <MenuButton
          chapterIcon={chapterIcon}
          closeIcon={closeIcon}
          label={label}
          theme={theme}
          onClick={this.toggleNavigation}
          isActive={this.state.isActive}
          {...rest}
        />
        <MenuList chapters={chapters} isActive={this.state.isActive} />
      </div>
    );
  }
}

Navigation.defaultProps = {
  theme: 'light',
  disable: true,
};

Navigation.propTypes = {
  chapterIcon: PropTypes.node,
  closeIcon: PropTypes.node,
  label: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'grey', 'dark']),
  disable: PropTypes.bool,
};

export default Navigation;
