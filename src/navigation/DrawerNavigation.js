import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ROUTES } from '../config';
import injectScreenDimensions from '../components/injectScreenDimensions';
import NestedStackNavigation from './NestedStackNavigation';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ dimensions }) => {
  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.DRAWER.HOME}
      drawerType="slide"
      edgeWidth={dimensions.width}
      drawerStyle={{
        width: dimensions.width,
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name={ROUTES.DRAWER.HOME}
        component={NestedStackNavigation}
      />
      <Drawer.Screen
        name={ROUTES.DRAWER.PRODUCTS}
        component={NestedStackNavigation}
      />
    </Drawer.Navigator>
  );
};

export default injectScreenDimensions(DrawerNavigation);
