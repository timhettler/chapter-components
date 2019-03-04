import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { ssgwPropTypes } from '@ssgw/utils';

import styles from '../Navigation.scss';

const cx = classNames.bind(styles);

class MenuLink extends PureComponent {
  render() {
    const { isCurrent, data, ...rest } = this.props;
    return (
      <a
        href={data.url}
        tabIndex={isCurrent ? -1 : null}
        {...data.tracking}
        {...rest}
      >
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
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    tracking: ssgwPropTypes.tracking,
  }).isRequired,
};

MenuLink.propTypes = MenuLinkPropTypes;

export default MenuLink;
