import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import get from 'lodash/get';

import { ROUTES, INITIAL_NESTED_ROUTE } from '../config';
import injectScreenDimensions from '../components/injectScreenDimensions';
import CustomHeader from '../components/CustomHeader';
import HomeScreen from '../components/screens/HomeScreen';
import DetailScreen from '../components/screens/DetailScreen';

const Stack = createStackNavigator();

const NestedStackNavigation = props => {
  const routeName = get(props, 'route.name', ROUTES.DRAWER.HOME);
  const initialRouteName = INITIAL_NESTED_ROUTE[routeName];
  const dimensionsWidth = get(props, 'dimensions.width');

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      headerMode="screen"
      screenOptions={{
        header: propss => <CustomHeader {...propss} />,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        gestureResponseDistance: {
          horizontal: dimensionsWidth,
        },
        cardStyleInterpolator: ({ current, next, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
            overlayStyle: {
              opacity: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
              }),
            },
          };
        },
      }}
    >
      <Stack.Screen name={ROUTES.NESTEDSTACK.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.NESTEDSTACK.PRODUCTS} component={HomeScreen} />
      <Stack.Screen
        name={ROUTES.NESTEDSTACK.DETAILS}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};

export default injectScreenDimensions(NestedStackNavigation);
