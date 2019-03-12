import { createMatchMediaConnect } from 'react-matchmedia-connect';

const breakpoint = {
  small: 500,
  medium: 768,
  smallHeight: 780,
};

const connect = createMatchMediaConnect({
  isSmall: `(max-width: ${breakpoint.small}px)`,
  isSmallAndMedium: `(max-width: ${breakpoint.medium}px)`,
  isMedium: `(min-width: ${breakpoint.small + 1}px) and (max-width: ${
    breakpoint.medium
  }px)`,
  isMediumAndLarge: `(min-width: ${breakpoint.medium + 1}px)`,
  isSmallHeight: `(max-height: ${breakpoint.smallHeight}px)`,
});

export default connect;
