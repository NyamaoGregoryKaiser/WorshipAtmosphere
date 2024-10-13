import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MediaScreen from '../../../screens/Media';
import { stackHeaderStyles } from '../../../functions/globalStyle';
import { screenNames } from '../../../screens/screenNames';
import StreamingPlatformsScreen from '../../../screens/Media/StreamingPlatformsScreen';
import RecentMessagesScreen from '../../../screens/Media/RecentMessagesScreen';
import PodcastsScreen from '../../../screens/Media/PodcastsScreen';
import ArchiveScreen from '../../../screens/Media/ArchiveScreen';

const Stack = createNativeStackNavigator();

const MediaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.MEDIA}
        component={MediaScreen}
        options={{
          ...stackHeaderStyles,
          title: 'Media',
        }}
      />
      <Stack.Screen
        name={screenNames.STREAMING_PLATFORMS}
        component={StreamingPlatformsScreen}
        options={{
          ...stackHeaderStyles,
          title: 'Streaming Platforms',
        }}
      />
      <Stack.Screen
        name={screenNames.RECENT_MESSAGES}
        component={RecentMessagesScreen}
        options={{
          ...stackHeaderStyles,
          title: 'Recent Messages',
        }}
      />
      <Stack.Screen
        name={screenNames.PODCASTS}
        component={PodcastsScreen}
        options={{
          ...stackHeaderStyles,
          title: 'Podcast',
        }}
      />
      <Stack.Screen
        name={screenNames.ARCHIVE}
        component={ArchiveScreen}
        options={{
          ...stackHeaderStyles,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default MediaStack;
