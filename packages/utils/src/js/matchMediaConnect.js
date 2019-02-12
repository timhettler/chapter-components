import { createMatchMediaConnect } from 'react-matchmedia-connect';

const breakpoint = {
  small: 375,
  medium: 768,
};

const connect = createMatchMediaConnect({
  isSmall: `(max-width: ${breakpoint.small}px)`,
  isSmallAndMedium: `(max-width: ${breakpoint.medium}px)`,
  isMedium: `(min-width: ${breakpoint.small + 1}px) and (max-width: ${
    breakpoint.medium
  }px)`,
  isMediumAndLarge: `(min-width: ${breakpoint.medium + 1}px)`,
});

export default connect;
