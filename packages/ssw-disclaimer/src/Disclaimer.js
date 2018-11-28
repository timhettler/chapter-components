import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Disclaimer.scss';

const cx = classNames.bind(styles);

class Disclaimer extends PureComponent {
  render() {
    const { show, copy } = this.props;

    return (
      <div className={cx('disclaimer', { 'is-loaded': !!show })}>
        {copy.map(line => (
          <p>{line}</p>
        ))}
      </div>
    );
  }
}

Disclaimer.propTypes = {
  show: PropTypes.bool,
  copy: PropTypes.arrayOf(PropTypes.string),
};

export default Disclaimer;
