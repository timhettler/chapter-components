import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { panElement } from '../';

class MovementContainer extends Component {
  constructor(props) {
    super(props);

    this.$elem = React.createRef();

    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    if (this.props.movement) {
      document.body.addEventListener('mousemove', this.handleMouseMove);
    }
  }

  componentWillUnmount() {
    if (this.props.movement) {
      document.body.addEventListener('mousemove', this.handleMouseMove);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.movement !== prevProps.movement) {
      if (this.props.movement) {
        document.body.addEventListener('mousemove', this.handleMouseMove);
      } else {
        document.body.removeEventListener('mousemove', this.handleMouseMove);
      }
    }
  }

  handleMouseMove(e) {
    panElement(e, this.$elem.current, this.props.lag);
  }

  render() {
    const { children } = this.props;
    return <div ref={this.$elem}>{children}</div>;
  }
}

MovementContainer.propTypes = {
  lag: PropTypes.number,
  movement: PropTypes.bool,
};

export default MovementContainer;
