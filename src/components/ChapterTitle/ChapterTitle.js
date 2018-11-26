import { html, render as litRender } from 'lit-html';
import classNames from 'classnames/bind';

import styles from './ChapterTitle.scss';

const cx = classNames.bind(styles);

const defaultProps = {
  container: document.body,
  theme: 'dark',
  title: 'Chapter 5',
  subtitle: 'More Than<br>a Stylus',
};

export default class BeginButton {
  constructor({ container, theme, title, subtitle } = defaultProps) {
    this.container = container;
    this.theme = theme;
    this.title = title;
    this.subtitle = subtitle;

    // TODO move to container element
    this.container.addEventListener(
      'mousemove',
      this.handleMouseMove.bind(this)
    );
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
    const $letters = document.querySelectorAll(`.${cx('letter')}`);
    $letters.forEach(letter => {
      letter.style.transform = bool ? this.getExpandTransform() : '';
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

  zoomAndFade() {
    const $header = document.querySelector(`.${cx('header')}`);
    const $letters = document.querySelectorAll(`.${cx('letter')}`);

    $header.style.opacity = 0;

    $letters.forEach(letter => {
      const $randomZ = this.getBoundedNumber(300, 150);
      const $randomY = this.getBoundedNumber(10, 7);
      const $tDD = $randomZ;
      const $rYY = Math.random() < 0.5 ? -$randomY : $randomY;
      letter.style.transform = `translate3d(0, 0, ${$tDD}px) rotateX(0deg) rotateY(${$rYY}deg)`;
    });
  }

  handleMouseMove(e) {
    const $title = document.querySelector(`.${cx('title')}`);
    const $subtitle = document.querySelector(`.${cx('subtitle')}`);
    this.panElement(e, $title, 0.006);
    this.panElement(e, $subtitle);
  }

  getInitialTransition(i) {
    const increment = 100 * i;
    const delay = 40 * i;

    return `opacity ${increment}ms cubic-bezier(0.165, 0.84, 0.44, 1) ${delay}ms, transform ${increment}ms cubic-bezier(0.165, 0.84, 0.44, 1) ${delay}ms`;
  }

  divideSubtitle() {
    const lines = this.subtitle.split('<br>');
    return lines.map(line => {
      const letters = line
        .split('')
        .map(
          letter =>
            `<span class="${cx('letter')}">${letter.replace(
              ' ',
              '&nbsp;'
            )}</span>`
        );
      const $div = document.createElement('div');
      $div.classList.add(cx('line'));
      $div.innerHTML = letters.join('');
      return $div;
    });
  }

  getTemplate({ expand }) {
    return html`
      <header class="${cx('header', `is-${this.theme}`)}">
        <h1 class="${cx('title')}">${this.title}</h1>
        <h2 class="${cx('subtitle')}">${this.divideSubtitle(expand)}</h2>
      </header>
    `;
  }

  render(data = {}) {
    litRender(this.getTemplate(data), this.container);

    setTimeout(() => {
      const $header = document.querySelector(`.${cx('header')}`);
      const $letters = document.querySelectorAll(`.${cx('letter')}`);

      $letters.forEach((letter, i) => {
        letter.style.transition = this.getInitialTransition(i);
      });

      $header.classList.add(cx('is-loaded'));
    }, 1000);
  }
}
