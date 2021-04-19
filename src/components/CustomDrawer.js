import React from 'react';
import { useQuery } from '@apollo/client';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import tailwind from 'tailwind-rn';
import LinearGradient from 'react-native-linear-gradient';

import { GET_CATEGORIES, ROUTES } from '../config';

const styles = StyleSheet.create({
  shadow: {
    elevation: 10,
  },
});

const CustomDrawer = ({ navigation }) => {
  const { data } = useQuery(GET_CATEGORIES);

  const mainTextStyle = tailwind(
    'text-2xl font-semibold tracking-widest text-gray-800 uppercase',
  );

  return (
    <SafeAreaView style={tailwind('flex flex-1 bg-gray-200')}>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#fff', '#757575']}
        style={tailwind('flex flex-1')}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#34D399', '#3B82F6']}
          style={[
            tailwind('items-center mt-8 ml-5 mr-5 p-2 rounded-xl'),
            styles.shadow,
          ]}
        >
          <Text
            style={tailwind(
              'text-4xl font-bold tracking-widest uppercase text-white',
            )}
          >
            JAMSTACK
          </Text>
        </LinearGradient>
        <View style={tailwind('flex flex-1 flex-col mt-20 ml-8')}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ROUTES.NESTEDSTACK.HOME, {
                isBlog: true,
                category: undefined,
              })
            }
          >
            <Text style={mainTextStyle}>Home</Text>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#34D399', '#3B82F6']}
              style={tailwind('h-0.5 mt-1 mb-8')}
            />
          </TouchableOpacity>
          <View style={tailwind('ml-4')}>
            {data &&
              Array.isArray(data.categories) &&
              data.categories.map((itm, i) => (
                <TouchableOpacity
                  key={`category-${i}`}
                  onPress={() =>
                    navigation.navigate(ROUTES.NESTEDSTACK.HOME, {
                      isBlog: true,
                      category: itm.id,
                    })
                  }
                >
                  <Text
                    style={tailwind(
                      'text-xl font-semibold tracking-wider text-gray-800 uppercase',
                    )}
                  >
                    {itm?.Name}
                  </Text>
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#34D399', '#3B82F6']}
                    style={tailwind('h-0.5 mt-1 mb-8')}
                  />
                </TouchableOpacity>
              ))}
          </View>
          <TouchableOpacity
            style={tailwind('mt-5')}
            onPress={() =>
              navigation.navigate(ROUTES.NESTEDSTACK.HOME, { isBlog: false })
            }
          >
            <Text style={mainTextStyle}>Products</Text>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#34D399', '#3B82F6']}
              style={tailwind('h-0.5 mt-1 mb-8')}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default CustomDrawer;
