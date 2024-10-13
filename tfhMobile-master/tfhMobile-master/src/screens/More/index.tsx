import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import appColors from '../../theme/colors';
import MoreHeader from '../../components/MoreScreen/MoreHeader';
import MoreList from '../../components/MoreScreen/MoreList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';

const MoreScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['MORE']>) => {
  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={{ flexGrow: 1, backgroundColor: appColors.white }}>
      <MoreHeader navigateToScreen={navigateToScreen} />

      <MoreList navigateToScreen={navigateToScreen} />
    </View>
  );
};

export default MoreScreen;
