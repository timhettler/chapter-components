/* @jsx node */

import { node } from 'jsx-pragmatic';
import classNames from 'classnames/bind';

import styles from './Disclaimer.scss';

const cx = classNames.bind(styles);

const defaultProps = {
  container: document.body,
  copy: [
    'Display quality depends on hardware, browser, and connection speed.',
    'Experience is best viewed in Portrait mode for Mobile/Tablet.',
  ],
};

export default class Disclaimer {
  constructor({ container, copy } = defaultProps) {
    this.container = container;
    this.copy = copy;
  }

  static template() {
    return (
      <div id="UIDisclaimer" className={cx('disclaimer')}>
        {this.copy.map(copy => (
          <p>{copy}</p>
        ))}
      </div>
    );
  }

  render(data = {}) {
    litRender(this.template(), this.container);

    setTimeout(() => {
      const $elem = document.querySelector('#UIDisclaimer');
      $elem.classList.add(cx('is-loaded'));
    }, 1000);
  }
}
