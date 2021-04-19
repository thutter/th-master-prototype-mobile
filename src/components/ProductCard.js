import React from 'react';
import { View, Image, Text } from 'react-native';
import tailwind from 'tailwind-rn';

import { STRAPI_BASE_URL } from '../config/constants';

const ProductCard = ({ Name, Description, Gallery, Price }) => (
  <View style={tailwind('bg-white rounded-lg mb-5')}>
    <Image
      style={tailwind('w-full h-36 rounded-t-lg')}
      source={{ uri: STRAPI_BASE_URL + Gallery.formats.large.url }}
    />
    <View style={tailwind('p-3')}>
      <View style={tailwind('flex flex-1 flex-row flex-wrap')}>
        <Text style={tailwind('text-lg font-semibold text-gray-900')}>
          {Name}
        </Text>
        <Text style={tailwind('text-gray-700 w-full')}>${Price}</Text>
      </View>
      <Text style={tailwind('mt-3 text-gray-700 text-sm')}>
        {Description.substring(
          0,
          Description.length > 160 ? 160 : Description.length,
        )}
        ...
      </Text>
    </View>
  </View>
);

export default ProductCard;
