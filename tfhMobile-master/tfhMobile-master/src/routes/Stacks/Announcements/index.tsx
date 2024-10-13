import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenNames } from '../../../screens/screenNames';
import AnnouncementsScreen from '../../../screens/Announcements';
import { stackHeaderStyles } from '../../../functions/globalStyle';
import SingleAnnouncementScreen from '../../../screens/Announcements/SingleAnnouncementScreen';

const Stack = createNativeStackNavigator();

const AnnouncementStack = () => {
  return (
    <Stack.Group
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name={screenNames.ANNOUNCEMENTS}
        component={AnnouncementsScreen}
        options={{
          ...stackHeaderStyles,
          title: 'Announcement',
        }}
      />
      <Stack.Screen
        name={screenNames.SINGLE_ANNOUNCEMENT}
        component={SingleAnnouncementScreen}
        options={{
          ...stackHeaderStyles,
          title: 'Announcement',
        }}
      />
    </Stack.Group>
  );
};

export default AnnouncementStack;
