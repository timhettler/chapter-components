import React, { Component } from 'react';

export default function withContainerHeight(WrappedComponent) {
  class HOC extends Component {
    constructor(props) {
      super(props);

      this.state = {
        containerHeight: null,
      };

      this.ref = React.createRef();
    }

    componentDidMount() {
      window.addEventListener('resize', this.setContainerHeight.bind(this));
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.setContainerHeight.bind(this));
    }

    // The Samsung container has a variable amount of banners &
    // navigation above the main content container. We subtract the
    // top of the element from the page height to get the available
    // space for our app.
    setContainerHeight() {
      if (!this.ref.current) {
        return;
      }

      const dimensions = this.ref.current.getBoundingClientRect();

      this.setState({
        containerHeight: window.innerHeight - dimensions.top,
      });
    }

    render() {
      return (
        <WrappedComponent
          ref={this.ref}
          containerHeight={this.state.containerHeight}
          {...this.props}
        />
      );
    }
  }

  return HOC;
}
