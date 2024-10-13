import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenNames } from '../../../screens/screenNames';
import TestimoniesScreen from '../../../screens/Testimonies';
import { stackHeaderStyles } from '../../../functions/globalStyle';
import SendTestimonyScreen from '../../../screens/Testimonies/SendTestimonyScreen';
import AddIcon from '../../../assets/icons/svgs/testimony/add-black.svg';
import SingleTestimonyScreen from '../../../screens/Testimonies/SingleTestimonyScreen';

const Stack = createNativeStackNavigator();

const TestimonyStack = () => {
  return (
    <Stack.Group
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name={screenNames.TESTIMONIES}
        component={TestimoniesScreen}
        options={({ navigation }) => ({
          ...stackHeaderStyles,
          title: 'Testimonies',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate(screenNames.SEND_TESTIMONY)}>
              <AddIcon />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name={screenNames.SINGLE_TESTIMONY}
        component={SingleTestimonyScreen}
        options={({ navigation }) => ({
          ...stackHeaderStyles,
          title: 'Testimonies',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate(screenNames.SEND_TESTIMONY)}>
              <AddIcon />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name={screenNames.SEND_TESTIMONY}
        component={SendTestimonyScreen}
        options={{
          ...stackHeaderStyles,
          title: '',
        }}
      />
    </Stack.Group>
  );
};

export default TestimonyStack;
