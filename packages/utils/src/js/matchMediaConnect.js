import { createMatchMediaConnect } from 'react-matchmedia-connect';

const breakpoint = {
  small: 375,
  medium: 768,
};

const connect = createMatchMediaConnect({
  isExtraSmall: '(max-width: 320px) and (max-height: 568px)',
  isSmall: `(max-width: ${breakpoint.small}px)`,
  isSmallAndMedium: `(max-width: ${breakpoint.medium}px)`,
  isMedium: `(min-width: ${breakpoint.small + 1}px) and (max-width: ${
    breakpoint.medium
  }px)`,
  isMediumAndLarge: `(min-width: ${breakpoint.medium + 1}px)`,
  isLaptopScreen: `(min-width: ${
    breakpoint.medium
  }px) and (max-height: ${breakpoint.medium + 12}px)`,
});

export default connect;
