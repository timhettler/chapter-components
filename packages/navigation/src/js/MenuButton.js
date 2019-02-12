import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Close, Icon } from '@ssgw/icon';
import styles from '../Navigation.scss';

const cx = classNames.bind(styles);

class MenuButton extends PureComponent {
  render() {
    const { label, data, theme, isActive, ...rest } = this.props;
    return (
      <button
        className={cx('menuButton', `menuButton--is-${theme}`, {
          'menuButton--active': isActive,
        })}
        aria-expanded={isActive ? true : false}
        aria-label={isActive ? data.close : data.open}
        {...rest}
      >
        <span className={cx('menuButton__icon', 'menuButton__icon--primary')}>
          <Icon fill="#fff" viewBox="0 0 50 50">
            <path d="M11 1v6H1v42h38v-6h10V8.586L41.414 1H11zm31 3.414L45.586 8H42V4.414zM37 47H3V9h27v7h7v31zm-5-36.586L35.586 14H32v-3.586zM39 41V14.586L31.414 7H13V3h27v7h7v31h-8z" />
          </Icon>
        </span>
        <span className={cx('menuButton__icon', 'menuButton__icon--secondary')}>
          <Close fill="#fff" />
        </span>
        <div className={cx('menuButton__copy')}>
          <span className={cx('menuButton__text', 'menuButton__text--primary')}>
            {label}
          </span>
          <span
            className={cx('menuButton__text', 'menuButton__text--secondary')}
          >
            {label}
          </span>
        </div>
      </button>
    );
  }
}

MenuButton.defaultProps = {
  theme: 'light',
};

export const MenuButtonPropTypes = {
  data: PropTypes.shape({
    open: PropTypes.string,
    close: PropTypes.string,
  }).isRequired,
  label: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
};

MenuButton.propTypes = MenuButtonPropTypes;

export default MenuButton;
