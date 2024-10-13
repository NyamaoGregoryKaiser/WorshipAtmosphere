import { View, Image } from 'react-native';
import React from 'react';
import BG from '../../../assets/icons/svgs/give/bg.svg';

const BgImage = () => {
  return (
    <View style={{ position: 'absolute', top: 40 }}>
      <BG />
    </View>
  );
};

export default BgImage;
