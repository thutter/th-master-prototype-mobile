import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import tailwind from 'tailwind-rn';

import { STRAPI_BASE_URL } from '../../config';

const DetailScreen = ({
  route: {
    params: { Title, Thumbnail, published_at, author, Content },
  },
}) => (
  <ScrollView>
    <Image
      style={tailwind('w-full h-44')}
      source={{ uri: STRAPI_BASE_URL + Thumbnail.formats.large.url }}
    />
    <View style={tailwind('p-3')}>
      <Text style={tailwind('text-3xl font-bold text-center text-gray-900')}>
        {Title}
      </Text>
      <Text style={tailwind('text-gray-700 text-right pt-2')}>
        {new Date(published_at).toDateString()}
      </Text>
      <Text style={tailwind('text-base pt-7')}>{Content}</Text>
    </View>
    <View style={tailwind('flex w-full items-center pt-5 mb-12')}>
      <Image
        style={tailwind('w-8 h-8 rounded-full')}
        source={{
          uri: STRAPI_BASE_URL + author.Image.formats.thumbnail.url,
        }}
      />
      <Text style={tailwind('text-lg font-bold p-2')}>{author.Name}</Text>
      <Text style={tailwind('text-base')}>{author.email}</Text>
    </View>
  </ScrollView>
);

export default DetailScreen;
