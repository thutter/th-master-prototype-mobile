import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  icon: {
    // This can make it difficult to set the size of the icon directly
    // Set the container size for static dimensions
    maxHeight: '100%',
    maxWidth: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
    resizeMode: 'contain',
    flex: 1,
  },
});

const Icon = ({ source, color, onPress, style, containerStyle, size, fill }) =>
  onPress && typeof onPress === 'function' ? (
    <TouchableOpacity onPress={onPress} style={[styles.root, containerStyle]}>
      <Image
        source={source}
        style={[
          styles.icon,
          { tintColor: color },
          !fill && { width: size },
          style,
        ]}
      />
    </TouchableOpacity>
  ) : (
    <View style={[styles.root, containerStyle]}>
      <Image
        source={source}
        style={[
          styles.icon,
          { tintColor: color },
          !fill && { width: size },
          style,
        ]}
      />
    </View>
  );

const makeIcon = imageSource => props => (
  <Icon source={imageSource} color={props.color || '#000'} {...props} />
);

const menuIconSrc = require('../assets/menu_black_48dp.png');
export const MenuIcon = makeIcon(menuIconSrc);
