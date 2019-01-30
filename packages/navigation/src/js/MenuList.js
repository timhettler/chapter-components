import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../Navigation.scss';
import MenuLink from './MenuLink';

const cx = classNames.bind(styles);

class MenuList extends PureComponent {
  render() {
    const { isActive, chapters, currentChapter } = this.props;
    return (
      <div className={cx('menuList', `${isActive ? 'menuList--active' : ''}`)}>
        <div className={cx('menuList__container')}>
          {chapters.map((chapter, i) => {
            return (
              <MenuLink
                key={i}
                currentChapter={currentChapter}
                chapter={chapter}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

MenuList.defaultProps = {};

MenuList.propTypes = {};

export default MenuList;
