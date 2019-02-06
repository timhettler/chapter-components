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
        />
        {cta ? <p className={cx('cta')}>{cta}</p> : null}
      </nav>
    );
  }
}

Navigation.defaultProps = {
  theme: 'light',
  disable: false,
};

Navigation.propTypes = {
  currentChapter: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
  disable: PropTypes.bool,
  cta: PropTypes.string,
};

export default Navigation;
