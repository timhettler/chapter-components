import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ChapterTitle.scss';

const cx = classNames.bind(styles);

class ChapterTitle extends PureComponent {
  constructor(props) {
    super(props);

    this.$header = React.createRef();
    this.$title = React.createRef();
    this.$subtitle = React.createRef();

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    document.body.removeEventListener('mousemove', this.handleMouseMove);
  }

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

  panElement(e, nodeElement, lag) {
    if (!nodeElement) return false;

    const $xTargetDistance =
      nodeElement.offsetWidth / 2 + nodeElement.offsetLeft - e.pageX;
    const $yTargetDistance =
      nodeElement.offsetHeight / 2 + nodeElement.offsetTop - e.pageY;

    const $T = 0.035;
    const $L = lag || null;

    const $valX = !($xTargetDistance < 0)
      ? $xTargetDistance * -($L ? lag : $T)
      : Math.abs($xTargetDistance) * ($L ? lag : $T);
    const $valY = !($yTargetDistance < 0)
      ? $yTargetDistance * -($L ? lag : $T)
      : Math.abs($yTargetDistance) * ($L ? lag : $T);

    nodeElement.style.transform = `translate3d(${$valX}px, ${$valY}px, 0px)`;

    return true;
  }

  getFadedTransform() {
    const $randomZ = this.getBoundedNumber(300, 150);
    const $randomY =
      this.getBoundedNumber(10, 7) * (Math.random() < 0.5 ? -1 : 1);
    return `translate3d(0, 0, ${$randomZ}px) rotateX(0deg) rotateY(${$randomY}deg)`;
  }

  handleMouseMove(e) {
    this.panElement(e, this.$title.current, 0.006);
    this.panElement(e, this.$subtitle.current);
  }

  getLetterTransition(i) {
    const increment = 100 * (i + 1);
    const delay = 40 * (i + 1);

    return `opacity ${increment}ms ${delay}ms, transform ${increment}ms ${delay}ms`;
  }

  renderSubtitle(state) {
    const lines = this.props.subtitle.split('<br>');

    return lines.map((line, i) => {
      const letters = line.split('').map((letter, i) => (
        <span
          key={`${letter}+${i}`}
          className={cx('letter')}
          style={{
            transition: this.getLetterTransition(i),
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
      ));

      return (
        <div key={`${line}+${i}`} className={cx('line')}>
          {letters}
        </div>
      );
    });
  }

  render() {
    const { state, title, theme } = this.props;

    return (
      <header
        ref={this.$header}
        className={cx('header', `is-${theme}`, `is-${state}`)}
      >
        <h1 ref={this.$title} className={cx('title')}>
          {title}
        </h1>
        <h2 ref={this.$subtitle} className={cx('subtitle')}>
          {this.renderSubtitle(state)}
        </h2>
      </header>
    );
  }
}

ChapterTitle.defaultProps = {
  theme: 'dark',
  state: 'default',
};

ChapterTitle.proptTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
  state: PropTypes.oneOf(['pre', 'default', 'expanded', 'faded']),
};

export default ChapterTitle;
