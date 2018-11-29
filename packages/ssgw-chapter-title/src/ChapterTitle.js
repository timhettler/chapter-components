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

  componentDidUpdate(prevProps) {
    if (this.props.expanded !== prevProps.expanded) {
      this.toggleLetterTransform(this.props.expanded);
    }
    if (this.props.faded !== prevProps.faded) {
      this.zoomAndFade(this.props.faded);
    }
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

  getExpandTransform() {
    const $tD = this.randomNumber(true);
    const $rY = this.randomNumber(false, 1.3);
    return `translate3d(0, 0, ${$tD}px) rotateX(0deg) rotateY(${$rY}deg)`;
  }

  toggleLetterTransform(bool) {
    const $letters = this.$subtitle.current.querySelectorAll(
      `.${cx('letter')}`
    );
    $letters.forEach(letter => {
      letter.style.transform = bool ? this.getExpandTransform() : null;
    });
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

  zoomAndFade(bool) {
    const $header = this.$header.current;
    const $letters = this.$subtitle.current.querySelectorAll(
      `.${cx('letter')}`
    );

    $header.style.opacity = bool ? 0 : 1;

    $letters.forEach(letter => {
      const $randomZ = this.getBoundedNumber(300, 150);
      const $randomY =
        this.getBoundedNumber(10, 7) * (Math.random() < 0.5 ? -1 : 1);
      if (bool) {
        letter.style.transform = `translate3d(0, 0, ${$randomZ}px) rotateX(0deg) rotateY(${$randomY}deg)`;
      } else {
        letter.style.transform = null;
      }
    });
  }

  handleMouseMove(e) {
    this.panElement(e, this.$title.current, 0.006);
    this.panElement(e, this.$subtitle.current);
  }

  getLetterTransition(i) {
    const increment = 100 * i;
    const delay = 40 * i;

    return `opacity ${increment}ms ${delay}ms, transform ${increment}ms ${delay}ms`;
  }

  renderSubtitle() {
    const lines = this.props.subtitle.split('<br>');

    return lines.map((line, i) => {
      const letters = line.split('').map((letter, i) => (
        <span
          key={`${letter}+${i}`}
          className={cx('letter')}
          style={{
            transition: this.getLetterTransition(i),
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
    const { disabled, title, theme, expanded } = this.props;

    return (
      <header
        ref={this.$header}
        className={cx('header', `is-${theme}`, { 'is-disabled': disabled })}
      >
        <h1 ref={this.$title} className={cx('title')}>
          {title}
        </h1>
        <h2 ref={this.$subtitle} className={cx('subtitle')}>
          {this.renderSubtitle()}
        </h2>
      </header>
    );
  }
}

ChapterTitle.defaultProps = {
  theme: 'dark',
};

ChapterTitle.proptTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
  faded: PropTypes.bool,
};

export default ChapterTitle;
