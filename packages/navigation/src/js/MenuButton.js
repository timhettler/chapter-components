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
          <Icon viewBox="0 0 10 14" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M1 1v9H0V0h6v1H1zm2 2v9H2V2h6v1H3zm1 1h6v10H4V4z"
            />
          </Icon>
        </span>
        <span className={cx('menuButton__icon', 'menuButton__icon--secondary')}>
          <Close />
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
