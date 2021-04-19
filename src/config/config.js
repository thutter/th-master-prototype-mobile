import { Platform, Dimensions } from 'react-native';

const os = Platform.OS;
const osVersion = Platform.Version;

export const getDimensions = () => {
  return Dimensions.get('window');
};

export const isWideScreen = () => getDimensions().width >= 768;
export const getFontScaling = () => (isWideScreen() ? 1.2 : 1);

const config = {
  device: {
    os,
    osVersion,
  },
  version: '0.0.1',
};

export default config;
