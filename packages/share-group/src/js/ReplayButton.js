import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Replay } from '../../../icon/src/';
import styles from '../ShareGroup.scss';

const cx = classNames.bind(styles);

class ReplayButton extends PureComponent {
  render() {
    const { label, icon, dividerPos, ...rest } = this.props;
    return (
      <button
        className={cx(
          'replayBtn',
          `replayBtn--divider_${dividerPos === 'left' ? 'l' : 'r'}`
        )}
        {...rest}
      >
        <span className={cx('replayBtn__icon')}>{icon}</span>
        <div className={cx('replayBtn__copy')}>
          <span className={cx('replayBtn__text', 'replayBtn__text--primary')}>
            {label}
          </span>
          <span className={cx('replayBtn__text', 'replayBtn__text--secondary')}>
            {label}
          </span>
        </div>
      </button>
    );
  }
}

ReplayButton.defaultProps = {
  dividerPos: 'left',
};

ReplayButton.propTypes = {
  label: PropTypes.string.isRequired,
  dividerPos: PropTypes.oneOf(['left', 'right']),
  icon: PropTypes.node,
};

export default ReplayButton;
