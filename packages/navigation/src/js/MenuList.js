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
      <ol className={cx('menuList', { 'menuList--active': isActive })}>
        {chapters.map((chapter, i) => {
          return (
            <MenuLink
              key={i}
              currentChapter={currentChapter}
              chapter={chapter}
            />
          );
        })}
      </ol>
    );
  }
}

MenuList.defaultProps = {
  isActive: false,
};

MenuList.propTypes = {
  isActive: PropTypes.bool.isRequired,
  currentChapter: PropTypes.string.isRequired,
  chapters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MenuList;
