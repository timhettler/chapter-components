import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../Navigation.scss';
import MenuLink, { MenuLinkPropTypes } from './MenuLink';

const cx = classNames.bind(styles);

class MenuList extends PureComponent {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.keydownHandler = this.keydownHandler.bind(this);
    this.enableLockFocus = this.enableLockFocus.bind(this);
    this.disableLockFocus = this.disableLockFocus.bind(this);
  }

  componentDidMount() {
    this.focusableElements = Array.apply(
      [],
      this.ref.current
        ? this.ref.current.querySelectorAll('a:not([tabindex="-1"])')
        : []
    );
    this.menuButtonElement = document.querySelector('[class*="menuButton"]');
    this.focusableElements.push(this.menuButtonElement);
    this.lastLinkElement = this.focusableElements[
      this.focusableElements.length - 2
    ];
    this.lastTabbedElement = [];
    this.props.enableLockFocus && this.enableLockFocus();
  }

  componentWillUnmount() {
    this.props.enableLockFocus && this.disableLockFocus();
  }

  componentDidUpdate(prevProp) {
    if (prevProp.isActive !== this.props.isActive) {
      this.lastTabbedElement = [];
      !this.props.isActive && document.activeElement.blur();
    }
  }

  enableLockFocus() {
    document.addEventListener('keydown', this.keydownHandler);
  }

  disableLockFocus() {
    document.removeEventListener('keydown', this.keydownHandler);
  }

  keydownHandler(e) {
    if (!this.props.isActive) return;
    const keycode = e.keycode ? e.keycode : e.which;
    const lastFocusedEl = this.lastTabbedElement[
      this.lastTabbedElement.length - 1
    ];
    const menuBtnFocused = lastFocusedEl === this.menuButtonElement;
    const lastLinkFocused = lastFocusedEl === this.lastLinkElement;

    if (keycode === 9 && e.shiftKey && menuBtnFocused) {
      setTimeout(() => this.menuButtonElement.focus());
    }

    if (keycode === 9 && !e.shiftKey && lastLinkFocused) {
      setTimeout(() => this.lastLinkElement.focus());
    }

    this.focusableElements.forEach(el => {
      el.addEventListener('focus', e => {
        this.lastTabbedElement.push(e.target);
        if (this.lastTabbedElement.length > 1) {
          this.lastTabbedElement.splice('0', 1);
        }
      });
    });
  }

  render() {
    const {
      isActive,
      chapters,
      currentChapter,
      cta,
      menuLinkAttrs,
    } = this.props;
    return (
      <ol ref={this.ref} className={cx('menuList')} hidden={!isActive}>
        {chapters.map((chapter, i) => {
          const isCurrent = currentChapter === chapter.id;

          return (
            <li
              key={i}
              className={cx('menuLink', {
                'menuLink--current': isCurrent,
              })}
            >
              <MenuLink
                isCurrent={isCurrent}
                data={chapter}
                {...menuLinkAttrs}
              />
            </li>
          );
        })}
        {cta ? (
          <li className={cx('menuLink', 'menuLink--more')}>{cta}</li>
        ) : null}
      </ol>
    );
  }
}

MenuList.defaultProps = {
  enableLockFocus: true,
};

export const MenuListProps = {
  isActive: PropTypes.bool,
  currentChapter: PropTypes.string.isRequired,
  chapters: PropTypes.arrayOf(MenuLinkPropTypes.data).isRequired,
  cta: PropTypes.string,
  menuLinkAttrs: PropTypes.object,
  enableLockFocus: PropTypes.bool,
};

MenuList.propTypes = MenuListProps;

export default MenuList;
