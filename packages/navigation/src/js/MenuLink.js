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
    const { currentChapter, chapter, ...rest } = this.props;
    return (
      <li
        className={cx('menuLink', {
          'menuLink--current': currentChapter === chapter.id,
        })}
      >
        <a href={currentChapter === chapter.id ? null : chapter.url} {...rest}>
          <LinkContent chapter={chapter} />
        </a>
      </li>
    );
  }
}

MenuLink.defaultProps = {};

MenuLink.propTypes = {
  currentChapter: PropTypes.string.isRequired,
  chapter: PropTypes.object.isRequired,
};

export default MenuLink;
