import { html, render as litRender } from 'lit-html';
import classNames from 'classnames/bind';

import styles from './BeginButton.scss';

const cx = classNames.bind(styles);

const defaultProps = {
  callback: () => {},
  theme: 'dark',
  container: document.body,
  copy: 'begin',
};

export default class BeginButton {
  constructor({ callback, theme, container, copy } = defaultProps) {
    this.callback = callback;
    this.theme = theme;
    this.container = container;
    this.copy = copy;
  }

  getTemplate({ disabled }) {
    return html`
      <button
        @click="${this.callback}"
        ?disabled="${disabled}"
        class="${cx('beginButton', `is-${this.theme}`)}"
        aria-label="${this.copy}"
      >
        <div class="${cx('outline', 'outline-a')}"></div>
        <div class="${cx('outline', 'outline-b')}"></div>
        <div class="${cx('text', 'text-a')}">${this.copy}</div>
        <div class="${cx('text', 'text-b')}" aria-hidden="true">
          ${this.copy}
        </div>
      </button>
    `;
  }

  render(data = {}) {
    return litRender(this.getTemplate(data), this.container);
  }
}
