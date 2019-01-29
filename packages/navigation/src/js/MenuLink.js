import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../Navigation.scss';

const cx = classNames.bind(styles);

const LinkContent = ({ chapter }) => {
  return (
    <React.Fragment>
      <div className={cx('menuLink__number')}>{chapter.id}</div>
      <div className={cx('menuLink__dash')}>&ndash;</div>
      <div className={cx('menuLink__title')}>{chapter.chapterTitle}</div>
      <div className={cx('menuLink__line')} />
    </React.Fragment>
  );
};

class MenuLink extends PureComponent {
  render() {
    const { isCurrentChapter, chapter, ...rest } = this.props;
    if (!isCurrentChapter) {
      return (
        <a href={chapter.url} className={cx('menuLink')} {...rest}>
          <LinkContent chapter={chapter} />
        </a>
      );
    }
    return (
      <div className={cx('menuLink', 'menuLink--current')} {...rest}>
        <LinkContent chapter={chapter} />
      </div>
    );
  }
}

MenuLink.defaultProps = {};

MenuLink.propTypes = {};

export default MenuLink;
