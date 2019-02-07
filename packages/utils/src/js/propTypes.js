import PropTypes from 'prop-types';

const ssgwPropTypes = {};

ssgwPropTypes.tracking = PropTypes.shape({
  'data-omni-type': PropTypes.string.isRequired,
  'data-omni': PropTypes.string.isRequired,
});

export default ssgwPropTypes;
