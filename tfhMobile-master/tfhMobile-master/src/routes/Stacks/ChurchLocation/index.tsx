import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenNames } from '../../../screens/screenNames';
import ChurchLocationScreen from '../../../screens/ChurchLocation';
import { stackHeaderStyles } from '../../../functions/globalStyle';

const Stack = createNativeStackNavigator();

const ChurchLocationStack = () => {
  return (
    <Stack.Group
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name={screenNames.CHURCH_LOCATION}
        component={ChurchLocationScreen}
        options={{
          ...stackHeaderStyles,
          title: '',
        }}
      />
    </Stack.Group>
  );
};

export default ChurchLocationStack;
