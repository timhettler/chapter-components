import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../Navigation.scss';
import MenuLink, { MenuLinkPropTypes } from './MenuLink';

const cx = classNames.bind(styles);

class MenuList extends PureComponent {
  render() {
    const { isActive, chapters, currentChapter, cta } = this.props;
    return (
      <ol className={cx('menuList')} hidden={!isActive}>
        {chapters.map((chapter, i) => {
          const isCurrent = currentChapter === chapter.id;

          return (
            <li
              key={i}
              className={cx('menuLink', {
                'menuLink--current': isCurrent,
              })}
            >
              <MenuLink isCurrent={isCurrent} data={chapter} />
            </li>
          );
        })}
        {cta ? <li className={cx('menuLink')}>{cta}</li> : null}
      </ol>
    );
  }
}

MenuList.defaultProps = {};

export const MenuListProps = {
  isActive: PropTypes.bool,
  currentChapter: PropTypes.string.isRequired,
  chapters: PropTypes.arrayOf(MenuLinkPropTypes.data).isRequired,
  cta: PropTypes.string,
};

MenuList.propTypes = MenuListProps;

export default MenuList;
