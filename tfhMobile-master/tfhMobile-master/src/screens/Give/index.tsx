import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import BgImage from '../../components/GiveScreen/BgImage';
import GiveHeader from '../../components/GiveScreen/GiveHeader';
import onlineChannels from '../../components/GiveScreen/OnlineChannel/onlineChannels';
import OnlineChannel from '../../components/GiveScreen/OnlineChannel';
import OfflineHeader from '../../components/GiveScreen/OfflineChannel/OfflineHeader';
import offlineChannels from '../../components/GiveScreen/OfflineChannel/offlineChannels';
import OfflineChannel from '../../components/GiveScreen/OfflineChannel';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const GiveScreen = ({}: NativeStackScreenProps<
  any,
  screenNamesTypes['GIVE']
>) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#F3FDFB',
        position: 'relative',
        paddingHorizontal: scaledWidth(30),
        paddingBottom: scaledHeight(30),
      }}>
      <BgImage />
      <GiveHeader />
      {/* Online Channels */}
      {/* <View style={{ gap: 24 }}>
        {onlineChannels.map(channel => (
          <OnlineChannel
            backgroundColor={channel.backgroundColor}
            icon={channel.icon}
            borderColor={channel.borderColor}
            text={channel.text}
            key={channel.text}
          />
        ))}
      </View> */}
      <OfflineHeader />
      <View style={{ gap: 24 }}>
        {offlineChannels.map(channel => (
          <OfflineChannel
            backgroundColor={channel.backgroundColor}
            icon={channel.icon}
            borderColor={channel.borderColor}
            key={channel.accountNumber}
            accountName={channel.accountName}
            textColor={channel.textColor}
            accountNumber={channel.accountNumber}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default GiveScreen;
