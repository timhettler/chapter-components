import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../Navigation.scss';

const cx = classNames.bind(styles);

class MenuLink extends PureComponent {
  render() {
    const { isCurrent, data, ...rest } = this.props;
    return (
      <a href={data.url} tabIndex={isCurrent ? -1 : null} {...rest}>
        <div className={cx('menuLink__number')}>{data.id}</div>
        <div className={cx('menuLink__dash')}>&ndash;</div>
        <div className={cx('menuLink__title')}>{data.title}</div>
        <div className={cx('menuLink__line')} />
      </a>
    );
  }
}

MenuLink.defaultProps = {};

export const MenuLinkPropTypes = {
  isCurrent: PropTypes.bool,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

MenuLink.propTypes = MenuLinkPropTypes;

export default MenuLink;
