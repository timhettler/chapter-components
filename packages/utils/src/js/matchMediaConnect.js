import { createMatchMediaConnect } from 'react-matchmedia-connect';

const breakpoint = {
  small: 320,
  medium: 768,
};

const connect = createMatchMediaConnect({
  isSmall: `(min-width: ${
    breakpoint.small
  }px) and (max-width: ${breakpoint.small + 160}px)`,
  isSmallAndMedium: `(max-width: ${breakpoint.medium}px)`,
  isMedium: `(min-width: ${breakpoint.small + 161}px) and (max-width: ${
    breakpoint.medium
  }px)`,
  isMediumAndLarge: `(min-width: ${breakpoint.medium + 1}px)`,
  isSmallHeight: `(max-height: ${breakpoint.medium + 12}px)`,
});

export default connect;
