import React from 'react';
import { Dimensions } from 'react-native';

/**
 * TODO
 * IMPROVE THIS HOC
 */
const injectScreenDimensions = BaseComponent => {
  let dimensions = Dimensions.get('window');

  Dimensions.addEventListener('change', ({ window }) => {
    dimensions = {
      ...window,
    };
  });

  return props => <BaseComponent {...props} dimensions={dimensions} />;
};

export default injectScreenDimensions;
