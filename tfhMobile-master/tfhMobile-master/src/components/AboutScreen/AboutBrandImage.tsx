import { Image } from 'react-native';
import React from 'react';
import { scaledHeight } from '../../functions/utils';

const AboutBrandImage = () => {
  return (
    <Image
      source={require('../../assets/brand/logo.png')}
      style={{
        height: scaledHeight(122),
        resizeMode: 'contain',
        marginVertical: scaledHeight(19),
        alignSelf: 'center',
      }}
    />
  );
};

export default AboutBrandImage;
