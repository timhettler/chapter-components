import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { MovementContainer } from '@ssgw/utils';

import styles from './ChapterTitle.scss';

const cx = classNames.bind(styles);

function stripHtml(htmlString) {
  var stripedHtml = htmlString.replace(/<[^>]+>/g, ' ');
  return stripedHtml.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
}

class ChapterTitle extends PureComponent {
  getBoundedNumber(numA, numB) {
    const randomNumber = Math.round(Math.random() * numA) + numB;
    return randomNumber;
  }

  randomNumber(abs = false, factor = 7) {
    const $factor = 25 * factor;
    const random = Math.round(Math.random() * ($factor * 2)) - $factor;
    if (random === 0) return this.randomNumber();
    return abs ? Math.abs(random) : random;
  }

  getExpandedTransform() {
    const $tD = this.randomNumber(true);
    const $rY = this.randomNumber(false, 1.3);
    return `translate3d(0, 0, ${$tD}px) rotateX(0deg) rotateY(${$rY}deg)`;
  }

  getFadedTransform() {
    const $randomZ = this.getBoundedNumber(300, 150);
    const $randomY =
      this.getBoundedNumber(10, 7) * (Math.random() < 0.5 ? -1 : 1);
    return `translate3d(0, 0, ${$randomZ}px) rotateX(0deg) rotateY(${$randomY}deg)`;
  }

  getLetterTransition(i) {
    const increment = 100 * i;
    const delay = 40 * i;

    return `opacity ${increment}ms ${delay}ms, transform ${increment}ms ${delay}ms`;
  }

  renderSubtitle(subtitle, state) {
    let letterIndex = 0;
    const lines = subtitle.split('<br>');

    return lines.map((line, i) => {
      const letters = line.split('').map((letter, i) => {
        letterIndex++;

        return (
          <span
            className={cx('letter')}
            key={`${letter}+${i}`}
            style={{
              transition: this.getLetterTransition(letterIndex),
            }}
          >
            <span
              className={cx('letter-inner')}
              style={{
                transform:
                  state === 'expanded'
                    ? this.getExpandedTransform()
                    : state === 'faded'
                    ? this.getFadedTransform()
                    : null,
              }}
            >
              {letter.replace(' ', '\u00A0')}
            </span>
          </span>
        );
      });

      return (
        <div key={`${line}+${i}`} className={cx('line')}>
          {letters}
        </div>
      );
    });
  }

  render() {
    const { state, title, subtitle, theme, movement, ...rest } = this.props;

    return (
      <header className={cx('header', `is-${theme}`, `is-${state}`)} {...rest}>
        {/* {title && (
          <MovementContainer lag={0.006} movement={movement}>
            <h1 className={cx('title')}>{title}</h1>
          </MovementContainer>
        )} */}
        <MovementContainer movement={movement}>
          <h2 className={cx('subtitle')} aria-label={stripHtml(subtitle)}>
            {this.renderSubtitle(subtitle, state)}
          </h2>
        </MovementContainer>
      </header>
    );
  }
}

ChapterTitle.defaultProps = {
  theme: 'dark',
  state: 'default',
  movement: true,
};

ChapterTitle.propTypes = {
  // title: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
  state: PropTypes.oneOf(['pre', 'default', 'expanded', 'faded']),
  movement: PropTypes.bool,
};

export default ChapterTitle;
