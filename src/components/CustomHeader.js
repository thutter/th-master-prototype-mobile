import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { MenuIcon } from '../components/Icon';

import config, { ROUTES } from '../config';

export const HEADER_HEIGHT = 60;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: HEADER_HEIGHT,
  },
  iconContainer: {
    position: 'absolute',
    left: 10,
    width: 42,
    height: 42,
  },
  headerText: {
    fontSize: 24,
    letterSpacing: 5,
  },
});

const CustomHeader = ({ scene, previous, navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.iconContainer}>
        <MenuIcon size={38} onPress={() => navigation.toggleDrawer()} />
      </View>
      <View>
        <Text style={styles.headerText}>JAMSTACK</Text>
      </View>
    </SafeAreaView>
  );
};

CustomHeader.propTypes = {
  scene: PropTypes.object.isRequired,
  previous: PropTypes.object,
  navigation: PropTypes.object.isRequired,
};

export default CustomHeader;
