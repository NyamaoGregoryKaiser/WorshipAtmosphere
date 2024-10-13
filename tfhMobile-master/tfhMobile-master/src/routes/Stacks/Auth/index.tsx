import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenNames } from '../../../screens/screenNames';
import AboutScreen from '../../../screens/About';
import { stackHeaderStyles } from '../../../functions/globalStyle';
import LoginScreen from '../../../screens/Auth/Login';
import RegisterScreen from '../../../screens/Auth/Register';
import ForgotPasswordScreen from '../../../screens/Auth/ForgotPassword';
import ForgotPasswordUpdateScreen from '../../../screens/Auth/ForgotPassword/ForgotPasswordUpdateScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Group
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name={screenNames.LOGIN}
        component={LoginScreen}
        options={{
          ...stackHeaderStyles,
          title: '',
        }}
      />
      <Stack.Screen
        name={screenNames.REGISTER}
        component={RegisterScreen}
        options={{
          ...stackHeaderStyles,
          title: '',
        }}
      />
      <Stack.Screen
        name={screenNames.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
        options={{
          ...stackHeaderStyles,
          title: '',
        }}
      />
      <Stack.Screen
        name={screenNames.FORGOT_PASSWORD_UPDATE}
        component={ForgotPasswordUpdateScreen}
        options={{
          ...stackHeaderStyles,
          title: '',
        }}
      />
    </Stack.Group>
  );
};

export default AuthStack;
