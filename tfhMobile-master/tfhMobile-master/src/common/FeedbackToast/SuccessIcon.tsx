import { View, Text, Image } from 'react-native';
import React from 'react';
import SuccessImage from '../../assets/icons/success.svg';

const SuccessIcon = () => {
  return (
    <View
      style={{
        height: '100%',
        width: 50,
        backgroundColor: '#08A05C',
        borderTopLeftRadius: 6.23,
        borderBottomLeftRadius: 6.23,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SuccessImage width={20} height={20} />
    </View>
  );
};

export default SuccessIcon;
