import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../../screens/Home';
import { screenNames } from '../../../screens/screenNames';
import AuthStack from '../Auth';
import AboutStack from '../About';
import AnnouncementStack from '../Announcements';
import ChurchLocationStack from '../ChurchLocation';
import DevotionalsStack from '../Devotionals';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      {AuthStack()}
      {AboutStack()}
      {AnnouncementStack()}
      {ChurchLocationStack()}
      {DevotionalsStack()}
    </Stack.Navigator>
  );
};

export default HomeStack;
