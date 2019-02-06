import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../Navigation.scss';

const cx = classNames.bind(styles);

const LinkContent = ({ chapterInfo }) => {
  return (
    <React.Fragment>
      <div className={cx('menuLink__number')}>{chapterInfo.id}</div>
      <div className={cx('menuLink__dash')}>&ndash;</div>
      <div className={cx('menuLink__title')}>{chapterInfo.chapterTitle}</div>
      <div className={cx('menuLink__line')} />
    </React.Fragment>
  );
};

class MenuLink extends PureComponent {
  render() {
    const { currentChapter, data, ...rest } = this.props;
    return (
      <li
        className={cx('menuLink', {
          'menuLink--current': currentChapter === data.id,
        })}
      >
        <a
          href={data.url}
          tabIndex={currentChapter === data.id ? -1 : null}
          {...rest}
        >
          <LinkContent chapterInfo={data} />
        </a>
      </li>
    );
  }
}

MenuLink.defaultProps = {};

MenuLink.propTypes = {
  currentChapter: PropTypes.string.isRequired,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    chapterName: PropTypes.string.isRequired,
    chapterTitle: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuLink;
