import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Disclaimer.scss';

const cx = classNames.bind(styles);

class Disclaimer extends PureComponent {
  render() {
    const { show, copy, theme } = this.props;

    return (
      <div className={cx('disclaimer', `is-${theme}`, { 'is-loaded': !!show })}>
        <p>{copy}</p>
      </div>
    );
  }
}

Disclaimer.defaultProps = {
  theme: 'dark',
};

Disclaimer.propTypes = {
  show: PropTypes.bool,
  copy: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
};

export default Disclaimer;
