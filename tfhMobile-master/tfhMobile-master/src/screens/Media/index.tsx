import { ScrollView, View } from 'react-native';
import React from 'react';
import appColors from '../../theme/colors';
import IntroHeader from '../../components/MediaScreen/IntroHeader';
import MediaCard from '../../components/MediaScreen/MediaCard';
import mediaContents from '../../components/MediaScreen/mediaContents';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const MediaScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['MEDIA']>) => {
  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: appColors.white,
        paddingBottom: scaledHeight(30),
      }}>
      <IntroHeader />
      <View
        style={{ paddingHorizontal: scaledWidth(20), gap: scaledHeight(17) }}>
        {mediaContents.map(item => (
          <MediaCard
            key={item.mainText}
            icon={item.icon}
            mainText={item.mainText}
            subText={item.subText}
            showInfoText={item.showInfoText}
            isLive={item.isLive}
            destination={item.destination}
            navigateToScreen={navigateToScreen}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default MediaScreen;
