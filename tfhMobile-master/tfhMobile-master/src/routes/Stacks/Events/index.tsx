import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenNames } from '../../../screens/screenNames';
import EventsScreen from '../../../screens/Events';
import { stackHeaderStyles } from '../../../functions/globalStyle';
import SingleEventScreen from '../../../screens/Events/SingleEventScreen';

const Stack = createNativeStackNavigator();

const EventsStack = () => {
  return (
    <Stack.Group
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name={screenNames.EVENTS}
        component={EventsScreen}
        options={{
          ...stackHeaderStyles,
          title: 'Events',
        }}
      />
      <Stack.Screen
        name={screenNames.SINGLE_EVENT}
        component={SingleEventScreen}
        options={{
          ...stackHeaderStyles,
          title: 'Events',
        }}
      />
    </Stack.Group>
  );
};

export default EventsStack;
