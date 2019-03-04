import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { MovementContainer } from '@ssgw/utils';

import styles from './PrimaryCta.scss';

const cx = classNames.bind(styles);

class PrimaryCta extends PureComponent {
  render() {
    const { baseElement, lag, movement, label, theme, ...rest } = this.props;

    const Base = baseElement;

    return (
      <MovementContainer lag={0.02} movement={movement}>
        <Base
          className={cx('primaryCta', `is-${theme}`)}
          aria-label={label}
          {...rest}
        >
          <div className={cx('outline', 'outline-a')} />
          <div className={cx('outline', 'outline-b')} />
          <div className={cx('text', 'text-a')}>{label}</div>
          <div className={cx('text', 'text-b')} aria-hidden="true">
            {label}
          </div>
        </Base>
      </MovementContainer>
    );
  }
}

PrimaryCta.defaultProps = {
  baseElement: 'button',
  theme: 'dark',
};

PrimaryCta.propTypes = {
  baseElement: PropTypes.string,
  label: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
  movement: PropTypes.bool,
};

export default PrimaryCta;
