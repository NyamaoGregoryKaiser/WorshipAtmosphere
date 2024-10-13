import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenNames } from '../../../screens/screenNames';
import DevotionalsScreen from '../../../screens/Devotional';
import { stackHeaderStyles } from '../../../functions/globalStyle';
import SingleDevotionalScreen from '../../../screens/Devotional/SingleDevotionalScreen';

const Stack = createNativeStackNavigator();

const DevotionalsStack = () => {
  return (
    <Stack.Group
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name={screenNames.DEVOTIONALS}
        component={DevotionalsScreen}
        options={{
          ...stackHeaderStyles,
          title: "The Father's Menu",
        }}
      />
      <Stack.Screen
        name={screenNames.SINGLE_DEVOTIONAL}
        component={SingleDevotionalScreen}
        options={{
          ...stackHeaderStyles,
          title: "The Father's Menu",
        }}
      />
    </Stack.Group>
  );
};

export default DevotionalsStack;
