import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenNames } from '../../../screens/screenNames';
import FeedbackScreen from '../../../screens/Feedback';
import { stackHeaderStyles } from '../../../functions/globalStyle';

const Stack = createNativeStackNavigator();

const FeedbackStack = () => {
  return (
    <Stack.Group
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name={screenNames.FEEDBACK}
        component={FeedbackScreen}
        options={{
          ...stackHeaderStyles,
          title: '',
        }}
      />
    </Stack.Group>
  );
};

export default FeedbackStack;
