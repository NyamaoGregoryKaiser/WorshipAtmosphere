import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoreScreen from '../../../screens/More';
import { screenNames } from '../../../screens/screenNames';
import AboutStack from '../About';
import AnnouncementStack from '../Announcements';
import TestimonyStack from '../Testimonies';
import FeedbackStack from '../Feedback';
import EventsStack from '../Events';
import DevotionalsStack from '../Devotionals';
import PodcastsScreen from '../../../screens/Media/PodcastsScreen';
import { stackHeaderStyles } from '../../../functions/globalStyle';

const Stack = createNativeStackNavigator();

const MoreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.MORE}
        component={MoreScreen}
        options={{
          headerShown: false,
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
      {AboutStack()}
      {AnnouncementStack()}
      {TestimonyStack()}
      {FeedbackStack()}
      {EventsStack()}
      {DevotionalsStack()}
    </Stack.Navigator>
  );
};

export default MoreStack;
